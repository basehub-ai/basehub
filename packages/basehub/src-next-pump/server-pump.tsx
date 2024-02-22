import * as React from "react";
import { DataProvider } from "./data-provider";
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
        const dataPromise = basehub(basehubProps).query(singleQuery);
        cache.set(cacheKey, {
          start: Date.now(),
          data: dataPromise,
        });
        data = await dataPromise;
      }

      return { data, rawQueryOp };
    })
  );

  const { headers, url } = getStuffFromEnv(basehubProps);
  const token = headers["x-basehub-token"];

  const resolvedChildren =
    typeof children === "function"
      ? await children(results.map((r) => r.data) as any)
      : children;

  if (basehubProps.draft) {
    // should probably get the pump token here?

    // wouldn't it be great if this worked?
    // // for client components, the `children` function needs to be passed as a Server Action
    // // we'll create that here.
    // const childrenOrServerAction =
    //   typeof children === "function"
    //     ? async function (data: QueryResult<Query>) {
    //         "use server";
    //         console.log("acá?");
    //         return await children(data);
    //       }
    //     : children;

    const appOrigin = url.origin.replace("api.", ""); // compatible with https://api.basehub.com and https://api.bshb.dev

    return (
      <React.Suspense
        // as a fallback, we return the data provider with the initial data we got here in the server
        // this _should_ prevent any layout shift
        fallback={
          <DataProvider data={results.map((r) => r.data)}>
            {resolvedChildren}
          </DataProvider>
        }
      >
        <LazyClientPump
          rawQueries={results.map((r) => r.rawQueryOp)}
          token={token}
          // react.lazy strips generic parameter :(
          initialData={results.map((r) => r.data)}
          initialResolvedChildren={resolvedChildren}
          appOrigin={appOrigin}
        >
          {/* react.lazy strips generic parameter :( */}
          {/* We pass the raw `children` param as it might be a server action that will be re-executed from the client as data comes in */}
          {children as any}
        </LazyClientPump>
      </React.Suspense>
    );
  }

  return (
    <DataProvider data={results.map((r) => r.data)}>
      {resolvedChildren}
    </DataProvider>
  );
};

/**
 * Create a Pump with a bound query. Accepts either a query object or a function that returns a query object.
 * Useful for reusing the same query across multiple components.
 */
export const createPump = <
  Queries extends Array<PumpQuery>,
  Params extends Record<string, unknown> | void,
>(
  queries: [...Queries] | ((params: Params) => [...Queries])
) => {
  return (
    props: Omit<PumpProps<Queries>, "queries"> &
      (Params extends void ? unknown : { params: Params })
  ) => {
    // Dynamically call query function based on whether query is a function and params are provided
    const queryResult =
      typeof queries === "function" ? queries((props as any).params) : queries;

    // @ts-expect-error rsc
    return <Pump {...props} queries={queryResult} />;
  };
};
