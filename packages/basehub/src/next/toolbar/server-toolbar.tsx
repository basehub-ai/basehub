import * as React from "react";

// @ts-ignore
import { basehub } from "../../index.js";
import { getStuffFromEnv } from "../../bin/util/get-stuff-from-env.js";
import { isV0OrBolt } from "../../vibe.js";

// we use react.lazy to code split client-toolbar
const LazyClientConditionalRenderer = React.lazy(() =>
  import("./client-conditional-renderer.js").then((mod) => ({
    default: mod.ClientConditionalRenderer,
  }))
);

type ServerToolbarProps = Parameters<typeof basehub>[0];

export const ServerToolbar = async ({
  ...basehubProps
}: ServerToolbarProps) => {
  const { isForcedDraft, resolvedRef } = await getStuffFromEnv(basehubProps);

  let isDraftMode = false;
  if (!isV0OrBolt()) {
    try {
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      isDraftMode = (await draftMode()).isEnabled;
    } catch (err) {
      // noop
    }
  }

  const enableDraftMode_unbound = async (
    basehubProps: ServerToolbarProps,
    { bshbPreviewToken }: { bshbPreviewToken: string }
  ) => {
    "use server";
    try {
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      const { headers, url } = await getStuffFromEnv(basehubProps);

      const appApiEndpoint = getBaseHubAppApiEndpoint(
        new URL(url),
        "/api/nextjs/preview-auth"
      );

      const res = await fetch(appApiEndpoint, {
        cache: "no-store",
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...headers,
        },
        body: JSON.stringify({ bshbPreview: bshbPreviewToken }),
      });

      const responseIsJson = res.headers.get("content-type")?.includes("json");
      if (!responseIsJson) {
        return { status: 400, response: { error: "Bad request" } };
      }
      const response = await res.json();
      if (res.status === 200) (await draftMode())?.enable();
      return { status: res.status, response };
    } catch (error) {
      return { status: 500, response: { error: "Something went wrong" } };
    }
  };

  const getLatestBranches_unbound = async (
    basehubProps: ServerToolbarProps,
    { bshbPreviewToken }: { bshbPreviewToken: string | undefined }
  ) => {
    "use server";
    try {
      const { headers, url, isForcedDraft } =
        await getStuffFromEnv(basehubProps);

      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      if (
        ((await draftMode())?.isEnabled ?? false) === false &&
        !isForcedDraft &&
        !bshbPreviewToken
      ) {
        return { status: 403, response: { error: "Unauthorized" } };
      }
      const appApiEndpoint = getBaseHubAppApiEndpoint(
        new URL(url),
        "/api/nextjs/latest-branches"
      );

      const res = await fetch(appApiEndpoint, {
        cache: "no-store",
        method: "GET",
        headers: {
          "content-type": "application/json",
          ...headers,
          ...(bshbPreviewToken && {
            "x-basehub-preview-token": bshbPreviewToken,
          }),
          ...(isForcedDraft && {
            "x-basehub-forced-draft": "true",
          }),
        },
      });

      const responseIsJson = res.headers.get("content-type")?.includes("json");
      if (!responseIsJson) {
        return { status: 400, response: { error: "Bad request" } };
      }
      const response = await res.json();
      return { status: res.status, response };
    } catch (error) {
      return { status: 500, response: { error: "Something went wrong" } };
    }
  };

  const disableDraftMode = async () => {
    "use server";
    try {
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      (await draftMode()).disable();
    } catch (err) {
      // noop
    }
  };

  const revalidateTags_unbound = async (
    basehubProps: ServerToolbarProps,
    {
      bshbPreviewToken,
      ref,
      warmupRun,
    }: {
      bshbPreviewToken: string;
      ref?: string;
      warmupRun?: boolean;
    }
  ) => {
    "use server";

    try {
      const { headers, url } = await getStuffFromEnv(basehubProps);
      const appApiEndpoint = getBaseHubAppApiEndpoint(
        new URL(url),
        "/api/nextjs/pending-tags"
      );

      if (!bshbPreviewToken) {
        return { success: false, error: "Unauthorized" };
      }

      const init = {
        cache: "no-store",
        method: "GET",
        headers: {
          "content-type": "application/json",
          ...headers,
          ...(ref && { "x-basehub-ref": ref }),
          ...(bshbPreviewToken && {
            "x-basehub-preview-token": bshbPreviewToken,
          }),
        } as HeadersInit,
      } satisfies RequestInit;

      const res = await fetch(
        appApiEndpoint + (warmupRun ? "?warmupRun=true" : ""),
        init
      );

      // this ensures the client is authenticated (before sending down sensitive data in the dryRun response)
      if (res.status !== 200) {
        return {
          success: false,
          message: `Received status ${res.status} from server`,
        };
      }

      if (warmupRun) {
        return {
          success: true,
          message: "ok",
          fetchData: { url: appApiEndpoint, options: init },
        };
      }

      const response = await res.json();

      const { tags } = response;
      if (!tags || !Array.isArray(tags) || tags.length === 0) {
        return { success: true, message: "No tags to revalidate" };
      }

      // @ts-ignore
      const { revalidateTag } = await import(/* @vite-ignore */ "next/cache");

      await Promise.all(
        tags.map(async (_tag: string) => {
          const tag = _tag.startsWith("basehub-") ? _tag : `basehub-${_tag}`;
          await revalidateTag(tag);
        })
      );

      return { success: true, message: `Revalidated ${tags.length} tags` };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Something went wrong while revalidating tags",
      };
    }
  };

  const enableDraftMode = enableDraftMode_unbound.bind(null, basehubProps);
  const getLatestBranches = getLatestBranches_unbound.bind(null, basehubProps);
  const revalidateTags = revalidateTags_unbound.bind(null, basehubProps);

  return (
    <LazyClientConditionalRenderer
      draft={isDraftMode}
      isForcedDraft={isForcedDraft}
      enableDraftMode={enableDraftMode}
      disableDraftMode={disableDraftMode}
      revalidateTags={revalidateTags}
      getLatestBranches={getLatestBranches}
      resolvedRef={resolvedRef}
    />
  );
};

function getBaseHubAppApiEndpoint(url: URL, pathname: string) {
  let origin: string;
  switch (true) {
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("localhost:3001"):
      origin = "http://localhost:3000" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("api.basehub.com"):
    default:
      origin = "https://basehub.com" + pathname + url.search + url.hash;
  }

  return origin;
}
