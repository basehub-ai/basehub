/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type ReactNode, type ReactElement, useMemo } from "react";
import { extractTextFromNode, incrementID } from "./util/heading-id";

/**
 * TODOs
 *
 * - support json, html, markdown, plain text? we'd need to see the impact on bundle size
 */

// type Formats =
// | { type: "json"; children: unknown }
// | { type: "html" | "markdown" | "plain-text"; children: string };
type Formats = { children: unknown }; // only json supported for now.

interface Attrs {
  readonly [attr: string]: any;
}

type Mark =
  | { type: "bold" | "italic" | "underline" | "strike" }
  | { type: "code"; attrs: { isInline?: boolean } }
  | { type: "link"; attrs: { href: string; target: string; class: string } };

type Marks = Array<Mark>;

export type Node =
  | {
      type:
        | "paragraph"
        | "bulletList"
        | "listItem"
        | "taskList"
        | "blockquote"
        | "codeBlock"
        | "table"
        | "tableRow";
      attrs?: Attrs;
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "text";
      text: string;
      attrs?: Attrs;
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "orderedList";
      attrs?: { start: number };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "taskItem";
      attrs?: { checked: boolean };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "heading";
      attrs: { level: number };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "horizontalRule";
      content?: Array<Node>;
    }
  | {
      type: "image";
      attrs: { src: string; alt?: string; width?: number; height?: number };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "video";
      attrs: { src: string; width?: number; height?: number };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "tableCell" | "tableHeader" | "tableFooter";
      attrs: { colspan: number; rowspan: number };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "basehub-block";
      attrs: { id: string };
      marks?: Array<Mark>;
      content?: Array<Node>;
    };

type Handlers = {
  p: (props: { children: ReactNode }) => ReactElement;
  b: (props: { children: ReactNode }) => ReactElement;
  em: (props: { children: ReactNode }) => ReactElement;
  s: (props: { children: ReactNode }) => ReactElement;
  code: (props: { children: ReactNode; isInline: boolean }) => ReactElement;
  a: (props: { children: ReactNode; href: string }) => ReactElement;
  ol: (props: { children: ReactNode }) => ReactElement;
  ul: (props: { children: ReactNode; isTasksList: boolean }) => ReactElement;
  li: (
    props: {
      children: ReactNode;
    } & ({ isTaskListItem: false } | { isTaskListItem: true; checked: boolean })
  ) => ReactElement;
  h1: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  h2: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  h3: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  h4: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  h5: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  h6: (props: { children: ReactNode; id: string | undefined }) => ReactElement;
  hr: () => ReactElement;
  img: (props: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }) => ReactElement;
  video: (props: {
    children: ReactNode;
    src: string;
    width?: number;
    height?: number;
  }) => ReactElement;
  blockquote: (props: { children: ReactNode }) => ReactElement;
  pre: (props: { children: ReactNode }) => ReactElement;
  table: (props: { children: ReactNode }) => ReactElement;
  tr: (props: { children: ReactNode }) => ReactElement;
  td: (props: {
    children: ReactNode;
    colspan: number;
    rowspan: number;
  }) => ReactElement;
  th: (props: {
    children: ReactNode;
    colspan: number;
    rowspan: number;
  }) => ReactElement;

  // todo etc...
};

type ExtractPropsForHandler<Handler extends (props: any) => ReactElement> =
  Parameters<Handler>[0];

type CustomBlockBase = { readonly __typename: string };

type HandlerMapping<
  Blocks extends readonly CustomBlockBase[] = readonly any[],
> = {
  [K in Blocks[number]["__typename"]]: (
    props: Extract<Blocks[number], { __typename: K }>
  ) => ReactElement;
};

export type RichTextProps<
  CustomBlocks extends readonly CustomBlockBase[] = readonly any[],
> = Formats & {
  blocks?: CustomBlocks;
  components?: Partial<Handlers & HandlerMapping<CustomBlocks>>;
};

type GeneratedIDsRecord = Record<
  number, // level
  Array<string>
>;

export const RichText = <
  CustomBlocks extends readonly CustomBlockBase[] = readonly any[],
>(
  props: RichTextProps<CustomBlocks>
) => {
  const value = props.children as Node[] | undefined;
  const generatedIDs: GeneratedIDsRecord = useMemo(() => ({}), []);

  return (
    <>
      {value?.map((node, index) => {
        return (
          <Node
            node={node}
            key={index}
            components={props.components}
            blocks={props.blocks}
            level={0}
            generatedIDs={generatedIDs}
          />
        );
      })}
    </>
  );
};

const defaultHandlers: Handlers = {
  a: ({ children, href }) => <a href={href}>{children}</a>,
  p: ({ children }) => <p>{children}</p>,
  b: ({ children }) => <b>{children}</b>,
  em: ({ children }) => <em>{children}</em>,
  s: ({ children }) => <s>{children}</s>,
  code: ({ children }) => <code>{children}</code>,
  ol: ({ children }) => <ol>{children}</ol>,
  ul: ({ children }) => <ul>{children}</ul>,
  li: ({ children, ...rest }) => {
    return (
      <li
        {...(rest.isTaskListItem
          ? { style: { display: "flex", alignItems: "baseline" } }
          : undefined)}
      >
        {rest.isTaskListItem ? (
          <input type="checkbox" defaultChecked={rest.checked} />
        ) : null}
        {children}
      </li>
    );
  },
  h1: ({ children }) => <h1>{children}</h1>,
  h2: ({ children }) => <h2>{children}</h2>,
  h3: ({ children }) => <h3>{children}</h3>,
  h4: ({ children }) => <h4>{children}</h4>,
  h5: ({ children }) => <h5>{children}</h5>,
  h6: ({ children }) => <h6>{children}</h6>,
  hr: () => <hr />,
  img: (props) => <img {...props} />,
  video: (props) => <video {...props} />,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  pre: ({ children }) => <pre>{children}</pre>,
  table: ({ children }) => <table>{children}</table>,
  tr: ({ children }) => <tr>{children}</tr>,
  td: ({ children, colspan, rowspan }) => (
    <td colSpan={colspan} rowSpan={rowspan}>
      {children}
    </td>
  ),
  th: ({ children, colspan, rowspan }) => (
    <th colSpan={colspan} rowSpan={rowspan}>
      {children}
    </th>
  ),
};

const Node = ({
  node,
  components,
  blocks,
  parent,
  level,
  generatedIDs,
}: {
  node: Node;
  components?: Partial<Handlers>;
  blocks?: readonly CustomBlockBase[];
  parent?: Node;
  level: number;
  generatedIDs: GeneratedIDsRecord;
}) => {
  const children = node.content?.map((childNode, index) => {
    return (
      <Node
        node={childNode}
        parent={node}
        key={index}
        components={components}
        blocks={blocks}
        level={level + 1}
        generatedIDs={generatedIDs}
      />
    );
  });

  let handler: Handlers[keyof Handlers];
  let props: Parameters<typeof handler>[0];
  switch (node.type) {
    case "paragraph":
      handler = components?.p ?? defaultHandlers.p;
      props = { children } satisfies ExtractPropsForHandler<Handlers["p"]>;
      break;
    case "text":
      const forceCodeMark = parent?.type === "codeBlock";
      if (forceCodeMark) {
        node.marks = node.marks ?? [];
        node.marks.push({
          type: "code",
          attrs: { isInline: false },
        } satisfies Mark);
      }
      handler = ({ children }: { children?: ReactNode }) => (
        <Marks marks={node.marks} components={components}>
          {children}
        </Marks>
      );
      props = { children: node.text };
      break;
    case "bulletList":
    case "taskList":
      handler = components?.ul ?? defaultHandlers.ul;
      props = {
        children,
        isTasksList: node.type === "taskList",
      } satisfies ExtractPropsForHandler<Handlers["ul"]>;
      break;
    case "orderedList":
      handler = components?.ol ?? defaultHandlers.ol;
      props = { children } satisfies ExtractPropsForHandler<Handlers["ol"]>;
      break;
    case "listItem":
      handler = components?.li ?? defaultHandlers.li;
      props = {
        children,
        isTaskListItem: false,
      } satisfies ExtractPropsForHandler<Handlers["li"]>;
      break;
    case "taskItem":
      handler = components?.li ?? defaultHandlers.li;
      props = {
        children,
        isTaskListItem: true,
        checked: node.attrs?.checked ?? false,
      } satisfies ExtractPropsForHandler<Handlers["li"]>;
      break;
    case "heading":
      const handlerTag = `h${node.attrs.level}` as keyof Handlers;
      handler = components?.[handlerTag] ?? defaultHandlers[handlerTag];

      // initialize the array for this level
      generatedIDs[level] = generatedIDs[level] ?? [];

      function getUniqueID(id: string | undefined) {
        // make sure there are no collisions
        if (id) {
          if (generatedIDs[level]?.includes(id)) {
            return getUniqueID(incrementID(id));
          }
        }

        return id;
      }

      const id = getUniqueID(
        extractTextFromNode(node).toLowerCase().replace(/\s/g, "-") || undefined
      );

      if (id) {
        generatedIDs[level]?.push(id);
      }

      props = { children, id } satisfies ExtractPropsForHandler<Handlers["h1"]>;
      break;
    case "horizontalRule":
      handler = components?.hr ?? defaultHandlers.hr;
      break;
    case "blockquote":
      handler = components?.blockquote ?? defaultHandlers.blockquote;
      props = { children } satisfies ExtractPropsForHandler<
        Handlers["blockquote"]
      >;
      break;
    case "codeBlock":
      handler = components?.pre ?? defaultHandlers.pre;
      props = { children } satisfies ExtractPropsForHandler<Handlers["pre"]>;
      break;
    case "table":
      handler = components?.table ?? defaultHandlers.table;
      props = { children } satisfies ExtractPropsForHandler<Handlers["table"]>;
      break;
    case "tableRow":
      handler = components?.tr ?? defaultHandlers.tr;
      props = { children } satisfies ExtractPropsForHandler<Handlers["tr"]>;
      break;
    case "tableCell":
      handler = components?.td ?? defaultHandlers.td;
      props = {
        children,
        colspan: node.attrs.colspan,
        rowspan: node.attrs.rowspan,
      } satisfies ExtractPropsForHandler<Handlers["td"]>;
      break;
    case "tableHeader":
      handler = components?.th ?? defaultHandlers.th;
      props = {
        children,
        colspan: node.attrs.colspan,
        rowspan: node.attrs.rowspan,
      } satisfies ExtractPropsForHandler<Handlers["th"]>;
      break;
    case "image":
      handler = components?.img ?? defaultHandlers.img;
      props = {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        alt: node.attrs.alt,
      } satisfies ExtractPropsForHandler<Handlers["img"]>;
      break;
    case "video":
      handler = components?.video ?? defaultHandlers.video;
      props = {
        children,
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
      } satisfies ExtractPropsForHandler<Handlers["video"]>;
      break;
    case "basehub-block": {
      const block = blocks?.find((block: any) => {
        const id = block?._id ?? block?._sys?.id;
        if (typeof id !== "string") {
          throw new Error(
            `BaseHub RichText Error: make sure you send through the _id and the __typename for all custom blocks.`
          );
        }
        return id === node.attrs.id;
      });
      if (!block) {
        throw new Error(
          `BaseHub RichText Error: block "${node.attrs.id}" not found.`
        );
      }
      // @ts-ignore
      handler = components?.[block?.__typename] ?? (() => <></>);
      // @ts-ignore
      props = block;
      break;
    }
  }

  // @ts-ignore
  if (!handler) {
    console.warn(`No handler found for node type ${node.type}`);
    return <></>;
  }

  // @ts-ignore
  return handler(props);
};

const Marks = ({
  marks,
  children,
  components,
}: {
  marks?: Marks;
  children: ReactNode;
  components?: Partial<Handlers>;
}) => {
  if (!marks) return <>{children}</>;
  const mark = marks.pop();

  if (!mark) return <>{children}</>;

  let handler: Handlers[keyof Handlers];
  let props: Parameters<typeof handler>[0];
  switch (mark.type) {
    case "bold":
      handler = components?.b ?? defaultHandlers.b;
      props = { children } satisfies ExtractPropsForHandler<Handlers["b"]>;
      break;
    case "italic":
      handler = components?.em ?? defaultHandlers.em;
      props = { children } satisfies ExtractPropsForHandler<Handlers["em"]>;
      break;
    case "strike":
      handler = components?.s ?? defaultHandlers.s;
      props = { children } satisfies ExtractPropsForHandler<Handlers["s"]>;
      break;
    case "code":
      handler = components?.code ?? defaultHandlers.code;
      props = {
        children,
        isInline: mark.attrs.isInline ?? true,
      } satisfies ExtractPropsForHandler<Handlers["code"]>;
      break;
    case "underline":
      handler = components?.s ?? defaultHandlers.s;
      props = { children } satisfies ExtractPropsForHandler<Handlers["s"]>;
      break;
    case "link":
      handler = components?.a ?? defaultHandlers.a;
      props = {
        children,
        href: mark.attrs.href,
      } satisfies ExtractPropsForHandler<Handlers["a"]>;
      break;
  }

  // @ts-ignore
  if (!handler) {
    console.warn(`No handler found for mark ${mark}`);
    return <></>;
  }

  // @ts-ignore
  return <Marks marks={marks}>{handler(props)}</Marks>;
};