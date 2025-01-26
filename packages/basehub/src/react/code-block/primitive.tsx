import { lazy } from "react";
import { Highlighter, HighlighterProps } from "./highlighter";
import { Snippet } from "./types";
export { createCssVariablesTheme } from "shiki";
export type { BundledLanguage as Language } from "shiki";
import { useId } from "react";

const LazyClientController = lazy(() => import("./client"));

type CodeSnippet = Omit<Snippet, "id"> & {
  /**
   * @deprecated we now automatically generate IDs using React's useId hook, so don't use this.
   */
  id?: string;
};

export type CodeBlockProps = {
  snippets: Array<CodeSnippet>;
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
    return { ...s, id: groupId + "-snippet-" + i } satisfies Snippet;
  });

  return (
    <LazyClientController
      snippets={snippetsWithIds.map((s) => {
        return { id: s.id, language: s.language, label: s.label };
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
            lang={snippet.language}
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
