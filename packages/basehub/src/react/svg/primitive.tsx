import * as React from "react";
import * as z from "zod";

import { DOMParser } from "xmldom";

const svgComponentSchema = z.union([
  z.literal("svg"),
  z.literal("path"),
  z.literal("circle"),
  z.literal("rect"),
  z.literal("g"),
  z.literal("line"),
  z.literal("polyline"),
  z.literal("polygon"),
  z.literal("text"),
]);
type SvgComponent = z.infer<typeof svgComponentSchema>;

type ComponentsOverride = {
  [K in SvgComponent]: (props: JSX.IntrinsicElements[K]) => React.ReactNode;
};

const DEFAULT_COMPONENTS: ComponentsOverride = {
  svg: (props) => <svg {...props} />,
  path: (props) => <path {...props} />,
  circle: (props) => <circle {...props} />,
  rect: (props) => <rect {...props} />,
  g: (props) => <g {...props} />,
  line: (props) => <line {...props} />,
  polyline: (props) => <polyline {...props} />,
  polygon: (props) => <polygon {...props} />,
  text: (props) => <text {...props} />,
};

export const SVG = ({
  children,
  components = DEFAULT_COMPONENTS,
}: {
  children: string;
  components?: Partial<ComponentsOverride>;
}) => {
  // Merge default components with custom ones
  const finalComponents = { ...DEFAULT_COMPONENTS, ...components };

  const parseAndRenderSVG = (svgString: string) => {
    try {
      // Create a DOM parser
      const parser =
        typeof window !== "undefined"
          ? new DOMParser()
          : new (require("xmldom").DOMParser)();
      const doc = parser.parseFromString(svgString, "image/svg+xml");
      const svgElement = doc.documentElement;

      // Recursive function to convert DOM nodes to React elements
      const convertNode = (node: Element): React.ReactNode => {
        // Skip text nodes that only contain whitespace
        if (node.nodeType === 3 && !node.nodeValue?.trim()) {
          return null;
        }

        // For text nodes, return the text content
        if (node.nodeType === 3) {
          return node.nodeValue;
        }

        // Get the tag name and convert to lowercase
        const tagName = node.tagName?.toLowerCase();

        // Skip if not a valid tag
        if (!tagName) return null;
        const parsedTagName = svgComponentSchema.safeParse(tagName);

        // Get the component for this tag
        const tag = parsedTagName.success
          ? parsedTagName.data
          : (tagName as SvgComponent);
        const Component = finalComponents[tag];

        // Convert attributes to props
        const props: Record<string, JSX.IntrinsicElements[typeof tag]> = {};
        Array.from(node.attributes || []).forEach((attr) => {
          // Convert kebab-case to camelCase for React
          const name = attr.name.replace(/-([a-z])/g, (g) =>
            (g?.[1] as string).toUpperCase()
          );
          props[name] = attr.value as JSX.IntrinsicElements[typeof tag];
        });

        // Convert children
        const _children = Array.from(node.childNodes)
          .map((child) => convertNode(child as Element))
          .filter(Boolean);

        // Return the React element
        if (_children.length === 0) return Component(props);

        return Component({ ...props, children: _children });
      };

      return convertNode(svgElement);
    } catch (error) {
      console.error("Error parsing SVG:", error);
      return null;
    }
  };

  // Return the parsed and rendered SVG
  const renderedSvg = parseAndRenderSVG(children);
  if (!renderedSvg) return null;

  return renderedSvg;
};
