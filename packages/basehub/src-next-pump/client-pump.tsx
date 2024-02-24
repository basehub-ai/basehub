"use client";
import * as React from "react";
import { PumpProps, QueryResults } from "./server-pump";
import { DataProvider } from "./data-provider";

import {
  // @ts-ignore
  type QueryGenqlSelection as PumpQuery,
} from "./index";
import type Pusher from "pusher-js/types/src/core/pusher";

let pusherMounted = false;
const subscribers = new Set<() => void>(); // we'll call these when pusher tells us to poke

type ResponseCache = {
  data: QueryResults<any>[number];
  spaceID: string;
  pusherData: {
    channel_key: string;
    app_key: string;
    cluster: string;
  };
  newPumpToken: string;
};

const clientCache = new Map<
  string, // a query string (with the variables included)
  {
    start: number; // the time the query was started
    response: Promise<ResponseCache>; // the promise that resolves to the data
  }
>();

const DEDUPE_TIME_MS = 500;

const pumpTokenLocalStorageManager = {
  get: (readToken: string) => {
    return localStorage.getItem(`bshb-pump-token-${readToken}`);
  },
  set: (readToken: string, pumpToken: string) => {
    localStorage.setItem(`bshb-pump-token-${readToken}`, pumpToken);
  },
};

export const ClientPump = <Queries extends PumpQuery[]>({
  children,
  rawQueries,
  token,
  appOrigin,
  initialData,
  initialResolvedChildren,
}: {
  children: PumpProps<Queries>["children"];
  rawQueries: Array<{ query: string; variables?: any }>;
  token: string;
  appOrigin: string;
  initialData?: QueryResults<Queries>;
  initialResolvedChildren?: React.ReactNode;
}) => {
  const [pumpToken, setPumpToken] = React.useState<string | null>();

  /**
   * Get cached pump token from localStorage.
   */
  React.useEffect(() => {
    if (!token) return;
    // First check if we already have this in localStorage. If we do and it hasn't expired, we can skip the login step.
    const cached = pumpTokenLocalStorageManager.get(token);
    setPumpToken(cached);
  }, [token]);

  const [result, setResult] = React.useState<{
    data: QueryResults<Queries>;
    spaceID: string;
    pusherData: {
      channel_key: string;
      app_key: string;
      cluster: string;
    };
  } | null>();

  type Result = NonNullable<typeof result>;

  /**
   * Query the Draft API.
   */
  const refetch = React.useCallback(async () => {
    let newPumpToken: string | undefined;
    let pusherData: Result["pusherData"] | undefined = undefined;
    let spaceID: Result["spaceID"] | undefined = undefined;
    const responses = await Promise.all(
      rawQueries.map(async (rawQueryOp) => {
        const cacheKey = JSON.stringify(rawQueryOp);

        if (clientCache.has(cacheKey)) {
          const cached = clientCache.get(cacheKey)!;
          if (Date.now() - cached.start < DEDUPE_TIME_MS) {
            const response = await cached.response;
            if (response.newPumpToken) {
              newPumpToken = response.newPumpToken;
            }
            pusherData = response.pusherData;
            spaceID = response.spaceID;
            return response;
          }
        }

        const responsePromise = fetch(`${appOrigin}/api/pump`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-basehub-token": token,
            ...(pumpToken ? { "x-basehub-pump-token": pumpToken } : {}),
          },
          body: JSON.stringify(rawQueryOp),
        }).then(async (response) => {
          const { data, newPumpToken, spaceID, pusherData } =
            await response.json();

          return {
            data,
            spaceID,
            pusherData,
            newPumpToken,
          } as ResponseCache;
        });

        // we quickly set the cache (without awaiting)
        clientCache.set(cacheKey, {
          start: Date.now(),
          response: responsePromise,
        });

        // then await and set local state
        const response = await responsePromise;
        if (response.newPumpToken) {
          newPumpToken = response.newPumpToken;
        }
        pusherData = response.pusherData;
        spaceID = response.spaceID;
        return response;
      })
    );

    if (!pusherData || !spaceID) return;

    setResult({
      data: responses.map((r) => r.data) as any,
      pusherData,
      spaceID,
    });

    if (newPumpToken) {
      pumpTokenLocalStorageManager.set(token, newPumpToken);
      setPumpToken(newPumpToken);
    }
  }, [appOrigin, pumpToken, rawQueries, token]);

  /**
   * First query plus subscribe to pusher pokes.
   */
  React.useEffect(() => {
    if (!token || pumpToken === undefined) return;

    function boundRefetch() {
      refetch();
    }

    boundRefetch(); // initial fetch
    subscribers.add(boundRefetch);
    return () => {
      subscribers.delete(boundRefetch);
    };
  }, [pumpToken, refetch, token]);

  const [pusher, setPusher] = React.useState<Pusher | null>(null);
  // be specific so that useEffect doesn't re-execute on every new `result` object created
  const pusherChannelKey = result?.pusherData?.channel_key;
  const pusherAppKey = result?.pusherData.app_key;
  const pusherCluster = result?.pusherData.cluster;

  /**
   * Dynamic pusher import!
   */
  React.useEffect(() => {
    if (pusherMounted) return; // dedupe across multiple pumps
    if (!pusherAppKey || !pusherCluster) return;

    pusherMounted = true;

    import("pusher-js")
      .then((mod) => {
        setPusher(new mod.default(pusherAppKey, { cluster: pusherCluster }));
      })
      .catch((err) => {
        console.log("error importing pusher");
        console.error(err);
      });

    return () => {
      pusherMounted = false;
    };
  }, [pusherAppKey, pusherCluster]);

  /**
   * Subscribe to Pusher channel and query.
   */
  React.useEffect(() => {
    if (!pusherChannelKey) return;
    if (!pusher) return;

    const channel = pusher.subscribe(pusherChannelKey);
    channel.bind("poke", () => {
      subscribers.forEach((sub) => sub());
    });

    return () => {
      channel.unsubscribe();
    };
  }, [pusher, pusherChannelKey]);

  const resolvedData = result?.data ?? initialData ?? null;

  const [resolvedChildren, setResolvedChildren] =
    React.useState<React.ReactNode>(
      typeof children === "function"
        ? // if function, we'll resolve in React.useEffect below
          initialResolvedChildren
        : children
    );

  /**
   * Resolve dynamic children
   */
  React.useEffect(() => {
    if (!resolvedData) return;
    if (typeof children === "function") {
      const res = children(resolvedData);
      if (res instanceof Promise) {
        res.then(setResolvedChildren);
      } else {
        setResolvedChildren(res);
      }
    } else {
      setResolvedChildren(children);
    }
  }, [children, resolvedData]);

  return (
    <DataProvider data={resolvedData}>
      {resolvedChildren ?? initialResolvedChildren}
    </DataProvider>
  );
};
