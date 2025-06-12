import {
  GraphQLSchema,
  isEnumType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
  GraphQLScalarType,
  GraphQLObjectType,
} from "graphql";
import { excludedTypes } from "../common/excludedTypes.js";
import { RenderContext } from "../common/RenderContext.js";
import { enumType } from "./enumType.js";
import { objectType } from "./objectType.js";
import { renderScalarTypes } from "./scalarType.js";
import { unionType } from "./unionType.js";
import { interfaceType } from "./interfaceType.js";
import { sortKeys } from "../common/support.js";

export const renderResponseTypes = (
  schema: GraphQLSchema,
  ctx: RenderContext
) => {
  let typeMap = schema.getTypeMap();
  if (ctx.config?.sortProperties) {
    typeMap = sortKeys(typeMap);
  }
  ctx.addCodeBlock(
    renderScalarTypes(
      ctx,
      Object.values(typeMap).filter((type): type is GraphQLScalarType =>
        isScalarType(type)
      )
    )
  );
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue;

    const type = typeMap[name];

    if (isEnumType(type)) enumType(type, ctx);
    if (isUnionType(type)) unionType(type, ctx);
    if (isObjectType(type)) objectType(type, ctx);
    if (isInterfaceType(type)) interfaceType(type, ctx);
  }

  const aliases = [
    { type: schema.getQueryType(), name: "Query" },
    { type: schema.getMutationType(), name: "Mutation" },
    { type: schema.getSubscriptionType(), name: "Subscription" },
  ]
    .map(renderAlias)
    .filter(Boolean)
    .join("\n");
  ctx.addCodeBlock(aliases);
};

function renderAlias({
  type,
  name,
}: {
  type?: GraphQLObjectType | null;
  name: string;
}) {
  if (type && type.name !== name) {
    return `export type ${name} = ${type.name}`;
  }
  return "";
}
