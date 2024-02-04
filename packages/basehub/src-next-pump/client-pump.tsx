"use client";
import * as React from "react";
import useSWRImmutable from "swr/immutable";
import Pusher from "pusher-js";
import { Block, blockBaseOps } from "@basehub/data/replicache";
import { Replicache } from "replicache";
import { graphqlRequest } from "./client-graphql";
import { Children } from "./server-pump";
import { DataProvider } from "./data-provider";

export function pusherReceiver(spaceID: string, onPoke: () => Promise<void>) {
  const pusher = new Pusher("91d723201cad1ff7449b", {
    cluster: "mt1",
  });

  const channel = pusher.subscribe(spaceID.replaceAll("/", ""));
  channel.bind("poke", onPoke);
  return channel;
}

export const ClientPump = ({
  children,
  query,
  token,
  initialData,
  initialResolvedChildren,
}: {
  children: Children;
  query: string;
  token: string;
  initialData?: any;
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
      onData: (data) => {
        setBlocks(data);
      },
    });

    return () => {
      unsub();
    };
  }, [pumpData?.replicache]);

  const queryDataQuery = useSWRImmutable(
    blocks ? (["bshb-pump-data", query, blocks] as const) : null,
    async ([, query, blocks]) => {
      const res = await graphqlRequest(query, blocks);
      const { data } = await res.json();
      return data;
    },
    { onError: (err) => console.error(err), keepPreviousData: true }
  );

  const dataWithFallback = queryDataQuery.isLoading
    ? queryDataQuery.data ?? initialData
    : queryDataQuery.data;

  const childrenQuery = useSWRImmutable(
    ["bshb-pump-children", query, dataWithFallback],
    ([, , data]) => {
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
