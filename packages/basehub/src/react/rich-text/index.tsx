type RenderBaseHubRichTextProps = {
  html: string;
};

export const RenderBaseHubRichText = ({ html }: RenderBaseHubRichTextProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default RenderBaseHubRichText;

export { TOCRenderer } from './toc-renderer'
