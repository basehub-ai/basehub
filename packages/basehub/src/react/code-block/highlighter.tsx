import { codeToHast } from "shiki";
import type {
  BundledLanguage,
  BundledTheme,
  ShikiTransformer,
  ThemeRegistrationAny,
} from "shiki";
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

type ComponentsToOverride = Pick<Components, "pre" | "code" | "span" | "div">;

export type HighlighterProps = {
  id: string;
  children: string;
  lang: BundledLanguage;
  theme: BundledTheme | ThemeRegistrationAny;
  components?: Partial<ComponentsToOverride>;
  extraTransformers?: Array<ShikiTransformer>;
  startHidden: boolean;
  groupId: string;
  lineNumbers?: boolean | { className?: string };
};

export const Highlighter = async ({
  id,
  children,
  lang,
  theme,
  components,
  extraTransformers,
  startHidden,
  groupId,
  lineNumbers,
}: HighlighterProps) => {
  const hast = await codeToHast(children, {
    lang,
    theme,
    transformers: [
      transformerNotationDiff(),
      transformerNotationErrorLevel(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      ...(lineNumbers
        ? [
            {
              line(node, line) {
                node.children = [
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      class:
                        lineNumbers === true
                          ? "line-number"
                          : lineNumbers.className,
                    },
                    children: [{ type: "text", value: line.toString() }],
                  },
                  ...node.children,
                ];
              },
            } satisfies ShikiTransformer,
          ]
        : []),
      ...(extraTransformers ?? []),
    ],
  });

  const content = toJsxRuntime(hast, { ...production, components });

  const RootComp = components?.div ?? "div";

  return (
    <RootComp
      data-snippet-group-id={groupId}
      data-snippet-id={id}
      style={{ display: startHidden ? "none" : "block" }}
    >
      {content}
    </RootComp>
  );
};
