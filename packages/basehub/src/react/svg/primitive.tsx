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

// Helper function to convert style string to React style object
const parseStyleString = (styleString: string): React.CSSProperties => {
  return styleString
    .split(";")
    .filter((style) => style.trim() !== "")
    .reduce((styleObj, style) => {
      const [property, value] = style.split(":").map((s) => s.trim());
      if (property && value) {
        // Convert CSS property names to camelCase
        const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );

        // Special handling for numeric values
        (styleObj as any)[camelCaseProperty] =
          /^\d+(\.\d+)?(px|em|rem|%)?$/.test(value) ? parseFloat(value) : value;
      }
      return styleObj;
    }, {} as React.CSSProperties);
};

export const SVG = ({
  content,
  components = DEFAULT_COMPONENTS,
}: {
  content: string;
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
          const attributeValue =
            attr.value as JSX.IntrinsicElements[typeof tag];

          if (name === "class") {
            props.className = attributeValue;
            return;
          }

          // Special handling for style attribute
          if (name === "style") {
            props[name] = parseStyleString(attributeValue as string) as any;
            return;
          }

          props[name] = attr.value as JSX.IntrinsicElements[typeof tag];
        });

        // Convert children
        const children = Array.from(node.childNodes)
          .map((child, index) => (
            <React.Fragment key={index}>
              {convertNode(child as Element)}
            </React.Fragment>
          ))
          .filter(Boolean);

        // Return the React element
        if (children.length === 0) return Component(props);

        return Component({ ...props, children });
      };

      return convertNode(svgElement);
    } catch (error) {
      console.error("Error parsing SVG:", error);
      return null;
    }
  };

  // Return the parsed and rendered SVG
  const renderedSvg = parseAndRenderSVG(content);
  if (!renderedSvg) return null;

  return renderedSvg;
};
