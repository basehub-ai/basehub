import * as React from "react";

import { draftMode } from "next/headers";
import { revalidateTag } from "next/cache";
import {
  getStuffFromEnv,
  basehub,
  resolvedRef,
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
} from "../index";

// we use react.lazy to code split client-toolbar
const LazyClientConditionalRenderer = React.lazy(() =>
  import("./client-conditional-renderer").then((mod) => ({
    default: mod.ClientConditionalRenderer,
  }))
);

type ServerToolbarProps = Parameters<typeof basehub>[0];

export const ServerToolbar = async ({
  ...basehubProps
}: ServerToolbarProps) => {
  const { isForcedDraft } = getStuffFromEnv(basehubProps);

  const enableDraftMode = async ({
    bshbPreviewToken,
  }: {
    bshbPreviewToken: string;
  }) => {
    "use server";
    const { headers, url } = getStuffFromEnv(basehubProps);
    const appApiEndpoint = getBaseHubAppApiEndpoint(
      url,
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

    try {
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

  const getLatestBranches = async ({
    bshbPreviewToken,
  }: {
    bshbPreviewToken: string;
  }) => {
    "use server";
    const { headers, url } = getStuffFromEnv(basehubProps);
    const appApiEndpoint = getBaseHubAppApiEndpoint(
      url,
      "/api/nextjs/latest-branches"
    );

    const res = await fetch(appApiEndpoint, {
      cache: "no-store",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": headers["x-basehub-token"],
        "x-basehub-preview-token": bshbPreviewToken,
      },
    });

    try {
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

  const revalidateTags = async ({ tags }: { tags: string[] }) => {
    "use server";
    await Promise.all(
      tags.map(async (tag) => {
        if (tag.startsWith("basehub-")) {
          await revalidateTag(tag);
        }
      })
    );
    return { success: true };
  };

  // used by a client that's authenticated to the toolbar
  // sort of as a fallback to the headless browser's revalidation failing
  const humanRevalidatePendingTags = async ({
    bshbPreviewToken,
    ref,
  }: {
    bshbPreviewToken: string;
    ref: string;
  }) => {
    "use server";
    const { headers, url } = getStuffFromEnv(basehubProps);
    const appApiEndpoint = getBaseHubAppApiEndpoint(
      url,
      "/api/nextjs/pending-tags"
    );

    const res = await fetch(appApiEndpoint, {
      cache: "no-store",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": headers["x-basehub-token"],
        "x-basehub-preview-token": bshbPreviewToken,
        "x-basehub-ref": ref,
      },
    });

    if (res.status !== 200) {
      return { success: false };
    }

    const response = await res.json();
    const tags = response.tags;
    if (!tags || !Array.isArray(tags)) {
      return { success: false };
    }

    return await revalidateTags({ tags });
  };

  return (
    <LazyClientConditionalRenderer
      draft={(await draftMode()).isEnabled}
      isForcedDraft={isForcedDraft}
      enableDraftMode={enableDraftMode}
      disableDraftMode={disableDraftMode}
      revalidateTags={revalidateTags}
      getLatestBranches={getLatestBranches}
      resolvedRef={resolvedRef}
      humanRevalidatePendingTags={humanRevalidatePendingTags}
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
