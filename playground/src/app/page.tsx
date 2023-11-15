import {
  basehub,
  // RichTextJson,
  // TweetComponentGenqlSelection,
  // FieldsSelection,
} from "basehub";
// import { RichText } from "basehub/react";
// import { Tweet } from "react-tweet";

export default async function HomePage() {
  const data = await basehub({ draft: true }).raw({
    query: `{ __typename, testBreak {
      authors {
        items {
          _slug
          _title
        }
      }
    } }`,
  });

  const otherData = await basehub({ cache: "no-store", draft: true }).query({
    // __name: true,
    _sys: {
      slug: true,
    },
    testBreak: {
      authors: {
        items: {
          _slug: true,
          _title: true,
        },
      },
    },
    // blogIndex: {
    //   blogIndex: true,
    //   featuredPost: {
    //     content: {
    //       json: {
    //         toc: true,
    //         content: true,
    //         blocks: {
    //           __typename: true,
    //           on_BoldTextComponent: {
    //             _title: true,
    //             _sys: {
    //               id: true,
    //             },
    //           },
    //           on_TweetComponent: {
    //             _sys: {
    //               id: true,
    //             },
    //             tweetId: true,
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  });

  return (
    <main>
      <pre>{JSON.stringify({ data, otherData }, null, 2)}</pre>
      <br />
      {/* <RichText
        blocks={blogIndex.featuredPost.content?.json.blocks}
        components={{
          p: (props) => <p {...props} />,
          code: ({ children, isInline }) => (
            <code style={{ color: isInline ? "red" : "green" }}>
              {children}
            </code>
          ),
          TweetComponent: ({ tweetId }) => {
            return <Tweet id={tweetId} />;
          },
          video: ({ src }) => {
            return <video src={src} autoPlay loop playsInline muted />;
          },
        }}
      >
        {blogIndex.featuredPost.content?.json.content}
      </RichText>

      <RichText
        components={{
          ol: (props) => <ol {...props} style={{ color: "red !important" }} />,
          a: (props) => <a {...props} style={{ color: "green !important" }} />,
        }}
      >
        {blogIndex.featuredPost.content?.json.toc}
      </RichText> */}
    </main>
  );
}
