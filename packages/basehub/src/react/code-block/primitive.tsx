import { lazy } from "react";
import { Highlighter, HighlighterProps } from "./highlighter";

const LazyClientController = lazy(() => import("./client"));

export type Snippet = {
  id: string;
  code: string;
  lang: HighlighterProps["lang"];
};

export type CodeBlockProps = {
  snippets: Array<Snippet>;
  theme: HighlighterProps["theme"];
  children?: React.ReactNode;
};

export const CodeBlock = ({ snippets, theme, children }: CodeBlockProps) => {
  return (
    <LazyClientController
      snippets={snippets.map((s) => {
        return { id: s.id, lang: s.lang };
      })}
    >
      {children}
      {snippets.map((snippet) => {
        return (
          // @ts-expect-error -- rsc
          <Highlighter
            key={snippet.id}
            lang={snippet.lang}
            theme={theme}
            id={snippet.id}
          >
            {snippet.code}
          </Highlighter>
        );
      })}
    </LazyClientController>
  );
};
