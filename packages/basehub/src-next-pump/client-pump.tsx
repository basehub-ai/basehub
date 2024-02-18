"use client";
import {
  type ReactNode,
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
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
  const pumpTokenLocalStorageManager = useMemo(() => {
    return {
      get: (readToken: string) => {
        return localStorage.getItem(`bshb-pump-token-${readToken}`);
      },
      set: (readToken: string, pumpToken: string) => {
        localStorage.setItem(`bshb-pump-token-${readToken}`, pumpToken);
      },
    };
  }, []);

  const [pumpToken, setPumpToken] = useState<string | null>();

  /**
   * Get cached pump token from localStorage.
   */
  useEffect(() => {
    if (!token) return;
    // First check if we already have this in localStorage. If we do and it hasn't expired, we can skip the login step.
    const cached = pumpTokenLocalStorageManager.get(token);
    setPumpToken(cached);
  }, [pumpTokenLocalStorageManager, token]);

  const [result, setResult] = useState<{
    data: QueryResult<Query>;
    spaceID: string;
    pusherData: {
      app_key: string;
      cluster: string;
    };
  } | null>(initialData);

  /**
   * Query the Draft API.
   */
  const refetch = useCallback(async () => {
    const response = await fetch(`${appOrigin}/api/pump`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": token,
        ...(pumpToken ? { "x-basehub-pump-token": pumpToken } : {}),
      },
      body: JSON.stringify(rawQueryOp),
    });

    const { data, newPumpToken, spaceID, pusherData } = await response.json();
    if (newPumpToken) {
      pumpTokenLocalStorageManager.set(token, newPumpToken);
      setPumpToken(newPumpToken);
    }

    setResult({ data, spaceID, pusherData });
  }, [pumpToken, pumpTokenLocalStorageManager, rawQueryOp, token]);

  /**
   * First query.
   */
  useEffect(() => {
    if (!token || pumpToken === undefined) return;
    refetch();
  }, [pumpToken, refetch, token]);

  const spaceID = result?.spaceID;
  const apiQueryDataRef = useRef(result);
  apiQueryDataRef.current = result;

  const [pusher, setPusher] = useState<Pusher | null>(null);

  /**
   * Dynamic pusher import!
   */
  useEffect(() => {
    if (!result?.pusherData) return;
    import("pusher-js")
      .then((mod) => {
        setPusher(
          new mod.default(result.pusherData.app_key, {
            cluster: result.pusherData.cluster,
          })
        );
      })
      .catch((err) => {
        console.log("error importing pusher");
        console.error(err);
      });
  }, [result?.pusherData]);

  /**
   * Subscribe to Pusher channel and query.
   */
  useEffect(() => {
    if (!spaceID) return;
    if (!pusher) return;

    const channel = pusher.subscribe(spaceID.replace(/\//g, ""));
    channel.bind("poke", () => {
      refetch();
    });

    return () => {
      channel.unsubscribe();
    };
  }, [pusher, refetch, spaceID]);

  const [resolvedChildren, setResolvedChildren] = useState<ReactNode>(
    typeof children === "function"
      ? // if function, we'll resolve in useEffect
        initialResolvedChildren
      : children
  );

  /**
   * Resolve dynamic children
   */
  useEffect(() => {
    if (!result?.data) return;
    if (typeof children === "function") {
      const res = children(result.data);
      if (res instanceof Promise) {
        res.then(setResolvedChildren);
      } else {
        setResolvedChildren(res);
      }
    } else {
      setResolvedChildren(children);
    }
  }, [children, result?.data]);

  return (
    <DataProvider data={result?.data ?? initialData ?? null}>
      {resolvedChildren ?? initialResolvedChildren}
    </DataProvider>
  );
};
