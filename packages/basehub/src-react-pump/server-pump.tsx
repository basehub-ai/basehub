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

const DEDUPE_TIME_MS = 500;

export type PumpProps<Queries extends Array<PumpQuery>> = {
  children: (
    data: QueryResults<Queries>
  ) => React.ReactNode | Promise<React.ReactNode>;
  queries: [...Queries]; // Tuple type for better type inference
} & Parameters<typeof basehub>[0];

// Utility type to infer result types from an array of queries
export type QueryResults<Queries extends Array<PumpQuery>> = {
  [K in keyof Queries]: QueryResult<Queries[K]>;
};

export const Pump = async <Queries extends Array<PumpQuery>>({
  children,
  queries,
  ...basehubProps
}: PumpProps<Queries>) => {
  let pumpToken: string | null = null;
  let spaceID: string | null = null;
  let pusherData: ResponseCache["pusherData"] | null = null;
  // passed to the client to toast
  const errors: Array<ResponseCache["errors"]> = [];

  const { headers, url } = getStuffFromEnv(basehubProps);
  const token = headers["x-basehub-token"];
  const pumpEndpoint = url.origin.replace("api.", "") + "/api/pump"; // compatible with https://api.basehub.com and https://api.bshb.dev

  const results: Array<{
    data: QueryResults<Queries>[number];
    rawQueryOp: { query: string; variables?: any };
  }> = await Promise.all(
    queries.map(async (singleQuery) => {
      const rawQueryOp = generateQueryOp(singleQuery);
      const cacheKey = JSON.stringify(rawQueryOp);

      let data: QueryResults<Queries>[number] | undefined = undefined;

      if (cache.has(cacheKey)) {
        const cached = cache.get(cacheKey)!;
        if (Date.now() - cached.start < DEDUPE_TIME_MS) {
          data = (await cached.data) as any;
        }
      }

      if (!data) {
        const dataPromise = basehubProps.draft
          ? fetch(pumpEndpoint, {
              cache: "no-store",
              method: "POST",
              headers: {
                "content-type": "application/json",
                "x-basehub-token": token,
              },
              body: JSON.stringify(rawQueryOp),
            }).then(async (response) => {
              const {
                data = null,
                newPumpToken,
                errors: _errors = null,
                spaceID: _spaceID,
                pusherData: _pusherData,
              } = await response.json();
              pumpToken = newPumpToken;
              pusherData = _pusherData;
              spaceID = _spaceID;
              errors.push(_errors);

              return data;
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

  const resolvedChildren =
    typeof children === "function"
      ? await children(results.map((r) => r.data)).catch((e: unknown) => {
          if (basehubProps.draft) {
            // when in draft, we ignore the error server side, as we prefer to pass it down to the client via the toast
            console.error("Error in Pump children function", e);
          } else throw e;
        })
      : children;

  if (basehubProps.draft) {
    if (!pumpToken || !spaceID || !pusherData) {
      throw new Error("Pump did not return the necessary data");
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
      <React.Suspense
        // as a fallback, we return the data provider with the initial data we got here in the server
        // this _should_ prevent any layout shift
        fallback={<>{resolvedChildren}</>}
      >
        <LazyClientPump
          rawQueries={results.map((r) => r.rawQueryOp)}
          initialState={{
            data: results.map((r) => r.data ?? null),
            errors,
            pusherData: pusherData,
            spaceID: spaceID,
          }}
          pumpEndpoint={pumpEndpoint}
          pumpToken={pumpToken}
          initialResolvedChildren={resolvedChildren}
        >
          {/* We pass the raw `children` param as it might be a server action that will be re-executed from the client as data comes in */}
          {children}
        </LazyClientPump>
      </React.Suspense>
    );
  }

  return <>{resolvedChildren}</>;
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

    // @ts-expect-error rsc
    return <Pump {...props} queries={queryResult} />;
  };
};
