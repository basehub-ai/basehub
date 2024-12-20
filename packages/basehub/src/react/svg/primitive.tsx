import * as React from "react";
import * as z from "zod";
import { DOMParser, Element as XMLElement } from "@xmldom/xmldom";

export const supportedSvgTags = [
  "svg",
  "path",
  "circle",
  "rect",
  "g",
  "line",
  "polyline",
  "polygon",
  "text",
  "filter",
  "feFlood",
  "feColorMatrix",
  "feOffset",
  "feGaussianBlur",
  "feBlend",
  "feComposite",
  "mask",
  "defs",
] as const;
const svgComponentSchema = z.enum(supportedSvgTags);

type SvgComponent = z.infer<typeof svgComponentSchema>;

type ComponentsOverride = {
  [K in SvgComponent]: (props: JSX.IntrinsicElements[K]) => React.ReactElement;
};

const DEFAULT_COMPONENTS: ComponentsOverride = {
  svg: (props) => React.createElement("svg", props),
  path: (props) => React.createElement("path", props),
  circle: (props) => React.createElement("circle", props),
  rect: (props) => React.createElement("rect", props),
  g: (props) => React.createElement("g", props),
  line: (props) => React.createElement("line", props),
  polyline: (props) => React.createElement("polyline", props),
  polygon: (props) => React.createElement("polygon", props),
  text: (props) => React.createElement("text", props),
  filter: (props) => React.createElement("filter", props),
  feFlood: (props) => React.createElement("feFlood", props),
  feColorMatrix: (props) => React.createElement("feColorMatrix", props),
  feComposite: (props) => React.createElement("feComposite", props),
  feOffset: (props) => React.createElement("feOffset", props),
  feGaussianBlur: (props) => React.createElement("feGaussianBlur", props),
  feBlend: (props) => React.createElement("feBlend", props),
  mask: (props) => React.createElement("mask", props),
  defs: (props) => React.createElement("defs", props),
};

const sanitizeSVGString = (svgString: string): string => {
  // Remove any XML declaration
  let sanitized = svgString.replace(/<\?xml.*\?>\s*/g, "");

  // Ensure self-closing tags are properly formatted
  sanitized = sanitized.replace(/\s*\/\s*>/g, "/>");

  // Add namespace if missing
  if (!sanitized.includes('xmlns="http://www.w3.org/2000/svg"')) {
    sanitized = sanitized.replace(
      /<svg/,
      '<svg xmlns="http://www.w3.org/2000/svg"'
    );
  }

  return sanitized;
};

const parseStyleString = (styleString: string): React.CSSProperties => {
  return styleString
    .split(";")
    .filter((style) => style.trim() !== "")
    .reduce((styleObj, style) => {
      const [property, value] = style.split(":").map((s) => s.trim());
      if (property && value) {
        const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        (styleObj as any)[camelCaseProperty] =
          /^\d+(\.\d+)?(px|em|rem|%)?$/.test(value) ? parseFloat(value) : value;
      }
      return styleObj;
    }, {} as React.CSSProperties);
};

export const SVG = ({
  content: _content,
  children,
  components = DEFAULT_COMPONENTS,
}: {
  content: string;
  /**
   * @deprecated Use `content` instead.
   */
  children?: string;
  components?: Partial<ComponentsOverride>;
}) => {
  const content = _content ?? children;

  const parseAndRenderSVG = React.useMemo(() => {
    const finalComponents = { ...DEFAULT_COMPONENTS, ...components };

    try {
      const sanitizedSvgString = sanitizeSVGString(content);

      const doc = new DOMParser().parseFromString(
        sanitizedSvgString,
        "image/svg+xml"
      );

      const parseErrors = doc.getElementsByTagName("parsererror");
      if (parseErrors.length > 0) {
        throw new Error(`XML Parsing Error: ${parseErrors[0]?.textContent}`);
      }

      const svgElement = doc.documentElement;

      const convertNode = (node: XMLElement | Element): React.ReactNode => {
        if (node.nodeType === 3 && !node.nodeValue?.trim()) {
          return null;
        }

        if (node.nodeType === 3) {
          return node.nodeValue;
        }

        const tagName = node.tagName;
        if (!tagName) return null;

        const parsedTagName = svgComponentSchema.safeParse(tagName);
        const tag = parsedTagName.success
          ? parsedTagName.data
          : (tagName as SvgComponent);
        const Component = finalComponents[tag] || DEFAULT_COMPONENTS[tag];

        const props: Record<string, any> = {};
        const attributes = Array.prototype.slice.call(node.attributes || []);
        attributes.forEach((attr: any) => {
          if (attr.name.startsWith("data-")) {
            props[attr.name] = attr.value;
            return;
          }

          const name = attr.name.replace(/-([a-z])/g, (g: string[]) =>
            (g?.[1] as string).toUpperCase()
          );

          if (name === "class") {
            props.className = attr.value;
          } else if (name === "style") {
            props[name] = parseStyleString(attr.value);
          } else {
            props[name] = attr.value;
          }
        });

        const children = Array.prototype.slice
          .call(node.childNodes)
          .map((child: any, index) => (
            <React.Fragment key={index}>{convertNode(child)}</React.Fragment>
          ))
          .filter(Boolean);

        if (typeof Component !== "function") return null;

        return children.length === 0
          ? Component(props)
          : Component({ ...props, children });
      };

      if (!svgElement) return null;

      return convertNode(svgElement);
    } catch (error) {
      console.error("SVG Parsing Error:", error);
      return null;
    }
  }, [content, components]);

  if (!parseAndRenderSVG) return null;

  return parseAndRenderSVG as React.ReactElement;
};
