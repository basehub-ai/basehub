import * as React from "react";

// @ts-ignore
import { basehub } from "../../index.js";
import { getStuffFromEnv } from "../../bin/util/get-stuff-from-env.js";
import { isV0OrBolt } from "../../vibe.js";
import { debugLog } from "../../debug-utils.js";

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
      debugLog(
        "[BaseHub Debug] Attempting to import draftMode from next/headers in server-toolbar.tsx (initial check)"
      );
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      debugLog(
        "[BaseHub Debug] Successfully imported draftMode, calling draftMode() in server-toolbar.tsx"
      );
      isDraftMode = (await draftMode()).isEnabled;
      debugLog(
        "[BaseHub Debug] draftMode().isEnabled in server-toolbar.tsx =",
        isDraftMode
      );
    } catch (err) {
      debugLog(
        "[BaseHub Debug] Error accessing draftMode in server-toolbar.tsx (initial check):",
        err
      );
      // noop
    }
  }

  const enableDraftMode_unbound = async (
    basehubProps: ServerToolbarProps,
    { bshbPreviewToken }: { bshbPreviewToken: string }
  ) => {
    "use server";
    try {
      debugLog(
        "[BaseHub Debug] Attempting to import draftMode from next/headers in enableDraftMode_unbound"
      );
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
      if (res.status === 200) {
        debugLog(
          "[BaseHub Debug] Enabling draft mode in enableDraftMode_unbound"
        );
        (await draftMode())?.enable();
      }
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

      debugLog(
        "[BaseHub Debug] Attempting to import draftMode from next/headers in getLatestBranches_unbound"
      );
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      debugLog(
        "[BaseHub Debug] Checking draft mode status in getLatestBranches_unbound"
      );
      const draftModeEnabled = (await draftMode())?.isEnabled ?? false;
      debugLog(
        "[BaseHub Debug] Draft mode enabled in getLatestBranches_unbound:",
        draftModeEnabled
      );
      if (draftModeEnabled === false && !isForcedDraft && !bshbPreviewToken) {
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
      debugLog(
        "[BaseHub Debug] Attempting to import draftMode from next/headers in disableDraftMode"
      );
      // @ts-ignore
      const { draftMode } = await import(/* @vite-ignore */ "next/headers");
      debugLog("[BaseHub Debug] Disabling draft mode");
      (await draftMode()).disable();
    } catch (err) {
      debugLog("[BaseHub Debug] Error disabling draft mode:", err);
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
        structuredClone(init)
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

      debugLog(
        "[BaseHub Debug] Attempting to import revalidateTag from next/cache"
      );
      // @ts-ignore
      const { revalidateTag } = await import(/* @vite-ignore */ "next/cache");
      debugLog(
        "[BaseHub Debug] Successfully imported revalidateTag, revalidating",
        tags.length,
        "tags"
      );

      await Promise.all(
        tags.map(async (_tag: string) => {
          const tag = _tag.startsWith("basehub-") ? _tag : `basehub-${_tag}`;
          debugLog("[BaseHub Debug] Calling revalidateTag for tag:", tag);
          await revalidateTag(tag);
        })
      );

      debugLog("[BaseHub Debug] Successfully revalidated all tags");

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
