/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from "react";
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
} from "../index";

export { PumpQuery };

// we use react.lazy to code split client-pump, which is the heavier part of next-pump, and only required when in draft
const LazyClientPump = lazy(() =>
  import("./client-pump").then((mod) => ({ default: mod.ClientPump }))
);

export type Children<Query extends PumpQuery> =
  | React.ReactNode
  | ((data: QueryResult<Query>) => Promise<React.ReactNode>);

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
  const data = (await basehub(basehubProps).query(
    query
  )) satisfies QueryResult<Query>;

  const resolvedChildren =
    typeof children === "function" ? await children(data) : children;

  if (draft) {
    // should probably get the pump token here...
    const rawQueryOp = generateQueryOp(query);
    return (
      <Suspense
        // as a fallback, we return the data provider with the initial data we got here in the server
        // this _should_ prevent any layout shift
        fallback={<DataProvider data={data}>{resolvedChildren}</DataProvider>}
      >
        <LazyClientPump
          query={query}
          rawQueryOp={rawQueryOp}
          token={basehubProps.token ?? ""}
          // react.lazy strips generic parameter :(
          initialData={data as any}
          initialResolvedChildren={resolvedChildren}
        >
          {/* react.lazy strips generic parameter :( */}
          {/* We pass the raw `children` param as it might be a server action that will be re-executed from the client as data comes in */}
          {children as any}
        </LazyClientPump>
      </Suspense>
    );
  }

  return <DataProvider data={data}>{resolvedChildren}</DataProvider>;
};
