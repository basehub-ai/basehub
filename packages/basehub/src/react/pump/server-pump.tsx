import * as React from "react";
import type { ResponseCache } from "./types";
import {
  // @ts-ignore
  basehub,
  // @ts-ignore
  type QueryGenqlSelection as PumpQuery,
  // @ts-ignore
  type QueryResult,
  // @ts-ignore
  generateQueryOp,
  // @ts-ignore
  getStuffFromEnv,
  // @ts-ignore
  resolvedRef,
} from "../index";

export { PumpQuery };

// we use react.lazy to code split client-pump, which is the heavier part of next-pump, and only required when in draft
const LazyClientPump = React.lazy(() =>
  import("./client-pump").then((mod) => ({ default: mod.ClientPump }))
);

const cache = new Map<
  string, // a query string (with the variables included)
  {
    start: number; // the time the query was started
    data: Promise<QueryResult<any>>; // the promise that resolves to the data
  }
>();

let pumpToken: string | null = null;
let spaceID: string | null = null;
let pusherData: ResponseCache["pusherData"] | null = null;

const DEDUPE_TIME_MS = 500;

export type PumpProps<Queries extends Array<PumpQuery>> = {
  children: (
    data: QueryResults<Queries>
  ) => React.ReactNode | Promise<React.ReactNode>;
  queries: [...Queries]; // Tuple type for better type inference
  disableNextjsAutoDraftMode?: boolean;
} & Parameters<typeof basehub>[0];

// Utility type to infer result types from an array of queries
export type QueryResults<Queries extends Array<PumpQuery>> = {
  [K in keyof Queries]: QueryResult<Queries[K]>;
};

export const Pump = async <Queries extends Array<PumpQuery>>({
  children,
  queries,
  disableNextjsAutoDraftMode,
  ...basehubProps
}: PumpProps<Queries>) => {
  // passed to the client to toast
  const errors: Array<ResponseCache["errors"]> = [];
  const responseHashes: Array<ResponseCache["responseHash"]> = [];

  let isNextjsDraftMode = false;
  if (!disableNextjsAutoDraftMode) {
    try {
      const { draftMode } = await import("next/headers");
      isNextjsDraftMode = (await draftMode()).isEnabled;
    } catch (error) {
      // noop, not using nextjs
    }
  }

  if (isNextjsDraftMode && basehubProps.draft === undefined) {
    basehubProps.draft = true;
  }

  const { headers, url, draft } = getStuffFromEnv(basehubProps);
  const token = headers["x-basehub-token"];
  const apiVersion = headers["x-basehub-api-version"];
  const pumpEndpoint = getBaseHubAppApiEndpoint(url, "/api/pump");

  const noQueries = queries.length === 0;

  const queriesWithFallback =
    draft && noQueries ? [{ _sys: { id: true } }] : queries;

  const results: Array<{
    data: QueryResults<Queries>[number] | undefined;
    rawQueryOp: { query: string; variables?: any };
  }> = await Promise.all(
    // @ts-ignore
    queriesWithFallback.map(async (singleQuery, index) => {
      const rawQueryOp = generateQueryOp(singleQuery);
      const cacheKey =
        JSON.stringify({ ...rawQueryOp, ...headers }) +
        (draft ? "_draft" : "_prod");

      let data: QueryResults<Queries>[number] | undefined = undefined;

      if (cache.has(cacheKey)) {
        const cached = cache.get(cacheKey)!;
        if (Date.now() - cached.start < DEDUPE_TIME_MS) {
          data = (await cached.data) as any;
        }
      }

      if (!data) {
        const dataPromise = draft
          ? fetch(pumpEndpoint, {
              cache: "no-store",
              method: "POST",
              headers: {
                ...headers,
                "content-type": "application/json",
                "x-basehub-token": token,
                "x-basehub-api-version": apiVersion,
              },
              body: JSON.stringify(rawQueryOp),
            }).then(async (response) => {
              const {
                data = null,
                newPumpToken,
                errors: _errors = null,
                spaceID: _spaceID,
                pusherData: _pusherData,
                responseHash: _responseHash,
              } = await response.json();
              pumpToken = newPumpToken;
              pusherData = _pusherData;
              spaceID = _spaceID;
              errors.push(_errors);
              responseHashes[index] = _responseHash;

              return basehub.replaceSystemAliases(data);
            })
          : basehub(basehubProps).query(singleQuery);
        cache.set(cacheKey, {
          start: Date.now(),
          data: dataPromise,
        });
        data = await dataPromise;
      }

      return { data, rawQueryOp };
    })
  );

  let resolvedChildren;
  //@ts-ignore
  const childrenPromise = children(results.map((r) => r.data));
  if (childrenPromise instanceof Promise) {
    resolvedChildren = await childrenPromise?.catch((e: unknown) => {
      if (draft) {
        // when in draft, we ignore the error server side, as we prefer to pass it down to the client via the toast
        console.error("Error in Pump children function", e);
        return null;
      } else throw e;
    });
  } else {
    resolvedChildren = childrenPromise;
  }

  if (draft) {
    if (!pumpToken || !spaceID || !pusherData) {
      console.log("Results (length):", results?.length);
      console.log("Errors:", JSON.stringify(errors, null, 2));
      console.log("Pump Endpoint:", pumpEndpoint);
      console.log("Pump Token:", pumpToken);
      console.log("Space ID:", spaceID);
      console.log("Pusher Data:", pusherData);
      console.log("Response Hashes:", JSON.stringify(responseHashes, null, 2));
      throw new Error(
        "Pump did not return the necessary data. Look at the logs to see what's missing."
      );
    }

    // wouldn't it be great if this worked?
    // // for client components, the `children` function needs to be passed as a Server Action
    // // we'll create that here.
    // const childrenOrServerAction =
    //   typeof children === "function"
    //     ? async function (data: QueryResult<Query>) {
    //         "use server";
    //         return await children(data);
    //       }
    //     : children;

    return (
      <LazyClientPump
        rawQueries={results.map((r) => r.rawQueryOp)}
        initialState={{
          // @ts-ignore
          data: !noQueries ? results.map((r) => r.data ?? null) : [],
          errors,
          responseHashes,
          pusherData: pusherData,
          spaceID: spaceID,
        }}
        pumpEndpoint={pumpEndpoint}
        pumpToken={pumpToken ?? undefined}
        initialResolvedChildren={resolvedChildren}
        apiVersion={apiVersion}
        resolvedRef={resolvedRef}
      >
        {/* We pass the raw `children` param as it might be a server action that will be re-executed from the client as data comes in */}
        {/* @ts-ignore */}
        {children}
      </LazyClientPump>
    );
  }

  return resolvedChildren;
};

/**
 * Create a Pump with a bound query. Accepts either a query object or a function that returns a query object.
 * Useful for reusing the same query across multiple components.
 */
export const createPump = <
  Query extends PumpQuery[],
  Params extends Record<string, unknown> | void,
>(
  queries: Query | ((params: Params) => Query)
) => {
  return (
    props: Omit<PumpProps<Query>, "queries"> &
      (Params extends void ? unknown : { params: Params })
  ) => {
    // Dynamically call query function based on whether query is a function and params are provided
    const queryResult =
      typeof queries === "function" ? queries((props as any).params) : queries;

    return <Pump {...props} queries={queryResult} />;
  };
};

function getBaseHubAppApiEndpoint(url: URL, pathname: string) {
  let origin: string;
  switch (true) {
    case url.origin.includes("api.basehub.com"):
      origin = "https://basehub.com" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("localhost:3001"):
      origin = "http://localhost:3000" + pathname + url.search + url.hash;
      break;
    default:
      origin = url.origin + pathname + url.search + url.hash;
  }

  return origin;
}
