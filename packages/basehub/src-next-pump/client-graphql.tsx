import { Block } from "@basehub/data/replicache";
import { createYoga, createSchema } from "graphql-yoga";

export const graphqlRequest = async (query: string, blocks: Array<Block>) => {
  const schema = createSchema({
    typeDefs: /* GraphQL */ `
      type Repo {
        hash: String!
      }
      type BlogIndex {
        title: String!
        subtitle: String!
      }
      type Query {
        _sys: Repo!
        blogIndex: BlogIndex!
      }
    `,
    resolvers: {
      Query: {
        _sys: () => ({
          hash:
            blocks.find((b) => b.type === "root")?.hash ??
            "loading or error...",
        }),
        blogIndex: () => ({
          title:
            blocks.find((b) => b.title === "Title")?.value ??
            "loading or error...",
          subtitle:
            blocks.find((b) => b.title === "Subtitle")?.value ??
            "loading or error...",
        }),
      },
    },
  });

  // Create a Yoga instance with a GraphQL schema.
  const yoga = createYoga({ schema });

  // Execute a GraphQL query
  const request = new Request("/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const result = await yoga(request);

  return result;
};
