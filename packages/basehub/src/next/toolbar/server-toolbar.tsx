import * as React from "react";

// @ts-ignore
import { draftMode } from "next/headers";
// @ts-ignore
import { revalidateTag } from "next/cache";
import { basehub } from "../../index.js";
import { getStuffFromEnv } from "../../bin/util/get-stuff-from-env.js";

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

  const enableDraftMode_unbound = async (
    basehubProps: ServerToolbarProps,
    { bshbPreviewToken }: { bshbPreviewToken: string }
  ) => {
    "use server";
    try {
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
          "x-basehub-token": headers["x-basehub-token"],
        },
        body: JSON.stringify({ bshbPreview: bshbPreviewToken }),
      });

      const responseIsJson = res.headers.get("content-type")?.includes("json");
      if (!responseIsJson) {
        return { status: 400, response: { error: "Bad request" } };
      }
      const response = await res.json();
      if (res.status === 200) (await draftMode()).enable();
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
      if (
        (await draftMode()).isEnabled === false &&
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
          "x-basehub-token": headers["x-basehub-token"],
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
    (await draftMode()).disable();
  };

  const revalidateTags_unbound = async (
    basehubProps: ServerToolbarProps,
    {
      bshbPreviewToken,
      ref,
    }: {
      bshbPreviewToken: string;
      ref?: string;
    }
  ) => {
    "use server";

    const { headers, url } = await getStuffFromEnv(basehubProps);
    const appApiEndpoint = getBaseHubAppApiEndpoint(
      new URL(url),
      "/api/nextjs/pending-tags"
    );

    if (!bshbPreviewToken) {
      return { success: false, error: "Unauthorized" };
    }

    const res = await fetch(appApiEndpoint, {
      cache: "no-store",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": headers["x-basehub-token"],
        "x-basehub-ref": ref || headers["x-basehub-ref"],
        "x-basehub-preview-token": bshbPreviewToken,
        "x-basehub-sdk-build-id": headers["x-basehub-sdk-build-id"],
      } as HeadersInit,
    });

    if (res.status !== 200) {
      return {
        success: false,
        message: `Received status ${res.status} from server`,
      };
    }

    const response = await res.json();

    try {
      const { tags } = response;
      if (!tags || !Array.isArray(tags) || tags.length === 0) {
        return { success: true, message: "No tags to revalidate" };
      }

      await Promise.all(
        tags.map(async (_tag: string) => {
          const tag = _tag.startsWith("basehub-") ? _tag : `basehub-${_tag}`;
          await revalidateTag(tag);
        })
      );

      return { success: true, message: `Revalidated ${tags.length} tags` };
    } catch (error) {
      console.log(response);
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
      draft={(await draftMode()).isEnabled}
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
    case url.origin.includes("api.basehub.com"):
      origin = "https://basehub.com" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("localhost:3001"):
      origin = "http://localhost:3000" + pathname + url.search + url.hash;
      break;
    default:
      origin = url.origin + pathname + url.search + url.hash;
  }

  return origin;
}
