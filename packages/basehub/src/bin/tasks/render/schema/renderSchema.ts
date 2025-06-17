import { GraphQLSchema, printSchema } from "graphql";
import { RenderContext } from "../common/RenderContext.js";

export const renderSchema = (schema: GraphQLSchema, ctx: RenderContext) => {
  ctx.addCodeBlock(printSchema(schema));
};
