#!/usr/bin/env node
import "./chunk-FTA5RKYX.js";

// src/bin/index.ts
import arg from "arg";

// src/bin/tasks/main.ts
import { Listr as Listr2 } from "listr2";

// src/bin/tasks/clientTasks.ts
import crypto from "crypto";
import { Listr } from "listr2";

// src/bin/tasks/helpers/files.ts
import { promises as fs } from "fs";
import { mkdirp } from "mkdirp";
import { resolve } from "path";
import { rimraf } from "rimraf";
var writeFileToPath = async (path3, content) => {
  const filePath = resolve(...path3);
  const folder = resolve(filePath, "..");
  const tempFilePath = filePath + ".tmp";
  await fs.mkdir(folder, { recursive: true });
  await fs.writeFile(tempFilePath, content);
  await fs.rename(tempFilePath, filePath);
};

// src/bin/tasks/render/common/relativeImportPath.ts
import path from "path";
var relativeImportPath = (from, to) => {
  const fromResolved = path.relative(from, to);
  return fromResolved[0] === "." ? fromResolved : `./${fromResolved}`;
};

// src/bin/tasks/render/common/RenderContext.ts
var RenderContext = class {
  constructor(schema, config) {
    this.schema = schema;
    this.config = config;
    this.codeBlocks = [];
    this.imports = {};
    this.importAliasCounter = 0;
  }
  addCodeBlock(block) {
    if (block) {
      this.codeBlocks.push(block);
    }
  }
  addImport(from, isDefault, module, fromAbsolute, noAlias) {
    if (this.config && this.config.output) {
      from = fromAbsolute ? from : relativeImportPath(this.config.output, from);
    }
    if (!this.imports[from]) this.imports[from] = [];
    const imports = this.imports[from];
    const existing = imports.find(
      (i) => isDefault && i.isDefault || !isDefault && i.module === module
    );
    if (existing) return existing.alias;
    this.importAliasCounter++;
    const alias = noAlias ? void 0 : `a${this.importAliasCounter}`;
    imports.push({ isDefault, module, alias });
    return alias;
  }
  getImportBlock() {
    const imports = [];
    Object.keys(this.imports).forEach((from) => {
      const defaultImport = this.imports[from].find((i) => i.isDefault);
      const namedImports = this.imports[from].filter((i) => !i.isDefault);
      const statements = [];
      if (defaultImport) {
        statements.push(defaultImport.alias || "");
      }
      if (namedImports.length > 0) {
        statements.push(
          `{${namedImports.map((i) => i.alias ? `${i.module} as ${i.alias}` : i.module).join(",")}}`
        );
      }
      imports.push(`import ${statements.join(",")} from '${from}'`);
    });
    if (imports.length > 0) return imports.join("\n");
    else return;
  }
  toCode(parser) {
    const blocks = [...this.codeBlocks];
    if (parser && (parser === "typescript" || parser === "babel")) {
      const importBlock = this.getImportBlock();
      if (importBlock) blocks.unshift(importBlock);
    }
    if (parser) {
      return blocks.join("\n\n");
    }
    return blocks.join("");
  }
};

// src/bin/tasks/render/requestTypes/renderRequestTypes.ts
import {
  isInputObjectType,
  isInterfaceType as isInterfaceType2,
  isObjectType,
  isUnionType
} from "graphql";

// src/bin/tasks/render/common/excludedTypes.ts
var excludedTypes = [
  "__Schema",
  "__Type",
  "__TypeKind",
  "__Field",
  "__InputValue",
  "__EnumValue",
  "__Directive",
  "__DirectiveLocation"
];

// src/bin/tasks/render/requestTypes/inputObjectType.ts
import { isNonNullType } from "graphql";

// src/bin/tasks/render/common/comment.ts
var comment = (comment2) => {
  const lines = [];
  if (comment2.deprecated) {
    lines.push(`@deprecated ${comment2.deprecated.replace(/\s/g, " ")}`);
  }
  if (comment2.text) {
    lines.push(...comment2.text.split("\n"));
  }
  return lines.length > 0 ? lines.length === 1 ? `
/** ${lines[0]} */
` : `
/**
${lines.map((l) => ` * ${l}`).join("\n")}
 */
` : "";
};
var typeComment = (type) => comment({
  text: type.description
});
var fieldComment = (field) => comment({
  deprecated: field.deprecationReason,
  text: field.description
});
var argumentComment = (arg2) => comment({
  text: arg2.description
});

// src/bin/tasks/render/common/renderTyping.ts
import {
  isListType,
  isNamedType,
  isScalarType
} from "graphql";
var renderTyping = (type, nonNull = false, wrap = (x) => x) => {
  if (isNamedType(type)) {
    let typeName = type.name;
    if (isScalarType(type)) {
      typeName = `Scalars['${typeName}']`;
    }
    const typing = wrap(typeName);
    return nonNull ? typing : `(${typing} | null)`;
  }
  if (isListType(type)) {
    const typing = `${renderTyping(type.ofType, false, wrap)}[]`;
    return nonNull ? typing : `(${typing} | null)`;
  }
  return renderTyping(type.ofType, true, wrap);
};

// src/bin/tasks/render/common/support.ts
function sortKeys(obj) {
  obj = obj || {};
  const ordered = {};
  Object.keys(obj).sort().forEach(function(key) {
    ordered[key] = obj[key];
  });
  return ordered;
}

// src/bin/tasks/render/requestTypes/inputObjectType.ts
var inputObjectType = (type, ctx) => {
  let fields = type.getFields();
  if (ctx.config?.sortProperties) {
    fields = sortKeys(fields);
  }
  const fieldStrings = Object.keys(fields).map((fieldName) => {
    const field = fields[fieldName];
    return `${argumentComment(field)}${field.name}${isNonNullType(field.type) && field.defaultValue == null ? ":" : "?:"} ${renderTyping(field.type)}`;
  });
  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${type.name} {${fieldStrings.join(
      ","
    )}}`
  );
};

// src/bin/tasks/render/requestTypes/objectType.ts
import {
  getNamedType,
  isEnumType,
  isInterfaceType,
  isNonNullType as isNonNullType2,
  isScalarType as isScalarType2
} from "graphql";

// src/bin/tasks/render/requestTypes/requestTypeName.ts
var requestTypeName = (type) => {
  if (!type) return "";
  return `${type.name}GenqlSelection`;
};

// src/bin/tasks/render/requestTypes/objectType.ts
var INDENTATION = "    ";
var objectType = (type, ctx) => {
  let fields = type.getFields();
  if (ctx.config?.sortProperties) {
    fields = sortKeys(fields);
  }
  let fieldStrings = Object.keys(fields).map((fieldName) => {
    const field = fields[fieldName];
    const types = [];
    const resolvedType = getNamedType(field.type);
    const resolvable = !(isEnumType(resolvedType) || isScalarType2(resolvedType));
    const argsPresent = field.args.length > 0;
    const argsString = toArgsString(field);
    const argsOptional = !argsString.match(/[^?]:/);
    if (argsPresent) {
      if (resolvable) {
        types.push(
          `(${requestTypeName(resolvedType)} & { __args${argsOptional ? "?" : ""}: ${argsString} })`
        );
      } else {
        types.push(`{ __args: ${argsString} }`);
      }
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
    let interfaceProperties = ctx.schema.getPossibleTypes(type).map((t) => `on_${t.name}?: ${requestTypeName(t)}`);
    if (ctx.config?.sortProperties) {
      interfaceProperties = interfaceProperties.sort();
    }
    fieldStrings = fieldStrings.concat(interfaceProperties);
  }
  fieldStrings.push("__typename?: boolean | number");
  fieldStrings.push(`__fragmentOn?: "${type.name}"`);
  fieldStrings = fieldStrings.map(
    (x) => x.split("\n").filter(Boolean).map((l) => INDENTATION + l).join("\n")
  );
  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${requestTypeName(
      type
    )}{
${fieldStrings.join("\n")}
}`
  );
  return { rootTypeName: type.name, selectionTypeName: requestTypeName(type) };
};
var toArgsString = (field) => {
  const fields = field.args.map(
    (a) => `${argumentComment(a)}${a.name}${isNonNullType2(a.type) && a.defaultValue == null ? ":" : "?:"} ${renderTyping(a.type)}`
  ).join(", ");
  return `{${fields}}`;
};

// src/bin/tasks/render/requestTypes/unionType.ts
import uniq from "lodash.uniq";
var unionType = (type, ctx) => {
  let types = [...type.getTypes()];
  if (ctx.config?.sortProperties) {
    types = types.sort();
  }
  const fieldStrings = types.map((t) => `on_${t.name}?:${requestTypeName(t)}`);
  const commonInterfaces = uniq(types.map((x) => x.getInterfaces()).flat());
  fieldStrings.push(
    ...commonInterfaces.map((type2) => {
      return `on_${type2.name}?: ${requestTypeName(type2)}`;
    })
  );
  fieldStrings.push("__typename?: boolean | number");
  fieldStrings.push(`__fragmentOn?: "${type.name}"`);
  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${requestTypeName(
      type
    )}{
${fieldStrings.map((x) => "    " + x).join(",\n")}
}`
  );
};

// src/bin/tasks/render/requestTypes/renderRequestTypes.ts
var renderRequestTypes = (schema, ctx) => {
  let typeMap = schema.getTypeMap();
  if (ctx.config?.sortProperties) {
    typeMap = sortKeys(typeMap);
  }
  const fragmentMap = /* @__PURE__ */ new Map();
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue;
    const type = typeMap[name];
    if (isObjectType(type) || isInterfaceType2(type)) {
      const result = objectType(type, ctx);
      fragmentMap.set(result.rootTypeName, result);
    }
    if (isInputObjectType(type)) inputObjectType(type, ctx);
    if (isUnionType(type)) unionType(type, ctx);
  }
  const aliases = [
    { type: schema.getQueryType(), name: "QueryGenqlSelection" },
    { type: schema.getMutationType(), name: "MutationGenqlSelection" },
    {
      type: schema.getSubscriptionType(),
      name: "SubscriptionGenqlSelection"
    }
  ].map(renderAlias).filter(Boolean).join("\n");
  ctx.addCodeBlock(aliases);
  const fragmentsMapCode = renderFragmentsMapAndHelpers(fragmentMap);
  ctx.addCodeBlock(fragmentsMapCode);
};
function renderAlias({
  type,
  name
}) {
  if (type && requestTypeName(type) !== name) {
    return `export type ${name} = ${requestTypeName(type)}`;
  }
  return "";
}
function renderFragmentsMapAndHelpers(fragmentMap) {
  let result = `export interface FragmentsMap {
`;
  for (const [key, value] of fragmentMap) {
    result += `  ${key}: {
    root: ${value.rootTypeName},
    selection: ${value.selectionTypeName},
}
`;
  }
  result += "}\n";
  return result;
}

// src/bin/tasks/render/responseTypes/renderResponseTypes.ts
import {
  isEnumType as isEnumType2,
  isInterfaceType as isInterfaceType3,
  isObjectType as isObjectType3,
  isScalarType as isScalarType3,
  isUnionType as isUnionType2
} from "graphql";

// src/bin/tasks/render/responseTypes/enumType.ts
var enumType = (type, ctx) => {
  const values = type.getValues().map((v) => `'${v.name}'`);
  ctx.addCodeBlock(
    `${typeComment(type)}export type ${type.name} = ${values.join(" | ")}`
  );
};

// src/bin/tasks/render/responseTypes/objectType.ts
import { isObjectType as isObjectType2 } from "graphql";
var INDENTATION2 = "    ";
var objectType2 = (type, ctx) => {
  let fieldsMap = type.getFields();
  if (ctx.config?.sortProperties) {
    fieldsMap = sortKeys(fieldsMap);
  }
  const fields = Object.keys(fieldsMap).map(
    (fieldName) => fieldsMap[fieldName]
  );
  if (!ctx.schema) throw new Error("no schema provided");
  const typeNames = isObjectType2(type) ? [type.name] : ctx.schema.getPossibleTypes(type).map((t) => t.name);
  let fieldStrings = fields.map((f) => {
    if (!f) return "";
    return `${fieldComment(f)}${f.name}: ${renderTyping(f.type)}`;
  }).filter(Boolean).concat([
    `__typename: ${typeNames.length > 0 ? typeNames.map((t) => `'${t}'`).join("|") : "string"}`
  ]);
  fieldStrings = fieldStrings.map(
    (x) => x.split("\n").filter(Boolean).map((l) => INDENTATION2 + l).join("\n")
  );
  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${type.name} {
${fieldStrings.join(
      "\n"
    )}
}`
  );
};

// src/bin/tasks/render/responseTypes/typeMappedAlias.ts
var knownTypes = {
  Int: "number",
  Float: "number",
  String: "string",
  Boolean: "boolean",
  ID: "string"
};
var getTypeMappedAlias = (type, ctx) => {
  const map = { ...knownTypes, ...ctx?.config?.scalarTypes || {} };
  if (type.name.startsWith("BSHBSelect")) {
    try {
      const acceptedValues = JSON.parse(type.description || "[]");
      let result = "";
      if (acceptedValues) {
        result += acceptedValues.map((v) => `'${v}'`).join(" | ");
      }
      if (!result) {
        result = "string";
      }
      return result;
    } catch (err) {
    }
  } else if (type.name.startsWith("bshb_event_") || type.name.startsWith("bshb_workflow_")) {
    const parsed = JSON.parse(type.description || "{}");
    return `${parsed.keyType},
    schema_${type.name}: ${parsed.schemaType}`;
  }
  try {
    const parsed = JSON.parse(type.description || "{}");
    if (parsed && typeof parsed === "object" && "schemaType" in parsed && typeof parsed.schemaType === "string") {
      return parsed.schemaType;
    }
  } catch (err) {
  }
  return map?.[type.name] || "any";
};

// src/bin/tasks/render/responseTypes/scalarType.ts
function renderScalarTypes(ctx, types) {
  let content = "";
  types.forEach((type) => {
    content += `    ${type.name}: ${getTypeMappedAlias(type, ctx)},
`;
  });
  return `export interface Scalars {
${content}}`;
}

// src/bin/tasks/render/responseTypes/unionType.ts
var unionType2 = (type, ctx) => {
  let typeNames = type.getTypes().map((t) => t.name);
  if (ctx.config?.sortProperties) {
    typeNames = typeNames.sort();
  }
  ctx.addCodeBlock(
    `${typeComment(type)}export type ${type.name} = (${typeNames.join(
      " | "
    )}) & { __isUnion?: true }`
  );
};

// src/bin/tasks/render/responseTypes/interfaceType.ts
var interfaceType = (type, ctx) => {
  if (!ctx.schema) {
    throw new Error("schema is required to render unionType");
  }
  const typeNames = ctx.schema.getPossibleTypes(type).map((t) => t.name);
  if (!typeNames.length) {
    objectType2(type, ctx);
  } else {
    ctx.addCodeBlock(
      `${typeComment(type)}export type ${type.name} = (${typeNames.join(
        " | "
      )}) & { __isUnion?: true }`
    );
  }
};

// src/bin/tasks/render/responseTypes/renderResponseTypes.ts
var renderResponseTypes = (schema, ctx) => {
  let typeMap = schema.getTypeMap();
  if (ctx.config?.sortProperties) {
    typeMap = sortKeys(typeMap);
  }
  ctx.addCodeBlock(
    renderScalarTypes(
      ctx,
      Object.values(typeMap).filter(
        (type) => isScalarType3(type)
      )
    )
  );
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue;
    const type = typeMap[name];
    if (isEnumType2(type)) enumType(type, ctx);
    if (isUnionType2(type)) unionType2(type, ctx);
    if (isObjectType3(type)) objectType2(type, ctx);
    if (isInterfaceType3(type)) interfaceType(type, ctx);
  }
  const aliases = [
    { type: schema.getQueryType(), name: "Query" },
    { type: schema.getMutationType(), name: "Mutation" },
    { type: schema.getSubscriptionType(), name: "Subscription" }
  ].map(renderAlias2).filter(Boolean).join("\n");
  ctx.addCodeBlock(aliases);
};
function renderAlias2({
  type,
  name
}) {
  if (type && type.name !== name) {
    return `export type ${name} = ${type.name}`;
  }
  return "";
}

// src/bin/tasks/render/schema/renderSchema.ts
import { printSchema } from "graphql";
var renderSchema = (schema, ctx) => {
  ctx.addCodeBlock(printSchema(schema));
};

// src/bin/tasks/render/responseTypes/renderModuleAugmentation.ts
var renderModuleAugmentation = (_schema, ctx) => {
  ctx.addCodeBlock(
    `/*=============================================================================
 * This file was automatically generated by the BaseHub SDK and contains type
 * definitions based on your repository schema. Credits to https://genql.dev/
 * for the type generation.
 *
 * You can safely commit this to version control.
 *============================================================================*/

declare module "${ctx.config?.packageName || "basehub"}" {
  export interface Query extends _Query {}
  export interface QueryGenqlSelection extends _QueryGenqlSelection {}
  export interface Mutation extends _Mutation {}
  export interface MutationGenqlSelection extends _MutationGenqlSelection {}
  export interface FragmentsMap extends _FragmentsMap {}
  export interface Scalars extends _Scalars {}
}

import type { Transaction } from 'basehub/api-transaction'

interface _Query extends Query {}
interface _QueryGenqlSelection extends QueryGenqlSelection {}
interface _Mutation extends Mutation {}
interface _MutationGenqlSelection extends MutationGenqlSelection {}
interface _FragmentsMap extends FragmentsMap {}
interface _Scalars extends Scalars {}`
  );
};
var enhanceMutationGenqlSelection = (schemaFileContents) => {
  return schemaFileContents.replace(
    `    /** Transaction data. */
    data: Scalars['String']`,
    `    /** Transaction data. */
    data: Transaction | Scalars['String']`
  ).replace(
    `    /** Transaction data. */
    data: Scalars["String"]`,
    `    /** Transaction data. */
    data: Transaction | Scalars["String"]`
  );
};

// src/bin/tasks/clientTasks.ts
var clientTasks = (config, outputContextRef) => {
  if (!config.output) throw new Error("`output` must be defined in the config");
  const output = config.output;
  const tasks = [
    {
      title: `processing schema`,
      task: async (ctx) => {
        const renderCtx = new RenderContext(ctx.schema, config);
        renderSchema(ctx.schema, renderCtx);
        const schemaContent = await renderCtx.toCode("graphql");
        const schemaHash = crypto.createHash("md5").update(schemaContent).digest("hex");
        outputContextRef.current.schemaHash = schemaHash;
        if (config.previousSchemaHash === schemaHash) {
          ctx.preventedClientGeneration = true;
          outputContextRef.current.preventedClientGeneration = true;
          return;
        }
        outputContextRef.current.preventedClientGeneration = false;
        return new Listr(
          [
            {
              title: `writing ${config.output}`,
              task: async (ctx2) => {
                const renderCtx2 = new RenderContext(ctx2.schema, config);
                renderModuleAugmentation(ctx2.schema, renderCtx2);
                renderResponseTypes(ctx2.schema, renderCtx2);
                renderRequestTypes(ctx2.schema, renderCtx2);
                const baseHeader = "/* istanbul ignore file */\n/* tslint:disable */\n/* eslint-disable */\n// @ts-nocheck\n\n";
                const banner = config.banner ? `${config.banner}

` : "";
                const content = banner + baseHeader + enhanceMutationGenqlSelection(
                  await renderCtx2.toCode("typescript")
                );
                await writeFileToPath([output], content);
              }
            }
          ],
          { ctx, concurrent: true }
        );
      }
    }
  ];
  return [
    {
      title: `writing files`,
      task: () => {
        return new Listr(tasks.filter((x) => Boolean(x)), {
          concurrent: true
        });
      }
    }
  ];
};

// src/bin/tasks/schemaTask.ts
import {
  buildClientSchema,
  getIntrospectionQuery
} from "graphql";
import { lexicographicSortSchema } from "graphql";
var schemaTask = (config) => {
  const processSchema = (schema) => {
    if (config.sortProperties) {
      return lexicographicSortSchema(schema);
    }
    return schema;
  };
  if (config.endpoint) {
    const endpoint = config.endpoint;
    return {
      title: `fetching schema from BaseHub's API`,
      task: async (ctx) => {
        ctx.schema = processSchema(
          await fetch(endpoint, {
            headers: config.headers,
            method: "POST",
            body: JSON.stringify({ query: getIntrospectionQuery() })
          }).then((res) => res.json()).then((result) => {
            return buildClientSchema(result.data, { assumeValid: true });
          })
        );
      }
    };
  } else {
    throw new Error(
      "either `endpoint`, `fetcher` or `schema` must be defined in the config"
    );
  }
};

// src/bin/tasks/main.ts
var generate = async (config) => {
  if (!config.output) {
    throw new Error("`output` must be defined in the config");
  }
  const outputContextRef = {
    current: { preventedClientGeneration: false, schemaHash: "" }
  };
  await new Listr2(
    [
      {
        title: `generating the client in \`${config.output}\``,
        task: () => new Listr2([
          schemaTask(config),
          ...clientTasks(config, outputContextRef)
        ])
      }
    ],
    {
      renderer: config.verbose ? "verbose" : "default",
      exitOnError: true,
      ...config.silent ? { silentRendererCondition: () => true } : {}
    }
  ).run().catch((e) => {
    throw e?.errors?.[0];
  });
  return outputContextRef.current;
};

// src/bin/main.ts
import path2 from "path";
import fs2 from "fs";

// src/bin/util/get-git-env.ts
var getGitEnv = async (_opts) => {
  const execSyncSafe = async (command) => {
    try {
      const execSync = await import(
        /* @vite-ignore */
        "child_process"
      ).then(
        (m) => m.execSync
      );
      return execSync(command, { stdio: "pipe" }).toString().trim();
    } catch (error) {
      return "";
    }
  };
  const gitBranch = process.env.VERCEL_GIT_COMMIT_REF || process.env.BRANCH || process.env.RENDER_GIT_BRANCH || process.env.GIT_BRANCH || process.env.CF_PAGES_BRANCH || await execSyncSafe("git symbolic-ref --short HEAD") || await execSyncSafe("git rev-parse --abbrev-ref HEAD");
  const gitCommitSHA = process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_REF || process.env.RENDER_GIT_COMMIT || process.env.COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || await execSyncSafe("git rev-parse HEAD");
  const gitBranchDeploymentURL = process.env.VERCEL_BRANCH_URL || process.env.DEPLOY_PRIME_URL || process.env.CF_PAGES_URL || null;
  const productionDeploymentURL = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.URL || process.env.RENDER_EXTERNAL_URL || null;
  return {
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL
  };
};

// src/bin/util/hash.ts
function hashObject(obj) {
  const sortObjectKeys = (obj2) => {
    if (!isObjectAsWeCommonlyCallIt(obj2)) return obj2;
    return Object.keys(obj2).sort().reduce((acc, key) => {
      acc[key] = obj2[key];
      return acc;
    }, {});
  };
  const recursiveSortObjectKeys = (obj2) => {
    const sortedObj2 = sortObjectKeys(obj2);
    if (!isObjectAsWeCommonlyCallIt(sortedObj2)) return sortedObj2;
    Object.keys(sortedObj2).forEach((key) => {
      if (isObjectAsWeCommonlyCallIt(sortedObj2[key])) {
        sortedObj2[key] = recursiveSortObjectKeys(
          sortedObj2[key]
        );
      } else if (Array.isArray(sortedObj2[key])) {
        sortedObj2[key] = sortedObj2[key].map((item) => {
          if (isObjectAsWeCommonlyCallIt(item)) {
            return recursiveSortObjectKeys(item);
          } else {
            return item;
          }
        });
      }
    });
    return sortedObj2;
  };
  const isObjectAsWeCommonlyCallIt = (obj2) => {
    return Object.prototype.toString.call(obj2) === "[object Object]";
  };
  const sortedObj = recursiveSortObjectKeys(obj);
  const str = JSON.stringify(sortedObj);
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return Math.abs(hash).toString();
}

// src/vibe.ts
var isV0 = () => {
  try {
    return (
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process.env.VERCEL_URL?.includes(".lite.vusercontent.net") || // @ts-ignore
      process.env.NEXT_PUBLIC_VERCEL_URL?.includes(".lite.vusercontent.net")
    );
  } catch (err) {
    return false;
  }
};
var isBolt = () => {
  try {
    return process.env.SHELL === "/bin/jsh";
  } catch (err) {
    return false;
  }
};
var isV0OrBolt = () => {
  return isV0() || isBolt();
};

// src/index.ts
var BASEHUB_CONFIG = Symbol.for("basehub.config");
function getGlobalConfig() {
  return globalThis[BASEHUB_CONFIG] ?? null;
}

// src/version.ts
var version = "9.5.4-canary.0";

// src/bin/util/get-stuff-from-env.ts
var basehubAPIOrigin = "https://api.basehub.com";
var defaultEnvVarPrefix = "BASEHUB";
var DEFAULT_API_VERSION = "4";
var getStuffFromEnv = async (options) => {
  if (!options) {
    options = {};
  }
  if (options.cli) {
    await import("dotenv-mono").then(({ dotenvLoad }) => {
      dotenvLoad({ priorities: { ".dev.vars": 1 } });
    });
  }
  const globalConfig = getGlobalConfig();
  let isForcedDraft = false;
  try {
    isForcedDraft = process.env.NODE_ENV === "development" || isV0OrBolt();
  } catch (err) {
  }
  const buildEnvVarName = (name) => {
    let prefix = defaultEnvVarPrefix;
    if (options.prefix) {
      if (options.prefix.endsWith("_")) {
        options.prefix = options.prefix.slice(0, -1);
      }
      if (options.prefix.endsWith(name)) {
        options.prefix = options.prefix.slice(0, -name.length);
      }
      if (options.prefix.endsWith(defaultEnvVarPrefix)) {
        prefix = options.prefix;
      } else {
        prefix = `${options.prefix}_${defaultEnvVarPrefix}`;
      }
    }
    return `${prefix}_${name}`;
  };
  const getEnvVar = (name) => process?.env?.[buildEnvVarName(name)];
  const parsedDebugForcedURL = getEnvVar("DEBUG_FORCED_URL");
  const parsedBackwardsCompatURL = getEnvVar("URL");
  const backwardsCompatURL = parsedBackwardsCompatURL ? new URL(parsedBackwardsCompatURL) : void 0;
  const basehubUrl = new URL(
    parsedDebugForcedURL ? parsedDebugForcedURL : `${basehubAPIOrigin}/graphql`
  );
  let tokenNotFoundErrorMessage = `\u{1F534} Token not found. Make sure to include the ${buildEnvVarName(
    "TOKEN"
  )} env var.`;
  const resolveTokenParam = (token2) => {
    if (!token2) return null;
    const isRaw = token2.startsWith("bshb_");
    if (isRaw) {
      return token2;
    }
    tokenNotFoundErrorMessage = `\u{1F534} Token not found. Make sure to include the ${token2} env var.`;
    const fromEnv = process?.env?.[token2];
    if (fromEnv) return fromEnv;
    return "";
  };
  const resolvedToken = resolveTokenParam(options.token ?? null);
  const token = resolvedToken ?? basehubUrl.searchParams.get("token") ?? getEnvVar("TOKEN") ?? globalConfig?.token ?? (backwardsCompatURL ? backwardsCompatURL.searchParams.get("token") : void 0) ?? null;
  let fallbackPlayground;
  if (!token) {
    const fallbackPlaygroundTarget = options.fallbackPlayground?.target ?? getEnvVar("FALLBACK_PLAYGROUND_TARGET") ?? globalConfig?.fallbackPlayground?.target;
    const fallbackPlaygroundId = options.fallbackPlayground?.id ?? getEnvVar("FALLBACK_PLAYGROUND_ID") ?? globalConfig?.fallbackPlayground?.id;
    fallbackPlayground = options.fallbackPlayground ?? (fallbackPlaygroundId && fallbackPlaygroundTarget ? {
      target: fallbackPlaygroundTarget,
      id: fallbackPlaygroundId
    } : void 0);
    if (fallbackPlayground) {
    } else {
      if (options.cli) {
        console.error(tokenNotFoundErrorMessage);
        process.exit(1);
      } else {
        throw new Error(tokenNotFoundErrorMessage);
      }
    }
  }
  let ref = options.ref ?? basehubUrl.searchParams.get("ref") ?? getEnvVar("REF") ?? globalConfig?.ref ?? (backwardsCompatURL ? backwardsCompatURL.searchParams.get("ref") : void 0) ?? null;
  let draft = basehubUrl.searchParams.get("draft") ?? getEnvVar("DRAFT") ?? globalConfig?.draft ?? (backwardsCompatURL ? backwardsCompatURL.searchParams.get("draft") : void 0) ?? false;
  if (isForcedDraft) {
    draft = true;
  }
  if (options.draft !== void 0) {
    draft = options.draft;
  }
  let apiVersion = basehubUrl.searchParams.get("api-version") ?? getEnvVar("API_VERSION") ?? (backwardsCompatURL ? backwardsCompatURL.searchParams.get("api-version") : void 0) ?? DEFAULT_API_VERSION;
  if (options.apiVersion) {
    apiVersion = options.apiVersion;
  }
  if (basehubUrl.pathname.split("/")[1] !== "graphql") {
    const err = `\u{1F534} Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql.`;
    if (options.cli) {
      console.error(err);
      process.exit(1);
    } else {
      throw new Error(err);
    }
  }
  basehubUrl.searchParams.delete("token");
  basehubUrl.searchParams.delete("ref");
  basehubUrl.searchParams.delete("draft");
  if (draft === "false" || draft === "0") {
    draft = false;
  }
  draft = !!draft;
  const {
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL
  } = await getGitEnv(options);
  const resolvedRef = await resolveRef({
    url: basehubUrl,
    token,
    ref,
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    apiVersion,
    revalidate: options.revalidateResolvedRef,
    fallbackPlayground
  });
  let isNextjsDraftMode = false;
  if (!isV0OrBolt() && !draft && options.draft === void 0) {
    try {
      const { draftMode } = await import(
        /* @vite-ignore */
        "./headers-7FA6BNV4.js"
      );
      isNextjsDraftMode = (await draftMode()).isEnabled;
    } catch (error) {
    }
  }
  if (isNextjsDraftMode) {
    draft = true;
  }
  const sdkBuildId = `bshb_sdk__${version}__${resolvedRef.id}${gitBranch ? `__git_branch_${gitBranch}` : ""}${gitCommitSHA ? `__git_commit_sha_${gitCommitSHA}` : ""}`;
  if (!ref && resolvedRef) {
    ref = resolvedRef.ref;
  }
  return {
    draft,
    isForcedDraft,
    isNextjsDraftMode,
    output: getEnvVar("OUTPUT") ?? options.cli?.output ?? null,
    resolvedRef,
    url: basehubUrl.toString(),
    gitBranch,
    gitCommitSHA,
    token,
    fallbackPlayground,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    sdkBuildId,
    apiVersion,
    headers: {
      "x-basehub-api-version": apiVersion,
      "x-basehub-sdk-build-id": sdkBuildId,
      ...token ? { "x-basehub-token": token } : {},
      ...ref ? { "x-basehub-ref": ref } : {},
      ...gitBranch ? { "x-basehub-git-branch": gitBranch } : {},
      ...gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {},
      ...draft ? { "x-basehub-draft": "true" } : {},
      ...gitBranchDeploymentURL ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL } : {},
      ...productionDeploymentURL ? { "x-basehub-production-deployment-url": productionDeploymentURL } : {},
      ...fallbackPlayground ? {
        "x-basehub-fallback-playground-target": fallbackPlayground.target,
        "x-basehub-fallback-playground-id": fallbackPlayground.id
      } : {}
    }
  };
};
var resolvedRefCache = /* @__PURE__ */ new Map();
async function resolveRef({
  url,
  token,
  ref,
  gitBranch,
  gitCommitSHA,
  gitBranchDeploymentURL,
  productionDeploymentURL,
  apiVersion,
  revalidate,
  fallbackPlayground
}) {
  const headers = {
    ...token ? { "x-basehub-token": token } : {},
    ...ref ? { "x-basehub-ref": ref } : {},
    ...gitBranch ? { "x-basehub-git-branch": gitBranch } : {},
    ...gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {},
    ...apiVersion ? { "x-basehub-api-version": apiVersion } : {},
    ...gitBranchDeploymentURL ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL } : {},
    ...productionDeploymentURL ? { "x-basehub-production-deployment-url": productionDeploymentURL } : {},
    ...fallbackPlayground ? {
      "x-basehub-fallback-playground-target": fallbackPlayground.target,
      "x-basehub-fallback-playground-id": fallbackPlayground.id
    } : {}
  };
  const cacheKey = hashObject({ headers });
  if (!revalidate) {
    const cachedResolvedRef = resolvedRefCache.get(cacheKey);
    if (cachedResolvedRef) {
      return cachedResolvedRef;
    }
  }
  const refResolverEndpoint = getBaseHubAppApiEndpoint(
    url,
    "/api/git/resolve-ref"
  );
  const res = await fetch(refResolverEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    cache: "no-store",
    body: JSON.stringify({})
  });
  if (res.status !== 200) {
    throw new Error(`Failed to resolve ref: ${res.statusText}`);
  }
  const data = await res.json();
  const resolvedRef = data;
  resolvedRefCache.set(cacheKey, resolvedRef);
  return resolvedRef;
}
function getBaseHubAppApiEndpoint(url, pathname) {
  let origin;
  switch (true) {
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("localhost:3001"):
      origin = "http://localhost:3000" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("api.basehub.com"):
    default:
      origin = "https://basehub.com" + pathname + url.search + url.hash;
  }
  return origin;
}

// src/bin/main.ts
var onProcessEndCallbacks = [];
async function updateTsconfigIncludes(includes, silent) {
  const tsconfigPath = path2.resolve(process.cwd(), "tsconfig.json");
  try {
    if (!fs2.existsSync(tsconfigPath)) {
      return;
    }
    const tsconfigContent = fs2.readFileSync(tsconfigPath, "utf-8");
    const tsconfig = JSON.parse(tsconfigContent);
    const relativePaths = includes.map(
      (includePath) => path2.relative(process.cwd(), includePath).replace(/\\/g, "/")
    );
    const newPaths = relativePaths.filter(
      (relativePath) => !tsconfig.include || !tsconfig.include.includes(relativePath)
    );
    if (newPaths.length === 0) {
      return;
    }
    let updatedContent = tsconfigContent;
    if (tsconfig.include) {
      const includeMatch = updatedContent.match(
        /"include"\s*:\s*\[([\s\S]*?)\]/
      );
      if (includeMatch && includeMatch[1] !== void 0) {
        const [fullMatch, arrayContent] = includeMatch;
        const newEntries = newPaths.map((path3) => `"${path3}"`).join(", ");
        const updatedArrayContent = arrayContent.trim() === "" ? newEntries : `${arrayContent}, ${newEntries}`;
        updatedContent = updatedContent.replace(
          fullMatch,
          `"include": [${updatedArrayContent}]`
        );
      }
    } else {
      const newEntries = newPaths.map((path3) => `"${path3}"`).join(", ");
      updatedContent = updatedContent.replace(
        /^(\s*\{\s*)/m,
        `$1
  "include": [${newEntries}],`
      );
    }
    fs2.writeFileSync(tsconfigPath, updatedContent);
    logIfNotSilent(
      silent,
      `\u{1F4DD} Added ${newPaths.join(", ")} to tsconfig.json includes`
    );
  } catch (error) {
    if (!silent) {
      console.warn(
        `\u26A0\uFE0F  Failed to update tsconfig.json: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
}
async function createBasicConfigFile(silent, options) {
  try {
    const pathArgs = [];
    if (options.cli?.output) {
      pathArgs.push(options.cli.output);
    }
    const extensions = [".ts", ".mjs", ".js"];
    const configExists = extensions.some(
      (ext) => fs2.existsSync(
        path2.resolve(process.cwd(), ...pathArgs, `basehub.config${ext}`)
      )
    );
    if (configExists) {
      return;
    }
    const configPath = path2.resolve(
      process.cwd(),
      ...pathArgs,
      "basehub.config.ts"
    );
    const configContent = `import { setGlobalConfig } from 'basehub';

setGlobalConfig({})
`;
    fs2.writeFileSync(configPath, configContent);
    logIfNotSilent(silent, `\u{1F4DD} Created basic config file: basehub.config.ts`);
    return configPath;
  } catch (err) {
  }
}
var main = async (args2, opts) => {
  const now = Date.now();
  let previousResolvedRef = null;
  const options = {
    token: args2["--token"],
    prefix: args2["--env-prefix"],
    cli: {
      output: args2["--output"],
      packageName: args2["--package-name"],
      banner: args2["--banner"]
    },
    draft: args2["--draft"],
    ref: args2["--ref"],
    apiVersion: args2["--api-version"],
    ...opts?.forceDraft && { draft: true }
  };
  const basehubModuleName = args2["--package-name"] || "basehub";
  const basehubTypesModuleName = args2["--package-name"] || "basehub-types";
  const { output } = await getStuffFromEnv({ ...options });
  let pathArgs = [];
  if (output) {
    pathArgs = [output, `${basehubTypesModuleName}.d.ts`];
  } else {
    pathArgs = [`${basehubTypesModuleName}.d.ts`];
  }
  try {
    if (basehubTypesModuleName === "basehub-types") {
      let pathArgsDeprecated = [];
      if (output) {
        pathArgsDeprecated = [output, `basehub.d.ts`];
      } else {
        pathArgsDeprecated = [`basehub.d.ts`];
      }
      const basehubOutputPathDeprecated = path2.resolve(
        process.cwd(),
        ...pathArgsDeprecated
      );
      if (fs2.existsSync(basehubOutputPathDeprecated)) {
        fs2.unlinkSync(basehubOutputPathDeprecated);
      }
    }
  } catch (err) {
  }
  const basehubOutputPath = path2.resolve(process.cwd(), ...pathArgs);
  async function generateSDK(silent, prevSchemaHash) {
    logIfNotSilent(silent, "\u{1FA84} Generating...");
    const { url, headers, draft, resolvedRef, token, apiVersion } = await getStuffFromEnv({
      ...options,
      revalidateResolvedRef: true
    });
    if (!silent) {
      logInsideBox([
        `\u{1F3AB} SDK Version: ${opts.version} (API v${apiVersion})`,
        `\u{1F517} Endpoint: ${url.toString()}`,
        `${draft ? "\u{1F7E1}" : "\u{1F535}"} Draft: ${draft ? "enabled" : "disabled"}`,
        `\u{1F4E6} Output: ${basehubOutputPath}`,
        `\u{1F500} Ref: ${resolvedRef.type === "branch" ? resolvedRef.name : resolvedRef.id} (basehub ${resolvedRef.type})`,
        resolvedRef.type === "branch" ? resolvedRef.git?.branch ? `\u{1F333} Linked git branch: ${resolvedRef.git?.branch}` : resolvedRef.createSuggestedBranchLink ? `\u{1F91D} Want to link this git branch to a basehub branch? ${resolvedRef.createSuggestedBranchLink}` : null : null
        // `🔑 Git Commit SHA: ${gitCommitSHA}`,
      ]);
      if (args2["--debug"]) {
        console.log(`[basehub] using token: ${token}`);
        console.log(
          `[basehub] resolved ref (full): ${JSON.stringify(
            resolvedRef,
            null,
            2
          )}`
        );
      }
    }
    const { preventedClientGeneration, schemaHash } = await generate({
      endpoint: url.toString(),
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      output: path2.join(basehubOutputPath),
      verbose: silent ? false : args2["--debug"],
      sortProperties: true,
      silent,
      packageName: basehubModuleName,
      previousSchemaHash: prevSchemaHash,
      banner: options.cli?.banner
    });
    if (preventedClientGeneration) {
      return {
        preventedClientGeneration,
        schemaHash,
        newResolvedRef: resolvedRef
      };
    }
    if (args2["--debug"]) {
      console.log(`[basehub] generated in: ${basehubOutputPath}`);
    }
    const configPath = await createBasicConfigFile(silent, options);
    const includes = [basehubOutputPath];
    if (configPath) {
      includes.push(configPath);
    }
    await updateTsconfigIncludes(includes, silent);
    logIfNotSilent(
      silent,
      `\u{1FA84} Generated basehub types in ${Date.now() - now}ms`
    );
    if (args2["--debug"]) {
      console.log(`[basehub] finished in ${Date.now() - now}ms`);
      console.log(
        `[basehub] checking if the generated client exists after 1 second`
      );
      await new Promise((resolve2) => {
        setTimeout(() => {
          resolve2(null);
          console.log(
            `[basehub] generated client exists? ${fs2.existsSync(path2.join(basehubOutputPath)) ? "YES" : "NO"}`
          );
        }, 1e3);
      });
    }
    return {
      preventedClientGeneration,
      schemaHash,
      newResolvedRef: resolvedRef
    };
  }
  if (args2["--watch"]) {
    let isFirst = true;
    let currSchemaHash = "";
    const { watchPromise, stopWatching } = scheduleNonOverlappingWork(
      async () => {
        let retryCount = 0;
        const maxRetries = 5;
        const retryDelay = 1e3;
        while (retryCount <= maxRetries) {
          try {
            const result = await generateSDK(!isFirst, currSchemaHash);
            currSchemaHash = result.schemaHash;
            if (isFirst) {
              console.log(" ");
              logInsideBox([
                "\u{1F440} `basehub` experimental --watch mode. Bugs: https://github.com/basehub-ai/basehub/issues"
              ]);
              console.log(" ");
            } else {
              if (result.newResolvedRef.ref !== previousResolvedRef?.ref) {
                logInsideBox([
                  `\u{1F500} Ref changed, now querying from ${result.newResolvedRef.type} ${result.newResolvedRef.ref}${result.newResolvedRef.type === "branch" && result.newResolvedRef.git?.branch ? ` (linked to Git branch ${result.newResolvedRef.git?.branch})` : ""}`
                ]);
              } else if (!result.preventedClientGeneration) {
                console.log("\u{1F504} Detected changes, `basehub` re-generated");
              }
            }
            previousResolvedRef = result.newResolvedRef;
            isFirst = false;
            break;
          } catch (error) {
            retryCount++;
            if (retryCount > maxRetries) {
              console.error(
                `\u274C Failed to generate SDK after ${maxRetries} retries:`,
                error
              );
              throw error;
            }
            await new Promise((resolve2) => setTimeout(resolve2, retryDelay));
          }
        }
      },
      2500,
      1e3 * 60 * 60 * 24
      // 24 hours
    );
    onProcessEndCallbacks.push(() => {
      console.log("\n\u{1F44B} Stopped `basehub` watcher.");
      stopWatching();
    });
    await watchPromise;
  } else {
    await generateSDK(false, "");
  }
};
["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
  process.on(signal, () => {
    onProcessEndCallbacks.forEach((cb) => cb());
    process.exit(0);
    console.log(
      `[${process.pid}] BaseHub process still alive after exit(), forcing SIGKILL...`
    );
    process.kill(process.pid, "SIGKILL");
  });
});
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  onProcessEndCallbacks.forEach((cb) => cb());
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  onProcessEndCallbacks.forEach((cb) => cb());
  process.exit(1);
});
function logInsideBox(_lines) {
  const lines = _lines.filter((line) => line !== null);
  const longestLine = lines.reduce(
    (max, line) => Math.max(max, line.length),
    0
  );
  const padLength = longestLine;
  console.log(`\u250C\u2500${"\u2500".repeat(padLength)}\u2500\u2510`);
  lines.forEach((line) => {
    console.log(`\u2502 ${line.padEnd(padLength)} \u2502`);
  });
  console.log(`\u2514\u2500${"\u2500".repeat(padLength)}\u2500\u2518`);
}
function logIfNotSilent(silent, message) {
  if (!silent) {
    console.log(message);
  }
}
var scheduleNonOverlappingWork = (callback, interval, totalTimeout) => {
  let isWatching = true;
  let timeoutId = null;
  const stopWatching = () => {
    isWatching = false;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  const watchPromise = new Promise((resolve2) => {
    const runWatch = async () => {
      while (isWatching) {
        await callback();
        if (isWatching) {
          await new Promise((resolve3) => setTimeout(resolve3, interval));
        }
      }
      resolve2();
    };
    runWatch();
    if (totalTimeout) {
      timeoutId = setTimeout(() => {
        console.log("\n\u231B Watch timeout reached. Stopped `basehub` watcher.");
        stopWatching();
      }, totalTimeout);
    }
  });
  return { watchPromise, stopWatching };
};

// src/bin/util/format-error.ts
var formatError = (error) => {
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === "string") {
    return new Error(error);
  }
  if (typeof error === "object") {
    return new Error(JSON.stringify(error, null, 2));
  }
  if (error) {
    console.error(error);
  }
  return new Error(`Unknown error. See logs above for details.`);
};

// src/bin/index.ts
async function help(code) {
  console.log(`
  Usage
    $ basehub
    $ basehub dev  # turns on draft and watch mode automatically.

  Options
    --output, -o  Output directory, if you don't want the default behavior.
    --env-prefix, -ep  Prefix for environment variables.
    --banner, -b  Add code at the top of each generated file.
    --watch, -w  Watch for changes and regenerate.
    --draft, -d  Generate with draft mode enabled.
    --api-version, -av  The version of the API to use.
    --version, -v  Version number.
    --help, -h     Display this message.`);
  process.exit(code);
}
var [, , cmd] = process.argv;
var systemArgs = ["-h", "--help", "-v", "--version"];
if (!cmd || cmd.startsWith("-") && systemArgs.includes(cmd) === false) {
  cmd = "generate";
}
var args = arg(
  {
    // types
    "--output": String,
    "--package-name": String,
    "--token": String,
    "--ref": String,
    "--env-prefix": String,
    "--banner": String,
    "--version": Boolean,
    "--draft": Boolean,
    "--help": Boolean,
    "--watch": Boolean,
    "--api-version": String,
    "--debug": Boolean,
    // aliases
    "-o": "--output",
    "-pn": "--package-name",
    "-t": "--token",
    "-r": "--ref",
    "-ep": "--env-prefix",
    "-b": "--banner",
    "-v": "--version",
    "-d": "--draft",
    "-h": "--help",
    "-w": "--watch",
    "-av": "--api-version"
  },
  { permissive: true }
);
if (args["--version"] || args["-v"]) {
  console.log(`basehub v${version}`);
  process.exit(0);
}
var cmds = {
  generate: () => main(args, { version }),
  build: () => main(args, { version }),
  // same as "generate"
  dev: () => main({ ...args, "--watch": true }, { forceDraft: true, version }),
  help: () => help(0)
};
try {
  cmds[cmd] ? cmds[cmd]?.(args).then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error(formatError(error));
    process.exit(1);
  }) : help(0);
} catch (e) {
  console.error(formatError(e).message);
  process.exit(1);
}
