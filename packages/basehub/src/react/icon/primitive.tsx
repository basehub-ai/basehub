import * as React from "react";
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
  "linearGradient",
  "stop",
  "clipPath",
] as const;

type SvgComponent = (typeof supportedSvgTags)[number];

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
  linearGradient: (props) => React.createElement("linearGradient", props),
  stop: (props) => React.createElement("stop", props),
  clipPath: (props) => React.createElement("clipPath", props),
};

const XML_NAMESPACE_MAPPING: Record<string, string> = {
  "xmlns:xlink": "xmlnsXlink",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  "xlink:title": "xlinkTitle",
  "xlink:role": "xlinkRole",
  "xlink:arcrole": "xlinkArcrole",
  "xlink:show": "xlinkShow",
  "xlink:actuate": "xlinkActuate",
  "xmlns:xml": "xmlnsXml",
  "xmlns:ev": "xmlnsEv",
  href: "href",
  preserveAspectRatio: "preserveAspectRatio",
};

const sanitizeSVGString = (svgString: string): string => {
  let sanitized = svgString.replace(/<\?xml.*\?>\s*/g, "");
  sanitized = sanitized.replace(/\s*\/\s*>/g, "/>");

  if (!sanitized.includes('xmlns="http://www.w3.org/2000/svg"')) {
    sanitized = sanitized.replace(
      /<svg/,
      '<svg xmlns="http://www.w3.org/2000/svg"'
    );
  }

  // Ensure xlink namespace is present if xlink attributes are used
  if (sanitized.includes("xlink:") && !sanitized.includes("xmlns:xlink")) {
    sanitized = sanitized.replace(
      /<svg/,
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
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

const SVG_CACHE = createLRUCache<string, React.ReactElement>(50);

/* COMPONENT */
export const Icon = ({
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

  // Create LRU cache for parsed SVGs
  const cacheKey = content + JSON.stringify(components);
  const cachedResult = SVG_CACHE.get(cacheKey);

  if (cachedResult) {
    return cachedResult;
  }

  let parseAndRenderSVG = null;
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
      // Handle text nodes
      if (node.nodeType === 3) {
        const text = node.nodeValue?.trim();
        return text ? text : null;
      }

      const tagName = node.tagName;
      if (!tagName) return null;

      // Check if the tag is supported
      if (!supportedSvgTags.includes(tagName.toLowerCase() as any)) {
        console.warn(`Unsupported SVG tag: ${tagName}`);
        return null;
      }

      const tag = tagName.toLowerCase() as SvgComponent;
      const Component = finalComponents[tag] || DEFAULT_COMPONENTS[tag];

      if (!Component) {
        console.warn(`No component found for tag: ${tag}`);
        return null;
      }

      // Build props
      const props: Record<string, any> = {};
      const attributes = Array.from((node.attributes as NamedNodeMap) || []);

      attributes.forEach((attr: Attr) => {
        if (!attr) return;

        if (attr.name.startsWith("data-")) {
          props[attr.name] = attr.value;
          return;
        }

        // Check for XML namespace attributes
        if (attr.name in XML_NAMESPACE_MAPPING) {
          const mappedName =
            XML_NAMESPACE_MAPPING[
              attr.name as keyof typeof XML_NAMESPACE_MAPPING
            ];

          if (mappedName) props[mappedName] = attr.value;
          return;
        }

        const name = attr.name.replace(/-([a-z])/g, (substring: string) =>
          substring[1] ? substring[1].toUpperCase() : ""
        );

        if (name === "class") {
          props.className = attr.value;
        } else if (name === "style") {
          props[name] = parseStyleString(attr.value);
        } else {
          props[name] = attr.value;
        }
      });

      // Handle children
      const children = Array.from(node.childNodes as NodeListOf<ChildNode>)
        .map((child: any, index) => (
          <React.Fragment key={index}>{convertNode(child)}</React.Fragment>
        ))
        .filter(Boolean);

      // Create the component with children if they exist
      return children.length > 0 ? (
        <Component {...props}>{children}</Component>
      ) : (
        <Component {...props} />
      );
    };

    if (!svgElement) return null;

    parseAndRenderSVG = convertNode(svgElement);
  } catch (error) {
    console.error("SVG Parsing Error:", error);
    parseAndRenderSVG = null;
  }

  if (!parseAndRenderSVG) return null;

  const result = parseAndRenderSVG as React.ReactElement;
  SVG_CACHE.set(cacheKey, result);
  return result;
};

interface SVGProps {
  content: string;
  /**
   * @deprecated Use `content` instead.
   */
  children?: string;
  components?: Partial<ComponentsOverride>;
}

/**
 * @deprecated Use the `Icon` component instead.
 */
export const SVG: React.FC<SVGProps> = ({
  content: _content,
  children,
  components = DEFAULT_COMPONENTS,
}) => {
  console.warn(
    "Warning: The SVG component is deprecated and will be removed in the next major version. Please use the Icon component instead."
  );

  const content = _content ?? children;

  return <Icon content={content} components={components} />;
};

function createLRUCache<K, V>(maxSize: number = 10) {
  if (maxSize < 1) throw new Error("LRU cache max size must be greater than 0");

  const cache = new Map<K, V>();

  return {
    get: (key: K): V | undefined => {
      if (!cache.has(key)) return undefined;

      // Refresh key as most recently used
      const value = cache.get(key)!;
      cache.delete(key);
      cache.set(key, value);
      return value;
    },

    set: (key: K, value: V): void => {
      if (cache.has(key)) {
        // Delete to update insertion order
        cache.delete(key);
      } else if (cache.size >= maxSize) {
        // Remove least recently used (first item in Map)
        const lruKey = cache.keys().next().value;
        if (lruKey) cache.delete(lruKey);
      }
      cache.set(key, value);
    },

    has: (key: K): boolean => cache.has(key),

    delete: (key: K): boolean => cache.delete(key),

    clear: (): void => cache.clear(),

    get size(): number {
      return cache.size;
    },
  };
}
