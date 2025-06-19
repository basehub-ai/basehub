import { aliasSeparator } from "./_aliasing.js";
import type { LinkedField, LinkedType } from "./_types.js";

export interface Args {
  [arg: string]: any | undefined;
}

export interface Fields {
  [field: string]: Request;
}

export type Request = boolean | number | Fields;

export interface Context {
  fragmentCounter: number;
  fragments: string[];
}

export interface GraphqlOperation {
  query: string;
  variables?: { [name: string]: any };
  operationName?: string;
}

const parseRequest = (
  operation: "query" | "mutation" | "subscription",
  request: Request | undefined,
  ctx: Context,
  path: string[],
  options?: { aliasPrefix?: string }
): string => {
  if (typeof request === "object" && "__args" in request) {
    const args: any = request.__args;
    const fields: Request | undefined = { ...request };
    delete fields.__args;
    const argNames = Object.keys(args);

    if (argNames.length === 0) {
      return parseRequest(operation, fields, ctx, path, options);
    }

    const argsThatShouldNotBeEnums = [
      // image processing args
      "format",
      "anim",
      "background",
      "border",
      "compression",
      "fit",
      "gamma",
      "gravity",
      "metadata",
      "rotate",
      "sharpen",
      "trim",
    ];

    const argStrings = argNames.map((argName) => {
      let value = args[argName];
      if (typeof value === "object") {
        // stringify the object
        value = JSON.stringify(value);
        const stringifyObject =
          operation === "mutation" &&
          ["transaction", "transactionAsync"].includes(path?.[0] || "") &&
          argName === "data";
        if (stringifyObject) {
          value = '"' + value + '"';
        } else {
          // strip quotes except for string values
          value = value.replace(/"([^"]+)":/g, "$1:");
        }
      } else if (
        typeof value === "string" &&
        argsThatShouldNotBeEnums.includes(argName)
      ) {
        value = JSON.stringify(value);
      }

      return `${argName}:${value}`;
    });
    return `(${argStrings})${parseRequest(
      operation,
      fields,
      ctx,
      path,
      options
    )}`;
  } else if (typeof request === "object" && Object.keys(request).length > 0) {
    const fields = request;
    const fieldNames = Object.keys(fields).filter((k) => Boolean(fields[k]));

    const fieldsSelection = fieldNames
      .filter((f) => !["__scalar", "__name", "__fragmentOn"].includes(f))
      .map((f) => {
        if (f.startsWith("on_")) {
          ctx.fragmentCounter++;
          const implementationFragment = `f${ctx.fragmentCounter}`;
          const parsed = parseRequest(operation, fields[f], ctx, [...path, f], {
            ...options,
            aliasPrefix: implementationFragment,
          });

          const typeMatch = f.match(/^on_(.+)/);

          if (!typeMatch || !typeMatch[1]) {
            throw new Error("match failed");
          }

          ctx.fragments.push(
            `fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`
          );

          return `...${implementationFragment}`;
        } else {
          const field = fields?.[f];
          if (!field) return "";

          // For scalar fields or fields without subfields, just return the field name
          if (
            typeof field === "boolean" ||
            typeof field === "number" ||
            typeof field === "string"
          ) {
            return `${
              options?.aliasPrefix
                ? `${options.aliasPrefix}${aliasSeparator}${f}: `
                : ""
            }${f}`;
          }

          // For object fields, parse recursively
          const parsed = parseRequest(
            operation,
            fields[f],
            ctx,
            [...path, f],
            options
          );

          // If the parsed result is empty and this is an object type,
          // we should include at least one field or it will be invalid GraphQL
          if (!parsed) {
            return `${
              options?.aliasPrefix
                ? `${options.aliasPrefix}${aliasSeparator}${f}: `
                : ""
            }${f}{__typename}`;
          }

          return `${
            options?.aliasPrefix
              ? `${options.aliasPrefix}${aliasSeparator}${f}: `
              : ""
          }${f}${parsed}`;
        }
      })
      .filter(Boolean)
      .join(",");

    return fieldsSelection ? `{${fieldsSelection}}` : "";
  } else {
    return "";
  }
};

export const generateGraphqlOperation = (
  operation: "query" | "mutation" | "subscription",
  fields?: Fields
): GraphqlOperation => {
  const ctx: Context = {
    fragmentCounter: 0,
    fragments: [],
  };
  const result = parseRequest(operation, fields, ctx, []);

  const operationName = fields?.__name || "";

  const q = {
    query: [`${operation} ${operationName}${result}`, ...ctx.fragments].join(
      ","
    ),
    variables: {},
    ...(operationName ? { operationName: operationName.toString() } : {}),
  };

  return q;
};

export const getFieldFromPath = (
  root: LinkedType | undefined,
  path: string[]
) => {
  let current: LinkedField | undefined;

  if (!root) throw new Error("root type is not provided");

  if (path.length === 0) throw new Error(`path is empty`);

  path.forEach((f) => {
    const type = current ? current.type : root;

    if (!type.fields) {
      throw new Error(`type \`${type.name}\` does not have fields`);
    }

    const possibleTypes = Object.keys(type.fields)
      .filter((i) => i.startsWith("on_"))
      .reduce(
        (types, fieldName) => {
          const field = type.fields && type.fields[fieldName];
          if (field) types.push(field.type);
          return types;
        },
        [type]
      );

    let field: LinkedField | null = null;

    possibleTypes.forEach((type) => {
      const found = type.fields && type.fields[f];
      if (found) field = found;
    });

    if (!field) {
      throw new Error(`type \`${type.name}\` does not have a field \`${f}\``);
    }

    current = field;
  });

  return current as LinkedField;
};
