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

// these will be overridden by the generated types (if any)
export interface Scalars {}
export interface Query {}
export interface Mutation {}
export interface QueryGenqlSelection {}
export interface MutationGenqlSelection {}
export interface FragmentsMap {}

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
export const createClient = <
  Q extends Record<string, any> = Record<string, any>,
  QSel extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
  MSel extends Record<string, any> = Record<string, any>,
>(
  options?: Options
) => {
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

  return createClientOriginal<Q, QSel, M, MSel>(options);
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
export const basehub = (...params: Parameters<typeof createClient>) =>
  createClient<Query, QueryGenqlSelection, Mutation, MutationGenqlSelection>(
    ...params
  );

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

// type helper

export function fragmentOn<
  TypeName extends keyof FragmentsMap,
  Selection extends FragmentsMap[TypeName]["selection"],
>(name: TypeName, fields: Selection): Selection & { __fragmentOn: TypeName } {
  // @ts-ignore
  return { __fragmentOn: name, ...fields } as const;
}

// credits: https://stackoverflow.com/a/54487392
type OmitDistributive<T, K extends PropertyKey> = T extends any
  ? T extends object
    ? Id<OmitRecursively<T, K>>
    : T
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
type Id<T> = {} & { [P in keyof T]: T[P] }; // Cosmetic use only makes the tooltips expad the type can be removed
type OmitRecursively<T, K extends PropertyKey> = Omit<
  { [P in keyof T]: OmitDistributive<T[P], K> },
  K
>;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace fragmentOn {
  export type infer<T> = T extends {
    __fragmentOn: infer U extends keyof FragmentsMap;
  }
    ? OmitRecursively<
        FieldsSelection<FragmentsMap[U]["root"], Omit<T, "__fragmentOn">>,
        "__fragmentOn"
      >
    : never;
}

// This is a BaseHub-specific thing:

type RecursiveCollection<T, Key extends keyof T> = T & {
  [key in Key]: { items: RecursiveCollection<T, Key> };
};

export function fragmentOnRecursiveCollection<
  TypeName extends keyof FragmentsMap,
  Selection extends FragmentsMap[TypeName]["selection"],
  RecursiveKey extends keyof FragmentsMap[TypeName]["selection"],
>(
  name: TypeName,
  fields: Selection,
  options: {
    recursiveKey: RecursiveKey;
    levels: number;
    getLevelArgs?: (level: number) => unknown;
  }
) {
  const current = {
    // @ts-ignore
    ...fields,
  } as RecursiveCollection<
    { readonly __fragmentOn: TypeName } & Selection,
    RecursiveKey
  >;
  if (options.levels > 0) {
    current[options.recursiveKey] = {
      ...(options.getLevelArgs
        ? { __args: options.getLevelArgs(options.levels) }
        : {}),
      items: fragmentOnRecursiveCollection(name, fields, {
        ...options,
        levels: options.levels - 1,
      }),
    } as any;
  }
  return current;
}
