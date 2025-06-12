import { GraphQLScalarType } from "graphql";
import { RenderContext } from "../common/RenderContext.js";
import { getTypeMappedAlias } from "./typeMappedAlias.js";

export function renderScalarTypes(
  ctx: RenderContext,
  types: GraphQLScalarType[]
) {
  let content = "";
  types.forEach((type) => {
    content += `    ${type.name}: ${getTypeMappedAlias(type, ctx)},\n`;
  });
  return `export interface Scalars {\n${content}}`;
}
