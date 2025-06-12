import { GraphQLInputObjectType, isNonNullType } from "graphql";
import { argumentComment, typeComment } from "../common/comment.js";
import { RenderContext } from "../common/RenderContext.js";
import { renderTyping } from "../common/renderTyping.js";
import { sortKeys } from "../common/support.js";

export const inputObjectType = (
  type: GraphQLInputObjectType,
  ctx: RenderContext
) => {
  let fields = type.getFields();

  if (ctx.config?.sortProperties) {
    fields = sortKeys(fields);
  }

  const fieldStrings = Object.keys(fields).map((fieldName) => {
    const field = fields[fieldName]!;
    return `${argumentComment(field)}${field.name}${
      isNonNullType(field.type) && field.defaultValue == null ? ":" : "?:"
    } ${renderTyping(field.type)}`;
  });

  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${type.name} {${fieldStrings.join(
      ","
    )}}`
  );
};
