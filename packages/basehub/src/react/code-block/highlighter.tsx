import { codeToHast, BundledLanguage, BundledTheme } from "shiki";
import * as prod from "react/jsx-runtime";
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { toJsxRuntime, Components } from "hast-util-to-jsx-runtime";

// @ts-expect-error: the react types are missing.
// eslint-disable-next-line import/namespace
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

type ComponentsToOverride = Pick<Components, "pre" | "code" | "span">;

export type HighlighterProps = {
  id: string;
  children: string;
  lang: BundledLanguage;
  theme: BundledTheme;
  components?: Partial<ComponentsToOverride>;
};

export const Highlighter = async ({
  id,
  children,
  lang,
  theme,
  components,
}: HighlighterProps) => {
  theme;
  const hast = await codeToHast(children, {
    lang,
    theme,
    transformers: [
      transformerNotationDiff(),
      transformerNotationErrorLevel(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });

  const content = toJsxRuntime(hast, { ...production, components });

  return <div data-snippet-id={id}>{content}</div>;
};
