import {
  GraphQLSchema,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isUnionType,
  GraphQLObjectType,
} from "graphql";
import { excludedTypes } from "../common/excludedTypes.js";
import { RenderContext } from "../common/RenderContext.js";
import { inputObjectType } from "./inputObjectType.js";
import { objectType } from "./objectType.js";
import { unionType } from "./unionType.js";
import { sortKeys } from "../common/support.js";
import { requestTypeName } from "./requestTypeName.js";

export const renderRequestTypes = (
  schema: GraphQLSchema,
  ctx: RenderContext
) => {
  let typeMap = schema.getTypeMap();

  if (ctx.config?.sortProperties) {
    typeMap = sortKeys(typeMap);
  }

  const fragmentMap = new Map<
    string,
    { rootTypeName: string; selectionTypeName: string }
  >();

  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue;

    const type = typeMap[name];

    if (isObjectType(type) || isInterfaceType(type)) {
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
      name: "SubscriptionGenqlSelection",
    },
  ]
    .map(renderAlias)
    .filter(Boolean)
    .join("\n");

  ctx.addCodeBlock(aliases);

  const fragmentsMapCode = renderFragmentsMapAndHelpers(fragmentMap);
  ctx.addCodeBlock(fragmentsMapCode);
};

function renderAlias({
  type,
  name,
}: {
  type?: GraphQLObjectType | null;
  name: string;
}) {
  if (type && requestTypeName(type) !== name) {
    // TODO make the camel case or kebab case an option
    return `export type ${name} = ${requestTypeName(type)}`;
  }
  return "";
}

function renderFragmentsMapAndHelpers(
  fragmentMap: Map<string, { rootTypeName: string; selectionTypeName: string }>
) {
  let result = `export interface FragmentsMap {\n`;

  for (const [key, value] of fragmentMap) {
    result += `  ${key}: {
    root: ${value.rootTypeName},
    selection: ${value.selectionTypeName},
}\n`;
  }

  result += "}\n";

  return result;
}
