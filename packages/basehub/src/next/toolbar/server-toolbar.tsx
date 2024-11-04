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
    try {
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
    bshbPreviewToken: string | undefined;
  }) => {
    "use server";
    try {
      const { headers, url, isForcedDraft } = getStuffFromEnv(basehubProps);
      if ((await draftMode()).isEnabled === false && !isForcedDraft) {
        return { status: 403, response: { error: "Unauthorized" } };
      }
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
          ...(bshbPreviewToken && {
            "x-basehub-preview-token": bshbPreviewToken,
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
