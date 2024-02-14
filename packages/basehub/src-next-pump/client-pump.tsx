"use client";
import * as React from "react";
import useSWRImmutable from "swr/immutable";
import Pusher from "pusher-js";
import { Replicache } from "replicache";
import { createYoga } from "graphql-yoga";
import { Children } from "./server-pump";
import { DataProvider } from "./data-provider";

import {
  type QueryGenqlSelection as PumpQuery,
  type QueryResult,
} from "../index";
import { generateSchema, blockBaseOps } from "@basehub/api-pump";

type Block = any;

export function pusherReceiver(spaceID: string, onPoke: () => Promise<void>) {
  const pusher = new Pusher("91d723201cad1ff7449b", {
    cluster: "mt1",
  });

  const channel = pusher.subscribe(spaceID.replace(/\//g, ""));
  channel.bind("poke", onPoke);
  return channel;
}

export const ClientPump = <Query extends PumpQuery>({
  children,
  rawQueryOp,
  token,
  initialData,
  initialResolvedChildren,
}: {
  children: Children<Query>;
  query: Query;
  rawQueryOp: { query: string; variables?: any };
  token: string;
  initialData?: QueryResult<Query>;
  initialResolvedChildren?: React.ReactNode;
}) => {
  /**
   * We'll login to basehub with the token.
   * We'll get a JWT back, and the stuff Replicache needs to boot up.
   */
  const { data: pumpLoginData } = useSWRImmutable<{
    token: string;
    spaceId: string;
    replicacheLicenseKey: string;
    replicacheSchemaVersion: string;
  }>(
    ["pump-login", token] as const,
    async ([, readToken]) => {
      // First check if we already have this in localStorage. If we do and it hasn't expired, we can skip the login step.
      const cached = localStorage.getItem(`bshb-pump-${readToken}`);
      if (cached) {
        const result = JSON.parse(cached) as null | {
          token: string;
          spaceId: string;
          replicacheLicenseKey: string;
          replicacheSchemaVersion: string;
          expires: number;
        };
        if (result && result.expires > Date.now()) {
          return {
            token: result.token,
            spaceId: result.spaceId,
            replicacheLicenseKey: result.replicacheLicenseKey,
            replicacheSchemaVersion: result.replicacheSchemaVersion,
          };
        }
      }

      const res = await fetch(`/api/replicache/pump-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${readToken}`,
        },
        cache: "no-store",
      });

      if (res.status !== 200) throw new Error("could not login to basehub");

      const { token, spaceId, replicacheLicenseKey, replicacheSchemaVersion } =
        (await res.json()) as {
          token: string;
          spaceId: string;
          replicacheLicenseKey: string;
          replicacheSchemaVersion: string;
        };

      // Cache the token for 24 hours in localStorage.
      localStorage.setItem(
        `bshb-pump-${readToken}`,
        JSON.stringify({
          token,
          spaceId,
          replicacheLicenseKey,
          replicacheSchemaVersion,
          expires: Date.now() + 1000 * 60 * 60 * 24,
        })
      );

      return { token, spaceId, replicacheLicenseKey, replicacheSchemaVersion };
    },
    {
      refreshInterval: 0,
      refreshWhenOffline: false,
      revalidateOnFocus: false,
    }
  );

  const { data: pumpData } = useSWRImmutable(
    pumpLoginData ? ["pump", pumpLoginData.token] : null,
    async () => {
      if (!pumpLoginData) return null;
      const replicache = new Replicache({
        licenseKey: pumpLoginData.replicacheLicenseKey,
        mutators: {},
        pullURL: `/api/replicache/pull?pump-token=${pumpLoginData.token}&spaceID=${pumpLoginData.spaceId}`,
        name: pumpLoginData.spaceId,
        schemaVersion: pumpLoginData.replicacheSchemaVersion,
      });

      const pokeChannel = pusherReceiver(pumpLoginData.spaceId, async () => {
        replicache.pull();
      });

      return { replicache, pokeChannel };
    }
  );

  const [blocks, setBlocks] = React.useState<null | Array<Block>>(null);

  React.useEffect(() => {
    if (!pumpData?.replicache) return;
    const replicache = pumpData.replicache;
    const unsub = replicache.subscribe((tx) => blockBaseOps.list(tx), {
      onData: (data: Block[]) => {
        setBlocks(data);
      },
    });

    return () => {
      unsub();
    };
  }, [pumpData?.replicache]);

  const schemaQuery = useSWRImmutable(
    blocks && pumpLoginData?.spaceId
      ? (["bshb-pump-schema", blocks, pumpLoginData.spaceId] as const)
      : null,
    async ([, blocks, spaceID]) => {
      const blocksByHashMap = new Map<string, Block>();

      for (const block of blocks) {
        blocksByHashMap.set(block.hash, block);
      }

      return generateSchema({
        blocks,
        repoSpaceID: spaceID,
        type: "prefetched-blocks",
        getRepo: async () => {
          return {};
        },
        draft: false,
        blockCacheMethods: {
          getter: (hash) => blocksByHashMap.get(hash),
          fallbackGetter: ({ hash }) => blocksByHashMap.get(hash),
          setter: async () => undefined,
        },
      });
    },
    { keepPreviousData: true }
  );

  const queryDataQuery = useSWRImmutable(
    schemaQuery.data
      ? (["bshb-pump-data", rawQueryOp, schemaQuery.data] as const)
      : null,
    async ([, rawQueryOp, schema]) => {
      // Create a Yoga instance with a GraphQL schema.
      const yoga = createYoga({ schema });

      // Execute a GraphQL query
      const request = new Request("/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rawQueryOp),
      });

      const result = await yoga(request);
      const { data } = await result.json();
      return data;
    },
    { onError: (err) => console.error(err), keepPreviousData: true }
  );

  const dataWithFallback = queryDataQuery.isLoading
    ? queryDataQuery.data ?? initialData
    : queryDataQuery.data;

  const childrenQuery = useSWRImmutable(
    ["bshb-pump-children", dataWithFallback],
    ([, data]) => {
      if (typeof children === "function") {
        return children(data);
      } else {
        return children;
      }
    },
    { keepPreviousData: true }
  );

  const resolvedChildrenWithFallback = childrenQuery.isLoading
    ? childrenQuery.data ?? initialResolvedChildren
    : childrenQuery.data;

  return (
    <DataProvider data={dataWithFallback ?? null}>
      {resolvedChildrenWithFallback}
    </DataProvider>
  );
};
