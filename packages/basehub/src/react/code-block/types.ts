import { HighlighterProps } from "./highlighter";

export type Snippet = {
  id: string;
  label?: string;
  code: string;
  language: HighlighterProps["lang"] | "plainText";
};

export type ClientSnippet = Omit<Snippet, "code">;
