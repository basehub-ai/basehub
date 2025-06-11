import { type BatchOptions, createFetcher } from "./_fetcher.js";
import type { ExecutionResult } from "./_types.js";
import {
  generateGraphqlOperation,
  type GraphqlOperation,
} from "./_generate-graphql-operation.js";
import { replaceSystemAliases } from "./_aliasing.js";
import { FieldsSelection } from "./_type-selection.js";

export type Headers =
  | HeadersInit
  | (() => HeadersInit)
  | (() => Promise<HeadersInit>);

export type BaseFetcher = (
  operation: GraphqlOperation | GraphqlOperation[],
  extraFetchOptions?: Partial<RequestInit>
) => Promise<ExecutionResult | ExecutionResult[]>;

export type ClientOptions = Omit<RequestInit, "body" | "headers"> & {
  url?: string;
  batch?: BatchOptions | boolean;
  fetcher?: BaseFetcher;
  fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
  headers?: Headers;
  getExtraFetchOptions?: (
    op: "query" | "mutation",
    body: GraphqlOperation,
    originalRequest: any
  ) => Partial<RequestInit> | Promise<Partial<RequestInit>>;
};

export type GetClient<
  Q extends Record<string, any> = Record<string, any>,
  QSel extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
  MSel extends Record<string, any> = Record<string, any>,
> = {
  query<R extends QSel>(
    request: R & { __name?: string }
  ): Promise<FieldsSelection<Q, R>>;
  mutation<R extends MSel>(
    request: R & { __name?: string }
  ): Promise<FieldsSelection<M, R>>;
};

export const createClient = <
  Q extends Record<string, any> = Record<string, any>,
  QSel extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
  MSel extends Record<string, any> = Record<string, any>,
>({
  getExtraFetchOptions,
  ...options
}: ClientOptions): GetClient<Q, QSel, M, MSel> => {
  return {
    query: async <R>(request: R): Promise<FieldsSelection<Q, R>> => {
      const body = generateGraphqlOperation("query", request as any);
      const extraFetchOptions = await getExtraFetchOptions?.(
        "query",
        body,
        request
      );
      const fetcher = createFetcher({ ...options, ...extraFetchOptions });
      const result = await fetcher(body as GraphqlOperation, extraFetchOptions);
      return replaceSystemAliases(result);
    },
    mutation: async <R>(request: R): Promise<FieldsSelection<M, R>> => {
      const body = generateGraphqlOperation("mutation", request as any);
      const extraFetchOptions = await getExtraFetchOptions?.(
        "mutation",
        body,
        request
      );
      const fetcher = createFetcher({ ...options, ...extraFetchOptions });
      const result = await fetcher(body as GraphqlOperation, extraFetchOptions);
      return replaceSystemAliases(result);
    },
  };
};

createClient.replaceSystemAliases = replaceSystemAliases;
