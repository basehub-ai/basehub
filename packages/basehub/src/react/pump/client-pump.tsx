"use client";
import * as React from "react";
import { PumpProps } from "./server-pump.js";

import type { PumpQuery } from "./server-pump.js";
import type { ResponseCache, PumpState } from "./types.js";
import { replaceSystemAliases } from "../../genql/runtime/_aliasing.js";

type Pusher = any;

let pusherMounted = false;
const subscribers = new Set<() => void>(); // we'll call these when pusher tells us to poke

const clientCache = new Map<
  string, // a query string (with the variables included)
  {
    start: number; // the time the query was started
    response: Promise<void | (ResponseCache & { changed: boolean })>; // the promise that resolves to the data
  }
>();

const lastResponseHashCache = new Map<string, string>();

const DEDUPE_TIME_MS = 32;

export const ClientPump = <
  Queries extends PumpQuery[],
  Bind extends unknown | undefined = undefined,
>({
  children,
  rawQueries: _rawQueries,
  pumpEndpoint,
  pumpHeaders: _pumpHeaders,
  pumpToken: initialPumpToken,
  initialState: _initialState,
  initialResolvedChildren,
  apiVersion,
  previewRef: _previewRef,
  explicitRef,
}: {
  children: PumpProps<Queries, Bind>["children"];
  rawQueries: Array<{ query: string; variables?: any }>;
  pumpEndpoint: string;
  pumpHeaders: Record<string, string | undefined>;
  pumpToken: string | undefined;
  initialState: PumpState | undefined;
  initialResolvedChildren?: React.ReactNode;
  apiVersion: string;
  previewRef: string;
  explicitRef?: string;
}) => {
  const childrenRef = React.useRef(children);
  childrenRef.current = children;
  const [initialState] = React.useState(_initialState);
  const [rawQueries] = React.useState(_rawQueries);
  const [pumpHeaders] = React.useState(_pumpHeaders);
  const pumpTokenRef = React.useRef<string | undefined>(initialPumpToken);
  const [result, setResult] = React.useState<PumpState | undefined>(
    initialState
  );

  type Result = NonNullable<typeof result>;

  const initialStateRef = React.useRef<PumpState | undefined>(initialState);
  initialStateRef.current = initialState;

  const [previewRef, setPreviewRef] = React.useState(_previewRef);
  const previewRefRef = React.useRef(previewRef);
  previewRefRef.current = previewRef;

  /**
   * Query the Draft API.
   */
  const refetch = React.useCallback(async () => {
    let newPumpToken: string | undefined;
    let pusherData: Result["pusherData"] | undefined = undefined;
    let spaceID: Result["spaceID"] | undefined = undefined;

    const responses = await Promise.all(
      rawQueries.map(async (rawQueryOp, index) => {
        if (!pumpTokenRef.current) {
          console.warn("No pump token found. Skipping query.");
          return null;
        }

        const queryHash = JSON.stringify(rawQueryOp);
        // intentionally not add ref here as we want responseHash to be the same across queries
        const responseHashCacheKey = queryHash;
        // in this case, we're matching for deduplication, and that's why we 100% need the ref and everything that might affect the response
        const queryCacheKey = queryHash + previewRef;
        const lastResponseHash =
          lastResponseHashCache.get(responseHashCacheKey) ||
          initialStateRef.current?.responseHashes?.[index] ||
          "";

        if (clientCache.has(queryCacheKey)) {
          const cached = clientCache.get(queryCacheKey)!;
          if (performance.now() - cached.start < DEDUPE_TIME_MS) {
            const response = await cached.response;
            if (!response) return null;
            if (response.newPumpToken) {
              newPumpToken = response.newPumpToken;
            }
            pusherData = response.pusherData;
            spaceID = response.spaceID;
            return response;
          }
        }

        const responsePromise = fetch(pumpEndpoint, {
          cache: "no-store",
          method: "POST",
          headers: {
            ...pumpHeaders,
            "content-type": "application/json",
            "x-basehub-api-version": apiVersion,
            "x-basehub-ref": previewRef,
          },
          body: JSON.stringify({
            ...rawQueryOp,
            pumpToken: pumpTokenRef.current,
            lastResponseHash,
          }),
        })
          .then(async (response) => {
            const {
              data = null,
              errors = null,
              newPumpToken,
              spaceID,
              pusherData,
              responseHash,
            } = await response.json();

            lastResponseHashCache.set(responseHashCacheKey, responseHash);

            return {
              data: replaceSystemAliases(data),
              spaceID,
              pusherData,
              newPumpToken,
              errors,
              responseHash,
              changed: lastResponseHash !== responseHash,
            } as ResponseCache & { changed: boolean };
          })
          .catch((err: unknown) => {
            console.error(`Error fetching data from the BaseHub Draft API:
              
${JSON.stringify(err, null, 2)}
              
Contact support@basehub.com for help.`);
          });

        // we quickly set the cache (without awaiting)
        clientCache.set(queryCacheKey, {
          start: performance.now(),
          response: responsePromise,
        });

        // then await and set local state
        const response = await responsePromise;
        if (!response) return null;

        if (response.newPumpToken) {
          newPumpToken = response.newPumpToken;
        }
        pusherData = response.pusherData;
        spaceID = response.spaceID;
        return response;
      })
    );

    const shouldUpdate = responses.some((r) => r?.changed);
    if (shouldUpdate) {
      if (!pusherData || !spaceID) return;
      setResult((p) => {
        if (!pusherData || !spaceID) return p;
        return {
          data: responses.map((r, i) => {
            if (!r?.changed) return p?.data?.[i] ?? null;
            return r?.data ?? null;
          }),
          errors: responses.map((r, i) => {
            if (!r?.changed) return p?.errors?.[i] ?? null;
            return r?.errors ?? null;
          }),
          responseHashes: responses.map((r) => r?.responseHash ?? ""),
          pusherData,
          spaceID,
        };
      });
    }

    if (newPumpToken) {
      pumpTokenRef.current = newPumpToken;
    }
  }, [pumpEndpoint, pumpHeaders, rawQueries, apiVersion, previewRef]);

  /**
   * Surface errors.
   */
  React.useEffect(() => {
    if (!result?.errors) return;
    const mainError = result.errors[0]?.[0];
    if (!mainError) return;
    console.error(
      `Error fetching data from the BaseHub Draft API: ${mainError.message}${
        mainError.path ? ` at ${mainError.path.join(".")}` : ""
      }`
    );
  }, [result?.errors]);

  /**
   * First query plus subscribe to pusher pokes.
   */
  React.useEffect(() => {
    function boundRefetch() {
      refetch();
    }

    boundRefetch(); // initial fetch
    subscribers.add(boundRefetch);
    return () => {
      subscribers.delete(boundRefetch);
    };
  }, [refetch]);

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
        // @ts-ignore
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
    channel.bind(
      "poke",
      (
        message?: Partial<{
          mutatedEntryTypes: string[];
          branch: string | undefined;
        }>
      ) => {
        if (
          message?.mutatedEntryTypes?.includes("block") &&
          message.branch === previewRefRef.current
        ) {
          subscribers.forEach((sub) => sub());
        }
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, [pusher, pusherChannelKey]);

  /**
   * Subscribe to ref changes
   */
  React.useEffect(() => {
    if (explicitRef) {
      // in case of an explicit ref, we don't subscribe to branch switches
      // it's fixed
      return;
    }

    function handleRefChange() {
      const previewRef =
        // @ts-ignore
        window.__bshb_ref;
      if (!previewRef || typeof previewRef !== "string") return;
      setPreviewRef(previewRef);
    }

    handleRefChange();
    window.addEventListener("__bshb_ref_changed", handleRefChange);
    return () => {
      window.removeEventListener("__bshb_ref_changed", handleRefChange);
    };
  }, [explicitRef]);

  const resolvedData = React.useMemo(() => {
    // @ts-ignore
    return result?.data.map((r, i) => r ?? initialState?.data?.[i] ?? null);
  }, [initialState?.data, result?.data]);

  const [resolvedChildren, setResolvedChildren] =
    React.useState<React.ReactNode>(
      typeof childrenRef.current === "function"
        ? // if function, we'll resolve in React.useEffect below
          initialResolvedChildren
        : childrenRef.current
    );

  /**
   * Resolve dynamic children
   */
  React.useEffect(() => {
    if (!resolvedData) return;
    if (typeof childrenRef.current === "function") {
      // @ts-ignore
      const res = childrenRef.current(resolvedData);
      if (res instanceof Promise) {
        res.then(setResolvedChildren);
      } else {
        setResolvedChildren(res);
      }
    } else {
      setResolvedChildren(childrenRef.current);
    }
  }, [resolvedData]);

  return resolvedChildren ?? initialResolvedChildren;
};
