import {
  buildClientSchema,
  getIntrospectionQuery,
  GraphQLSchema,
} from "graphql";
import { ListrTask } from "listr2";

import { lexicographicSortSchema } from "graphql";
import { Config } from "./main.js";

export const schemaTask = (config: Config): ListrTask => {
  const processSchema = (schema: GraphQLSchema) => {
    if (config.sortProperties) {
      return lexicographicSortSchema(schema);
    }
    return schema;
  };

  if (config.endpoint) {
    const endpoint = config.endpoint;
    return {
      title: `fetching schema from BaseHub's API`,
      task: async (ctx) => {
        ctx.schema = processSchema(
          await fetch(endpoint, {
            headers: config.headers,
            method: "POST",
            body: JSON.stringify({ query: getIntrospectionQuery() }),
          })
            .then((res) => res.json())
            .then((result) => {
              return buildClientSchema(result.data, { assumeValid: true });
            })
        );
      },
    };
  } else {
    throw new Error(
      "either `endpoint`, `fetcher` or `schema` must be defined in the config"
    );
  }
};
