import "server-only";
import { lazy } from "react";
import type { SetOptional } from "type-fest";
import { Highlighter, HighlighterProps } from "./highlighter";
import { Snippet } from "./types";
export { createCssVariablesTheme } from "shiki";
export type { BundledLanguage as Language } from "shiki";
import { useId } from "react";

const LazyClientController = lazy(() => import("./client"));

export type CodeBlockProps = {
  snippets: Array<SetOptional<Snippet, "id">>;
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
  const groupId = useId();

  const snippetsWithIds = snippets.map((s, i) => {
    return {
      ...s,
      id: s.id ?? groupId + "-snippet-" + i,
    };
  });

  return (
    <LazyClientController
      snippets={snippetsWithIds.map((s) => {
        return { id: s.id, lang: s.lang, label: s.label };
      })}
      storeSnippetSelection={!disableLocalStorageSelection}
      groupId={groupId}
    >
      {childrenTop}
      {snippetsWithIds.map((snippet, i) => {
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
