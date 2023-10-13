import { HTMLAttributes, OlHTMLAttributes } from "react"

type RendererComponents = {
  ol: (props: OlHTMLAttributes<HTMLOListElement>) => React.ReactElement;
  title: (props: HTMLAttributes<HTMLHeadingElement>) => React.ReactElement;
  a: (props: HTMLAttributes<HTMLAnchorElement>) => React.ReactElement;
};

type TOCRendererProps = {
  toc: Record<string, any>;
  customRenderer?: Partial<RendererComponents>;
  className?: string;
};

export const TOCRenderer = ({ toc, customRenderer = {}, ...rest }: TOCRendererProps) => {
  const Title =
    customRenderer?.title ?? ((props: HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />);
  customRenderer.ol =
    customRenderer?.ol ?? ((props: OlHTMLAttributes<HTMLOListElement>) => <ol {...props} />);
  customRenderer.a =
    customRenderer?.a ?? ((props: HTMLAttributes<HTMLAnchorElement>) => <a {...props} />);

  return (
    <div {...rest}>
      <Title className="mb-2 text-sm font-medium text-black dark:text-white">On this page</Title>
      <RecursiveList {...toc[0]} Renderer={customRenderer} level={1} />
    </div>
  );
};

const RecursiveList = ({
  content,
  type,
  attrs,
  text,
  Renderer,
  level,
  marks
}: {
  Renderer: RendererComponents;
  level: number;
  text?: string;
  attrs?: Record<string, any>;
  type: string;
  content?: any[];
  marks?: Record<string, any>[];
}) => {
  if (attrs?.class) {
    attrs.className = attrs.class;
    delete attrs.class;
  }

  switch (type) {
    case 'orderedList':
      return (
        <Renderer.ol className={`toc-level-${level}`} {...attrs}>
          {content?.map((item, index) => (
            <RecursiveList key={index} level={level + 1} Renderer={Renderer} {...item} />
          ))}
        </Renderer.ol>
      );
    case 'listItem':
      return (
        <li {...attrs}>
          {content?.map((item, index) => (
            <RecursiveList key={index} level={level} Renderer={Renderer} {...item} />
          ))}
        </li>
      );
    case 'paragraph':
      return (
        <p {...attrs}>
          {content?.map((item, index) => (
            <RecursiveList key={index} level={level} Renderer={Renderer} {...item} />
          ))}
        </p>
      );
    case 'text':
      if (marks && marks[0]?.type === 'link') {
        if (marks[0].attrs?.class) {
          marks[0].attrs.className = marks[0].attrs.class;
          delete marks[0].attrs.class;
        }

        marks[0].attrs.href = `#${marks[0].attrs.href.split('#').at(-1)}`;

        return (
          <Renderer.a
            {...marks[0].attrs}
          >
            {text}
          </Renderer.a>
        );
      }
      return <>{text}</>;
    default:
      console.warn(`BSHB: TOC Type ${type} not handled`);
      return null;
  }
};