import { HTMLAttributes, OlHTMLAttributes } from "react"

type RendererComponents = {
  ol: (props: OlHTMLAttributes<HTMLOListElement>) => React.ReactElement
  title: (props: HTMLAttributes<HTMLHeadingElement>) => React.ReactElement
}


type TOCRendererProps = {
  toc: Record<string, any>
  customRenderer?: Partial<RendererComponents>,
  className?: string
}

export const TOCRenderer = ({toc, customRenderer = {}, ...rest}:TOCRendererProps) => {

  console.error(toc, null)
  const Title = customRenderer?.title ?? ((props: HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />)
  customRenderer.ol = customRenderer?.ol ?? ((props: OlHTMLAttributes<HTMLOListElement>) => <ol {...props} />)

  return  <div {...rest}>
            <Title className="mb-2 text-sm font-medium text-black dark:text-white">
              On this page
            </Title>
            <RecursiveList {...toc[0]} Renderer={customRenderer} level={1} />
          </div>
}

const RecursiveList = ({content, type, attrs, text, Renderer, level}: {
  Renderer: RendererComponents;
  level: number;
  text?: string;
  attrs?: Record<string, any>;
  type: string;
  content?: any[];
}) => {
  switch (type) {
    case 'orderedList':
      return <Renderer.ol className={`toc-level-${level}`} {...attrs}>{content?.map(item => <RecursiveList level={level + 1} Renderer={Renderer} {...item} />)}</Renderer.ol>
    case 'listItem':
      return <li {...attrs}>
        {content?.map(item => <RecursiveList level={level} Renderer={Renderer} {...item} />)}</li>
    case 'paragraph':
      return <p {...attrs}>{content?.map(item => <RecursiveList level={level} Renderer={Renderer} {...item} />)}</p>
    case 'text': 
      return text
  }
}