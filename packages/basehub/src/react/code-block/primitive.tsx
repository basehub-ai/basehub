import "server-only";
import { lazy } from "react";
import { Highlighter, HighlighterProps } from "./highlighter";
import { Snippet } from "./types";
export { createCssVariablesTheme } from "shiki";
export type { BundledLanguage as Language } from "shiki";

const LazyClientController = lazy(() => import("./client"));

export type CodeBlockProps = {
  snippets: Array<Snippet>;
  theme: HighlighterProps["theme"];
  childrenTop?: React.ReactNode;
  childrenBottom?: React.ReactNode;
  components?: HighlighterProps["components"];
  extraTransformers?: HighlighterProps["extraTransformers"];
  disableLocalStorageSelection?: boolean;
  lineNumbers?: HighlighterProps["lineNumbers"];
};

export const CodeBlock = ({
  snippets,
  theme,
  childrenTop,
  childrenBottom,
  components,
  disableLocalStorageSelection,
  extraTransformers,
  lineNumbers,
}: CodeBlockProps) => {
  const groupId = "__bshb_code-block-id" + Math.random().toString(16).slice(2);

  return (
    <LazyClientController
      snippets={snippets.map((s) => {
        return { id: s.id, lang: s.lang, label: s.label };
      })}
      storeSnippetSelection={!disableLocalStorageSelection}
      groupId={groupId}
    >
      {childrenTop}
      {snippets.map((snippet, i) => {
        return (
          // @ts-ignore
          <Highlighter
            key={snippet.id}
            lang={snippet.lang}
            theme={theme}
            id={snippet.id}
            components={components}
            startHidden={i > 0}
            groupId={groupId}
            extraTransformers={extraTransformers}
            lineNumbers={lineNumbers}
          >
            {snippet.code}
          </Highlighter>
        );
      })}
      {childrenBottom}
    </LazyClientController>
  );
};
