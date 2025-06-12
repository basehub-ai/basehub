// @ts-ignore
import prettier from "prettier/standalone";
// @ts-ignore
import { BuiltInParserName } from "prettier";
// @ts-ignore
import parserGraphql from "prettier/parser-graphql";
// @ts-ignore
import parserTS from "prettier/parser-typescript";

export const prettify = async (
  code: string,
  parser?: BuiltInParserName
): Promise<string> => {
  try {
    // return code
    return prettier.format(code, {
      parser,
      plugins: [parserGraphql, parserTS],
      semi: false,
      singleQuote: true,
      trailingComma: "all",
      printWidth: 80,
    });
  } catch (error) {
    return code;
  }
};
