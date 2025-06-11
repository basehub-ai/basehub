import { getStuffFromEnv } from "./bin/util/get-stuff-from-env.js";
import { hashObject } from "./bin/util/hash.js";
import {
  ClientOptions,
  createClient as createClientOriginal,
} from "./genql/runtime/_create-client.js";
import {
  generateGraphqlOperation,
  GraphqlOperation,
} from "./genql/runtime/_generate-graphql-operation.js";
import { FieldsSelection } from "./genql/runtime/_type-selection.js";

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
> & { draft?: boolean; token?: string; ref?: string };

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
export const basehub = (options?: Options) => {
  if (!options) {
    options = {};
  }

  options.getExtraFetchOptions = async (op, _body, originalRequest) => {
    const { url, headers, token, resolvedRef } = await getStuffFromEnv(options);

    const extra = {
      url,
      headers: {
        "x-basehub-sdk-build-id": resolvedRef.id,
      },
    };

    const tokenHash = hashObject({ token });
    if (op !== "query") return {};

    let isNextjs = false;
    let isNextjsDraftMode = false;

    if (options.draft === undefined) {
      // try to auto-detect (only if draft is not explicitly set by the user)
      try {
        // @ts-ignore
        const { draftMode } = await import("next/headers");
        isNextjsDraftMode = (await draftMode()).isEnabled;
      } catch (error) {
        // noop, not using nextjs
      }
    }

    const isDraftResolved =
      false || isNextjsDraftMode || options.draft === true;

    if (isDraftResolved) {
      extra.headers = { ...extra.headers, ["x-basehub-draft" as any]: "true" };

      // get rid of automatic nextjs caching
      // @ts-expect-error
      extra.next = { revalidate: undefined };
      // @ts-expect-error
      extra.cache = "no-store";
      // try to get ref from cookies
      try {
        // @ts-ignore
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        const ref = cookieStore.get("bshb-preview-ref-" + tokenHash)?.value;
        if (ref) {
          extra.headers = {
            ...extra.headers,
            ["x-basehub-ref" as any]: ref,
          };
        }
      } catch (error) {
        // noop
      }
    }

    if (isDraftResolved) return extra;

    // only override if revalidation is not being handled by the user
    // @ts-expect-error
    if (typeof options?.next === "undefined") {
      try {
        // @ts-ignore
        isNextjs = !!(await import("next/headers"));
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

  return createClientOriginal(options);
};

basehub.replaceSystemAliases = createClientOriginal.replaceSystemAliases;

/**
 * Create a basehub client.
 *
 * @param options (optional) Options for the `fetch` request; for example in Next.js, you can do `{ next: { revalidate: 60 } }` to tweak your app's cache.
 * @returns A basehub client.
 *
 * @example
 * import { createClient } from 'basehub'
 *
 * const basehub = createClient()
 *
 * const firstQuery = await basehub.query({
 *   __typename: true,
 * });
 *
 * console.log(firstQuery.__typename) // => 'Query'
 *
 */
export const createClient = basehub;

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
  Query,
  fields
>;
export const generateQueryOp: (
  fields: QueryGenqlSelection & { __name?: string }
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("query", fields as any);
};

export type MutationResult<fields extends MutationGenqlSelection> =
  FieldsSelection<Mutation, fields>;
export const generateMutationOp: (
  fields: MutationGenqlSelection & { __name?: string }
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("mutation", fields as any);
};

// these can be overriden by type generation

export type Scalars = any;
export type Query = any;
export type Mutation = any;
export type QueryGenqlSelection = any;
export type MutationGenqlSelection = any;
