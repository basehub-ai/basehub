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

export type Children<Query extends PumpQuery> =
  | React.ReactNode
  | ((data: QueryResult<Query>) => React.ReactNode | Promise<React.ReactNode>);

export type PumpProps<Query extends PumpQuery> = {
  children: Children<Query>;
  query: Query; // genql query
} & Parameters<typeof basehub>[0];

export const Pump = async <Query extends PumpQuery>({
  draft,
  children,
  query,
  ...basehubProps
}: PumpProps<Query>) => {
  const rawQueryOp = generateQueryOp(query);
  const cacheKey = JSON.stringify(rawQueryOp);

  let data: QueryResult<Query> | undefined = undefined;

  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey)!;
    if (Date.now() - cached.start < DEDUPE_TIME_MS) {
      data = (await cached.data) as any;
    }
  }

  if (!data) {
    const dataPromise = basehub(basehubProps).query(query) satisfies Promise<
      QueryResult<Query>
    >;
    // quickly set cache to avoid dedup further requests
    cache.set(cacheKey, {
      start: Date.now(),
      data: dataPromise,
    });
    data = await dataPromise;
  }

  const { headers } = getStuffFromEnv(basehubProps);
  const token = headers["x-basehub-token"];

  const resolvedChildren =
    typeof children === "function" ? await children(data) : children;

  if (draft) {
    // should probably get the pump token here...
    const rawQueryOp = generateQueryOp(query);

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

    return (
      <React.Suspense
        // as a fallback, we return the data provider with the initial data we got here in the server
        // this _should_ prevent any layout shift
        fallback={<DataProvider data={data}>{resolvedChildren}</DataProvider>}
      >
        <LazyClientPump
          query={query}
          rawQueryOp={rawQueryOp}
          token={token}
          // react.lazy strips generic parameter :(
          initialData={data as any}
          initialResolvedChildren={resolvedChildren}
        >
          {/* react.lazy strips generic parameter :( */}
          {/* We pass the raw `children` param as it might be a server action that will be re-executed from the client as data comes in */}
          {children as any}
        </LazyClientPump>
      </React.Suspense>
    );
  }

  return <DataProvider data={data}>{resolvedChildren}</DataProvider>;
};

/**
 * Create a Pump with a bound query. Accepts either a query object or a function that returns a query object.
 * Useful for reusing the same query across multiple components.
 */
export const createPump =
  <Query extends PumpQuery, Params = any>(
    query: Query | ((params: Params) => Query)
  ) =>
  (
    props: Omit<PumpProps<Query>, "query"> &
      (Params extends void ? unknown : { params?: Params })
  ) => {
    // Dynamically call query function based on whether query is a function and params are provided
    const queryResult =
      typeof query === "function" ? query((props as any).params) : query;

    // @ts-expect-error rsc
    return <Pump {...props} query={queryResult} />;
  };
