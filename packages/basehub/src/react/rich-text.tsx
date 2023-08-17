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
