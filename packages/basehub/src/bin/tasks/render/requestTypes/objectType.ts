import {
  getNamedType,
  GraphQLField,
  GraphQLInterfaceType,
  GraphQLObjectType,
  isEnumType,
  isInterfaceType,
  isNonNullType,
  isScalarType,
} from "graphql";
import {
  argumentComment,
  fieldComment,
  typeComment,
} from "../common/comment.js";
import { RenderContext } from "../common/RenderContext.js";

import { requestTypeName } from "./requestTypeName.js";
import { sortKeys } from "../common/support.js";
import { renderTyping } from "../common/renderTyping.js";

const INDENTATION = "    ";

export const objectType = (
  type: GraphQLObjectType | GraphQLInterfaceType,
  ctx: RenderContext
) => {
  let fields = type.getFields();

  if (ctx.config?.sortProperties) {
    fields = sortKeys(fields);
  }

  let fieldStrings = Object.keys(fields).map((fieldName) => {
    const field = fields[fieldName]!;

    const types: string[] = [];
    const resolvedType = getNamedType(field.type);
    const resolvable = !(
      isEnumType(resolvedType) || isScalarType(resolvedType)
    );
    const argsPresent = field.args.length > 0;
    const argsString = toArgsString(field);
    const argsOptional = !argsString.match(/[^?]:/);

    if (argsPresent) {
      if (resolvable) {
        types.push(
          `(${requestTypeName(resolvedType)} & { __args${
            argsOptional ? "?" : ""
          }: ${argsString} })`
        );
      } else {
        // TODO if i want to add __directive support, i need to make this __args optional
        types.push(`{ __args: ${argsString} }`);
      }
      // if (resolvable) {
      //     types.push(`[${argsString},${requestTypeName(resolvedType)}]`)
      // } else {
      //     types.push(`[${argsString}]`)
      // }
    }

    if (argsOptional && !resolvable) {
      types.push("boolean | number");
    }
    if (!argsPresent && resolvable) {
      types.push(requestTypeName(resolvedType));
    }

    return `${fieldComment(field)}${field.name}?: ${types.join(" | ")}`;
  });

  if (isInterfaceType(type) && ctx.schema) {
    let interfaceProperties = ctx.schema
      .getPossibleTypes(type)
      .map((t) => `on_${t.name}?: ${requestTypeName(t)}`);
    if (ctx.config?.sortProperties) {
      interfaceProperties = interfaceProperties.sort();
    }
    fieldStrings = fieldStrings.concat(interfaceProperties);
  }

  fieldStrings.push("__typename?: boolean | number");
  fieldStrings.push("__scalar?: boolean | number");

  // add indentation
  fieldStrings = fieldStrings.map((x) =>
    x
      .split("\n")
      .filter(Boolean)
      .map((l) => INDENTATION + l)
      .join("\n")
  );

  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${requestTypeName(
      type
    )}{\n${fieldStrings.join("\n")}\n}`
  );

  return { rootTypeName: type.name, selectionTypeName: requestTypeName(type) };
};

export const toArgsString = (field: GraphQLField<any, any, any>) => {
  const fields = field.args
    .map(
      (a) =>
        `${argumentComment(a)}${a.name}${
          isNonNullType(a.type) && a.defaultValue == null ? ":" : "?:"
        } ${renderTyping(a.type)}`
    )
    .join(", ");
  return `{${fields}}`;
};
