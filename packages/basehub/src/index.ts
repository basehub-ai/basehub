import {
  FallbackPlayground,
  getStuffFromEnv,
} from "./bin/util/get-stuff-from-env.js";
import { hashObject } from "./bin/util/hash.js";
import { isV0OrBolt } from "./vibe.js";
import { ClientOptions, createClient } from "./genql/runtime/_create-client.js";
import {
  generateGraphqlOperation,
  GraphqlOperation,
} from "./genql/runtime/_generate-graphql-operation.js";
import { FieldsSelection } from "./genql/runtime/_type-selection.js";

// these will be overridden by the generated types (if any)
export interface Scalars {}
export interface Query {}
export interface Mutation {}
export interface QueryGenqlSelection {}
export interface MutationGenqlSelection {}
export interface FragmentsMap {}

export * from "./fragment.js";

// we include the resolvedRef.id to make sure the cache tag is unique per basehub ref
// solves a nice problem which we'd otherwise have, being that if the dev wants to hit a different basehub branch, we don't want to respond with the same cache tag as the previous branch
export function cacheTagFromQuery(
  query: Record<string, unknown>,
  refId: string,
  apiVersion: string | undefined
) {
  const result =
    "basehub-" +
    hashObject({ ...query, refId, ...(apiVersion ? { apiVersion } : {}) });
  return result;
}

// we limit options to only the ones we want to expose.
export type Options = Omit<
  ClientOptions,
  | "url"
  | "method"
  | "batch"
  | "credentials"
  | "fetch"
  | "fetcher"
  | "headers"
  | "integrity"
  | "keepalive"
  | "mode"
  | "redirect"
  | "referrer"
  | "referrerPolicy"
  | "window"
> & {
  draft?: boolean;
  token?: string;
  ref?: string;
  fallbackPlayground?: FallbackPlayground | undefined;
};

/**
 * Create a basehub client.
 *
 * @param options (optional) Options for the `fetch` request; for example in Next.js, you can do `{ next: { revalidate: 60 } }` to tweak your app's cache.
 * @returns A basehub client.
 *
 * @example
 * import { basehub } from 'basehub'
 *
 * const firstQuery = await basehub().query({
 *   __typename: true,
 * });
 *
 * console.log(firstQuery.__typename) // => 'Query'
 *
 */
export const basehub = <
  Q extends Record<string, any> = Query,
  QSel extends Record<string, any> = QueryGenqlSelection,
  M extends Record<string, any> = Mutation,
  MSel extends Record<string, any> = MutationGenqlSelection,
>(
  options?: Options
) => {
  if (!options) {
    options = {};
  }

  options.getExtraFetchOptions = async (op, _body, originalRequest) => {
    const { url, headers, resolvedRef, draft } = await getStuffFromEnv(options);

    const extra = {
      url,
      headers: { ...headers },
    };

    if (op !== "query") return extra;

    let isNextjs = false;

    if (draft) {
      // get rid of automatic nextjs caching
      // @ts-expect-error
      extra.next = { revalidate: undefined };
      // @ts-expect-error
      extra.cache = "no-store";
    }

    if (draft) return extra;

    // only override if revalidation is not being handled by the user
    // @ts-expect-error
    if (!isV0OrBolt() && typeof options?.next === "undefined") {
      try {
        // @ts-ignore
        isNextjs = !!(await import(/* @vite-ignore */ "next/headers"));
      } catch (error) {
        // noop, not using nextjs
      }
      if (isNextjs) {
        const cacheTag = cacheTagFromQuery(
          originalRequest,
          resolvedRef.id,
          headers["x-basehub-api-version"]
        );
        // @ts-expect-error
        extra.next = { tags: [cacheTag] };
        extra.headers = {
          ...extra.headers,
          ["x-basehub-cache-tag" as any]: cacheTag,
        };
      }
    }

    return extra;
  };

  return createClient<Q, QSel, M, MSel>(options);
};

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
  Query,
  fields
>;
export const generateQueryOp: (
  fields: QueryGenqlSelection
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("query", fields as any);
};

export type MutationResult<fields extends MutationGenqlSelection> =
  FieldsSelection<Mutation, fields>;
export const generateMutationOp: (
  fields: MutationGenqlSelection
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("mutation", fields as any);
};

/**
 * Global configuration for the `basehub` SDK
 */
export type BaseHubConfig = Pick<
  Options,
  "ref" | "draft" | "fallbackPlayground" | "token"
  // eslint-disable-next-line @typescript-eslint/ban-types
> & {};

const BASEHUB_CONFIG = Symbol.for("basehub.config");

export function setGlobalConfig(config: BaseHubConfig) {
  // @ts-ignore
  globalThis[BASEHUB_CONFIG] = config;
}

export function getGlobalConfig() {
  // @ts-ignore
  return (globalThis[BASEHUB_CONFIG] ?? null) as BaseHubConfig | null;
}
