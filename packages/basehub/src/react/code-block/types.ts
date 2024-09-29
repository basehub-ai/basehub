import { HighlighterProps } from "./highlighter";

export type Snippet = {
  id: string;
  label?: string;
  code: string;
  lang: HighlighterProps["lang"];
};

export type ClientSnippet = Omit<Snippet, "code">;
