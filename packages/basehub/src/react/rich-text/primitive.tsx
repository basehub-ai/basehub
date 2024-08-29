/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type ReactNode } from "react";
import GithubSlugger from "github-slugger";
import { extractTextFromNode } from "./util/heading-id";

const isDev = process.env.NODE_ENV === "development";

interface Attrs {
  readonly [attr: string]: any;
}

const SUFFIX_CUSTOM_MARK = "_mark";
type SUFFIX_CUSTOM_BLOCK_MARK = typeof SUFFIX_CUSTOM_MARK;
type Mark =
  | { type: "bold" | "italic" | "underline" | "strike" | "kbd" }
  | {
      type: "code";
      attrs: { isInline?: boolean; language: string; code: string };
    }
  | { type: "link"; attrs: { href: string; target: string; class: string } }
  | { type: "basehub-inline-block"; attrs: { id: string } };

type Marks = Array<Mark>;

export type Node =
  | {
      type:
        | "paragraph"
        | "bulletList"
        | "listItem"
        | "taskList"
        | "blockquote"
        | "table"
        | "tableRow"
        | "tableBody";
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
      type: "codeBlock";
      attrs: {
        language?: string;
      };
      text: string;
      marks?: Array<Mark>;
      content?: [{ type: "text"; text: string }];
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
      type: "hardBreak";
      content?: Array<Node>;
    }
  | {
      type: "image";
      attrs: {
        src: string;
        alt?: string;
        width?: number;
        height?: number;
        caption?: string;
      };
      marks?: Array<Mark>;
      content?: Array<Node>;
    }
  | {
      type: "video";
      attrs: { src: string; width?: number; height?: number; caption?: string };
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
  p: (props: { children: ReactNode }) => ReactNode;
  b: (props: { children: ReactNode }) => ReactNode;
  em: (props: { children: ReactNode }) => ReactNode;
  s: (props: { children: ReactNode }) => ReactNode;
  kbd: (props: { children: ReactNode }) => ReactNode;
  code: (props: {
    children: ReactNode;
    isInline: boolean;
    language: string;
    code: string;
  }) => ReactNode;
  a: (props: {
    children: ReactNode;
    href: string;
    target?: string;
    rel?: string;
  }) => ReactNode;
  ol: (props: { children: ReactNode }) => ReactNode;
  ul: (props: { children: ReactNode; isTasksList: boolean }) => ReactNode;
  li: (
    props: {
      children: ReactNode;
    } & ({ isTaskListItem: false } | { isTaskListItem: true; checked: boolean })
  ) => ReactNode;
  h1: (props: { children: ReactNode; id: string }) => ReactNode;
  h2: (props: { children: ReactNode; id: string }) => ReactNode;
  h3: (props: { children: ReactNode; id: string }) => ReactNode;
  h4: (props: { children: ReactNode; id: string }) => ReactNode;
  h5: (props: { children: ReactNode; id: string }) => ReactNode;
  h6: (props: { children: ReactNode; id: string }) => ReactNode;
  hr: () => ReactNode;
  img: (props: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    caption?: string;
  }) => ReactNode;
  video: (props: {
    children: ReactNode;
    src: string;
    width?: number;
    height?: number;
    caption?: string;
  }) => ReactNode;
  blockquote: (props: { children: ReactNode }) => ReactNode;
  pre: (props: {
    children: ReactNode;
    language: string;
    code: string;
  }) => ReactNode;
  table: (props: { children: ReactNode }) => ReactNode;
  tr: (props: { children: ReactNode }) => ReactNode;
  td: (props: {
    children: ReactNode;
    colspan: number;
    rowspan: number;
  }) => ReactNode;
  th: (props: {
    children: ReactNode;
    colspan: number;
    rowspan: number;
  }) => ReactNode;
  thead: (props: { children: ReactNode }) => ReactNode;
  tbody: (props: { children: ReactNode }) => ReactNode;
  tfoot: (props: { children: ReactNode }) => ReactNode;
  br: () => ReactNode;
};

type ExtractPropsForHandler<Handler extends (props: any) => ReactNode> =
  Parameters<Handler>[0];

export type HandlerProps<Key extends keyof Handlers> = ExtractPropsForHandler<
  Handlers[Key]
>;

type CustomBlockBase = { readonly __typename: string };
export type CustomBlocksBase = readonly CustomBlockBase[];

type HandlerMapping<Blocks extends CustomBlocksBase = readonly any[]> = {
  [K in Blocks[number]["__typename"]]: (
    props: Extract<Blocks[number], { __typename: K }>
  ) => ReactNode;
};

type MarkHandlerMapping<Blocks extends CustomBlocksBase = readonly any[]> = {
  [K in Blocks[number]["__typename"] as `${K}${SUFFIX_CUSTOM_BLOCK_MARK}`]: (
    // we use this hack to add a type for each custom component to create separate handlers for each custom component -> magic 🧙
    props: Extract<Blocks[number], { __typename: K }> & { children: ReactNode }
  ) => ReactNode;
};

export type RichTextProps<
  CustomBlocks extends CustomBlocksBase = readonly any[],
> = {
  content?: Node[];
  /**
   * @deprecated Use `content` instead.
   */
  children?: unknown;
  blocks?: CustomBlocks;
  components?: Partial<
    Handlers & HandlerMapping<CustomBlocks> & MarkHandlerMapping<CustomBlocks>
  >;
};

export const RichText = <
  CustomBlocks extends CustomBlocksBase = readonly any[],
>(
  props: RichTextProps<CustomBlocks>
): ReactNode => {
  const value = (props.content ?? props.children) as Node[] | undefined;
  const slugger = new GithubSlugger();

  return (
    <>
      {value?.map((node, index) => {
        return (
          <Node
            node={node}
            key={index}
            components={props.components}
            blocks={props.blocks}
            slugger={slugger}
          />
        );
      })}
    </>
  );
};

const defaultHandlers: Handlers = {
  a: ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
  p: ({ children }) => <p>{children}</p>,
  b: ({ children }) => <b>{children}</b>,
  em: ({ children }) => <em>{children}</em>,
  s: ({ children }) => <s>{children}</s>,
  kbd: ({ children }) => <kbd>{children}</kbd>,
  code: ({ children, isInline, language }) => {
    return (
      <code
        {...(isInline === false
          ? { "data-language": language, className: `language-${language}` }
          : {})}
      >
        {children}
      </code>
    );
  },
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
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
  h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  hr: () => <hr />,
  img: ({ caption, alt, ...rest }) => (
    <img
      {...rest}
      alt={alt ?? caption}
      {...(caption ? { ["data-caption"]: caption } : {})}
    />
  ),
  video: ({ caption, ...rest }) => (
    <video
      controls
      {...rest}
      {...(caption ? { ["data-caption"]: caption } : {})}
    />
  ),
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  pre: ({ children, language }) => (
    <pre data-language={language} className={`language-${language}`}>
      {children}
    </pre>
  ),
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
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tfoot: ({ children }) => <tfoot>{children}</tfoot>,
  br: () => <br />,
};

const Node = ({
  node,
  components,
  blocks,
  parent,
  slugger,
}: {
  node: Node;
  components?: Partial<Handlers>;
  blocks?: readonly CustomBlockBase[];
  parent?: Node;
  slugger: GithubSlugger;
}) => {
  const children = node.content?.map((childNode, index) => {
    return (
      <Node
        node={childNode}
        parent={node}
        key={index}
        components={components}
        blocks={blocks}
        slugger={slugger}
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
      const clonedMarks = [...(node.marks ?? [])];
      if (forceCodeMark && !clonedMarks.some((mark) => mark.type === "code")) {
        const language = parent?.attrs?.language ?? "text";
        const code = parent.content?.[0].text ?? "";
        clonedMarks.push({
          type: "code",
          attrs: { isInline: false, language, code },
        } satisfies Mark);
      }
      handler = ({ children }: { children?: ReactNode }) => (
        <Marks marks={clonedMarks} components={components} blocks={blocks}>
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
      const id = slugger.slug(extractTextFromNode(node));

      props = { children, id } satisfies ExtractPropsForHandler<Handlers["h1"]>;
      break;
    case "horizontalRule":
      handler = components?.hr ?? defaultHandlers.hr;
      break;
    case "hardBreak":
      handler = components?.br ?? defaultHandlers.br;
      break;
    case "blockquote":
      handler = components?.blockquote ?? defaultHandlers.blockquote;
      props = { children } satisfies ExtractPropsForHandler<
        Handlers["blockquote"]
      >;
      break;
    case "codeBlock":
      handler = components?.pre ?? defaultHandlers.pre;
      const code = node.content?.[0].text ?? "";
      props = {
        children,
        language: node.attrs?.language ?? "text",
        code,
      } satisfies ExtractPropsForHandler<Handlers["pre"]>;
      break;
    case "table":
      handler = components?.table ?? defaultHandlers.table;

      /**
       * In the case of table, we add a tableBody node that wraps its children, as it seems to be missing in the response.
       */
      const overridenChildren = (
        <Node
          node={{ type: "tableBody", content: node.content }}
          parent={node}
          components={components}
          blocks={blocks}
          slugger={slugger}
        />
      );

      props = { children: overridenChildren } satisfies ExtractPropsForHandler<
        Handlers["table"]
      >;
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
    case "tableFooter":
      handler = components?.tfoot ?? defaultHandlers.tfoot;
      props = { children } satisfies ExtractPropsForHandler<Handlers["tfoot"]>;
      break;
    case "tableBody":
      handler = components?.tbody ?? defaultHandlers.tbody;
      props = { children } satisfies ExtractPropsForHandler<Handlers["tbody"]>;
      break;
    case "image":
      handler = components?.img ?? defaultHandlers.img;
      props = {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        alt: node.attrs.alt,
        caption: node.attrs.caption,
      } satisfies ExtractPropsForHandler<Handlers["img"]>;
      break;
    case "video":
      handler = components?.video ?? defaultHandlers.video;
      props = {
        children,
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        caption: node.attrs.caption,
      } satisfies ExtractPropsForHandler<Handlers["video"]>;
      break;
    case "basehub-block": {
      const block = blocks?.find((block: any) => {
        const typename = block?.__typename as string | undefined;
        const keysLength = Object.keys(block).length;
        const id = block?._id ?? block?._sys?.id;
        if (typeof id !== "string" && (!typename || keysLength > 1)) {
          if (isDev) {
            console.warn(
              `BaseHub RichText Error: make sure you send through the _id and the __typename for all custom blocks.\nReceived ${JSON.stringify(
                block,
                null,
                2
              )}.`
            );
          }
          return false;
        }
        return id === node.attrs.id;
      });
      if (!block) {
        // if (isDev) {
        //   console.warn(
        //     `BaseHub RichText Error: block "${node.attrs.id}" not found.`
        //   );
        // }
        break;
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
    // console.warn(`No handler found for node type ${node.type}`);
    return <></>;
  }

  // @ts-ignore
  return handler(props);
};

const Marks = ({
  marks,
  children,
  components,
  blocks,
}: {
  marks?: Marks;
  children: ReactNode;
  components?: Partial<Handlers>;
  blocks?: readonly CustomBlockBase[];
}) => {
  if (!marks) return <>{children}</>;
  const marksClone = [...marks];
  const mark = marksClone.pop();

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
    case "kbd":
      handler = components?.kbd ?? defaultHandlers.kbd;
      props = { children } satisfies ExtractPropsForHandler<Handlers["kbd"]>;
      break;
    case "code":
      handler = components?.code ?? defaultHandlers.code;
      props = {
        children,
        isInline: mark.attrs.isInline ?? true,
        language: mark.attrs.language ?? "text",
        code: mark.attrs.code ?? "",
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
        target: mark.attrs.target,
        rel:
          mark.attrs.target?.toLowerCase() === "_blank"
            ? "noopener noreferer"
            : undefined,
      } satisfies ExtractPropsForHandler<Handlers["a"]>;
      break;
    case "basehub-inline-block": {
      const block = blocks?.find((block: any) => {
        const typename = block?.__typename as string | undefined;
        const keysLength = Object.keys(block).length;
        const id = block?._id ?? block?._sys?.id;
        if (typeof id !== "string" && (!typename || keysLength > 1)) {
          if (isDev) {
            console.warn(
              `BaseHub RichText Error: make sure you send through the _id and the __typename for all custom blocks.\nReceived ${JSON.stringify(
                block,
                null,
                2
              )}.`
            );
          }
          return false;
        }
        return id === mark.attrs.id;
      });
      if (!block) {
        // if (isDev) {
        //   console.warn(
        //     `BaseHub RichText Error: block "${mark.attrs.id}" not found.`
        //   );
        // }
        break;
      }
      handler =
        // @ts-ignore
        components?.[block?.__typename + SUFFIX_CUSTOM_MARK] ??
        (() => <>{children}</>);
      // @ts-ignore
      props = { ...block, children };
      break;
    }
  }

  // @ts-ignore
  if (!handler) {
    // console.warn(`No handler found for mark ${mark}`);
    return <></>;
  }

  return (
    <Marks marks={marksClone} components={components} blocks={blocks}>
      {/* @ts-ignore */}
      {handler(props)}
    </Marks>
  );
};

export function createRichTextWithDefaultComponents(
  defaultComponents: RichTextProps["components"]
) {
  return <CustomBlocks extends CustomBlocksBase = readonly any[]>(
    props: RichTextProps<CustomBlocks>
  ): ReactNode => {
    return (
      <RichText<CustomBlocks>
        {...props}
        components={{
          ...defaultComponents,
          ...(props.components as any),
        }}
      />
    );
  };
}
