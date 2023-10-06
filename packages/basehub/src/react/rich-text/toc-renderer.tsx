import { OlHTMLAttributes } from "react"

type Props = {
  toc: Record<string, any>
  customRenderer?: {
    ol: (props: OlHTMLAttributes<HTMLOListElement>) => React.ReactElement
  }
}

export const TOCRenderer = ({toc, customRenderer}:Props) => {

  const OL = customRenderer?.ol ?? ((props: OlHTMLAttributes<HTMLOListElement>) => <ol {...props} />)

  return <OL>
        {toc.children.map((item) => null)}
    </OL>
}