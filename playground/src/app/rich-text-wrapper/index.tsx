import {
  RichText,
  RichTextProps,
  CustomBlocksBase,
  createRichTextWithDefaultComponents,
} from "basehub/react";

export const RichTextWrapper = <CustomBlocks extends CustomBlocksBase>(
  props: RichTextProps<CustomBlocks>
) => {
  return (
    <RichText
      {...props}
      components={{
        // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
        img: () => <img src="https://via.placeholder.com/150" />,
        blockquote: () => <blockquote>hey</blockquote>,
        ...props.components,
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
});

const BlogRendererV2 = <CustomBlocks extends CustomBlocksBase = readonly any[]>(
  props: React.ComponentProps<typeof RichTextRenderer<CustomBlocks>>
) => {
  return (
    <article>
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
          a: () => <>Asd</>,
          SomeCustomThing: ({ id }) => <div>hey</div>,
        }}
      >
        sdf
      </RichTextRenderer>

      <BlogRendererV2
        blocks={[{ __typename: "SomeCustomThing", id: "hey" }] as const}
        components={{}}
      >
        sdf
      </BlogRendererV2>
    </>
  );
};
