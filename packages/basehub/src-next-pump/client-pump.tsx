"use client";
import { type ReactNode, useRef, useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { Children } from "./server-pump";
import { DataProvider } from "./data-provider";

import {
  // @ts-ignore
  type QueryGenqlSelection as PumpQuery,
  // @ts-ignore
  type QueryResult,
} from "./index";
import type Pusher from "pusher-js/types/src/core/pusher";

const appOrigin =
  "https://basehub-git-jb-pump-explorations-new-draft-api-basehub.vercel.app";

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
  initialResolvedChildren?: ReactNode;
}) => {
  const optimisticPumpQuery = useSWRImmutable<string | null>(
    ["pump-login", token] as const,
    ([, readToken]) => {
      // First check if we already have this in localStorage. If we do and it hasn't expired, we can skip the login step.
      const cached = localStorage.getItem(`bshb-pump-token-${readToken}`);
      if (cached) {
        return cached;
      }
      return null;
    }
  );

  const pumpTokenRef = useRef<string | null | undefined>(null);
  pumpTokenRef.current = optimisticPumpQuery.data;

  const apiQuery = useSWRImmutable(
    pumpTokenRef.current === undefined
      ? null
      : (["bshb-pump-data", rawQueryOp, token, pumpTokenRef.current] as const),
    async ([, rawQueryOp, readToken, pumpToken]) => {
      const response = await fetch(`${appOrigin}/api/pump`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-basehub-token": readToken,
          ...(pumpToken ? { "x-basehub-pump-token": pumpToken } : {}),
        },
        body: JSON.stringify(rawQueryOp),
      });

      const { data, newPumpToken, spaceID } = await response.json();
      if (newPumpToken) {
        localStorage.setItem(`bshb-pump-token-${readToken}`, newPumpToken);
        pumpTokenRef.current = newPumpToken;
      }
      return { data, spaceID };
    },
    { onError: (err) => console.error(err), keepPreviousData: true }
  );

  const spaceID = apiQuery.data?.spaceID;
  const apiQueryDataRef = useRef(apiQuery.data);
  apiQueryDataRef.current = apiQuery.data;
  const apiQueryMutateFnRef = useRef(apiQuery.mutate);
  apiQueryMutateFnRef.current = apiQuery.mutate;

  const [pusher, setPusher] = useState<Pusher | null>(null);

  useEffect(() => {
    import("pusher-js")
      .then((mod) => {
        setPusher(
          new mod.default("91d723201cad1ff7449b", {
            cluster: "mt1",
          })
        );
      })
      .catch((err) => {
        console.log("error importing pusher");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!spaceID) return;
    if (!pusher) return;

    const channel = pusher.subscribe(spaceID.replace(/\//g, ""));
    channel.bind("poke", () => {
      apiQueryMutateFnRef.current(apiQueryDataRef.current, {
        revalidate: true,
      });
    });

    return () => {
      channel.unsubscribe();
    };
  }, [spaceID, pusher]);

  const dataWithFallback = apiQuery.isLoading
    ? apiQuery.data?.data ?? initialData
    : apiQuery.data?.data;

  const childrenQuery = useSWRImmutable(
    ["bshb-pump-children", dataWithFallback, children],
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
