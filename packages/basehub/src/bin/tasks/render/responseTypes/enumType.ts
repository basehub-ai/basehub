import { GraphQLEnumType } from "graphql";
import { typeComment } from "../common/comment.js";
import { RenderContext } from "../common/RenderContext.js";

export const enumType = (type: GraphQLEnumType, ctx: RenderContext) => {
  const values = type.getValues().map((v) => `'${v.name}'`);
  ctx.addCodeBlock(
    `${typeComment(type)}export type ${type.name} = ${values.join(" | ")}`
  );
};
