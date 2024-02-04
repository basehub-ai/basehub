/* eslint-disable import/no-unresolved */
// import { ClientPump } from "./client-pump";
import { DataProvider } from "./data-provider";
import {
  basehub,
  type QueryGenqlSelection as PumpQuery,
  type QueryResult,
} from "../index";

export { PumpQuery };

export type Children<Query extends PumpQuery> =
  | React.ReactNode
  | ((data: QueryResult<Query>) => Promise<React.ReactNode>);

export type PumpProps<Query extends PumpQuery> = {
  children: Children<Query>;
  query: Query; // genql query
} & Parameters<typeof basehub>[0];

export const Pump = async <Query extends PumpQuery>({
  children,
  query,
  ...basehubProps
}: PumpProps<Query>) => {
  const data = await basehub(basehubProps).query(query);

  const resolvedChildren =
    typeof children === "function" ? await children(data) : children;

  // if (draft) {
  //   return (
  //     <ClientPump
  //       query={query}
  //       token={token}
  //       initialData={data}
  //       initialResolvedChildren={resolvedChildren}
  //     >
  //       {children}
  //     </ClientPump>
  //   );
  // }

  return <DataProvider data={data}>{resolvedChildren}</DataProvider>;
};
