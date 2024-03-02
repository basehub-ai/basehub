import {
  RichText,
  CustomBlocksBase,
  createRichTextWithDefaultComponents,
} from "basehub/react-rich-text";

export const RichTextWrapper = <CustomBlocks extends CustomBlocksBase>(
  props: React.ComponentProps<typeof RichText<CustomBlocks>>
) => {
  return (
    <RichText
      {...props}
      components={{
        // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
        img: () => <img src="https://via.placeholder.com/150" />,
        blockquote: () => <blockquote>hey</blockquote>,
        ...(props.components as any),
      }}
    />
  );
};

() => {
  return (
    <RichTextWrapper
      blocks={
        [
          { __typename: "SomeCustomThing", id: "hola" },
          { __typename: "HEY", id: "hola" },
        ] as const
      }
      components={{
        a: () => <>Asd</>,
        SomeCustomThing: ({ id }) => <div>{id}</div>,
        HEY: ({ id }) => <div>{id}</div>,
      }}
    >
      sdf
    </RichTextWrapper>
  );
};

const RichTextRenderer = createRichTextWithDefaultComponents({
  blockquote: () => <blockquote>hey</blockquote>,
  a: ({ href }) => <a href={href}>asdf</a>,
});

const BlogRendererV2 = <CustomBlocks extends CustomBlocksBase>(
  props: React.ComponentProps<typeof RichTextRenderer<CustomBlocks>>
) => {
  return (
    <article>
      <h1>sa</h1>
      <RichTextRenderer {...props} />
    </article>
  );
};

() => {
  return (
    <>
      <RichTextRenderer
        blocks={[{ __typename: "SomeCustomThing", id: "hey" }] as const}
        components={{
          SomeCustomThing: () => <div>hey</div>,
        }}
      >
        sdf
      </RichTextRenderer>

      <BlogRendererV2
        blocks={[{ __typename: "AnotherThing", id: "hey" }] as const}
        components={{
          AnotherThing: () => <div>hey</div>,
        }}
      >
        sdf
      </BlogRendererV2>
    </>
  );
};
