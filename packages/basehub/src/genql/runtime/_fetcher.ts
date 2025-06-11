import { QueryBatcher } from "./_batcher";

import type { ClientOptions } from "./_create-client";
import type { GraphqlOperation } from "./_generate-graphql-operation";
import { GenqlError } from "./_error";

export interface Fetcher {
  (
    gql: GraphqlOperation,
    extraFetchOptions?: Partial<RequestInit>
  ): Promise<any>;
}

export type BatchOptions = {
  batchInterval?: number; // ms
  maxBatchSize?: number;
};

const DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40,
};

export const createFetcher = ({
  url,
  headers = {},
  fetcher,
  fetch: _fetch,
  batch = false,
  ...rest
}: ClientOptions): Fetcher => {
  if (!url && !fetcher) {
    throw new Error("url or fetcher is required");
  }

  fetcher =
    fetcher ||
    (async (body, extraFetchOptions) => {
      let headersObject =
        typeof headers == "function" ? await headers() : headers;
      headersObject = headersObject || {};
      if (typeof fetch === "undefined" && !_fetch) {
        throw new Error(
          "Global `fetch` function is not available, pass a fetch polyfill to Genql `createClient`"
        );
      }
      const fetchImpl = _fetch || fetch;

      if (extraFetchOptions?.headers) {
        headersObject = {
          ...headersObject,
          ...extraFetchOptions.headers,
        };
        delete extraFetchOptions.headers;
      }

      const res = await fetchImpl(url!, {
        headers: {
          "Content-Type": "application/json",
          ...headersObject,
        },
        method: "POST",
        body: JSON.stringify(body),
        ...rest,
        ...extraFetchOptions,
      });
      if (!res.ok) {
        throw new Error(`${res.statusText}: ${await res.text()}`);
      }
      const json = await res.json();
      return json;
    });

  if (!batch) {
    return async (body, extraFetchOptions) => {
      const json = await fetcher!(body, extraFetchOptions);
      if (Array.isArray(json)) {
        return json.map((json) => {
          if (json?.errors?.length) {
            throw new GenqlError(json.errors || [], json.data);
          }
          return json.data;
        });
      } else {
        if (json?.errors?.length) {
          throw new GenqlError(json.errors || [], json.data);
        }
        return json.data;
      }
    };
  }

  const batcher = new QueryBatcher(
    async (batchedQuery, extraFetchOptions) => {
      // console.log(batchedQuery) // [{ query: 'query{user{age}}', variables: {} }, ...]
      const json = await fetcher!(batchedQuery, extraFetchOptions);
      return json as any;
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch
  );

  return async ({ query, variables }) => {
    const json = await batcher.fetch(query, variables);
    if (json?.data) {
      return json.data;
    }
    throw new Error(
      "Genql batch fetcher returned unexpected result " + JSON.stringify(json)
    );
  };
};
