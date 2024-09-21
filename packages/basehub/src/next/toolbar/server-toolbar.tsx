import * as React from "react";

import { draftMode } from "next/headers";
import {
  getStuffFromEnv,
  basehub,
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

export const ServerToolbar = ({ ...basehubProps }: ServerToolbarProps) => {
  const { isForcedDraft } = getStuffFromEnv(basehubProps);

  const enableDraftMode = async (bshbPreviewToken: string) => {
    "use server";
    const { headers, url } = getStuffFromEnv(basehubProps);
    const apiOrigin = getBaseHubApiOrigin(url);
    const token = headers["x-basehub-token"];

    return fetch(apiOrigin + "/api/nextjs/preview-auth", {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": token,
      },
      body: JSON.stringify({ bshbPreview: bshbPreviewToken }),
    }).then(async (res) => {
      try {
        const responseIsJson = res.headers
          .get("content-type")
          ?.includes("json");
        if (!responseIsJson) {
          return { status: 400, response: { error: "Bad request" } };
        }
        const response = await res.json();
        if (res.status === 200) draftMode().enable();
        return { status: res.status, response };
      } catch (error) {
        return { status: 500, response: { error: "Something went wrong" } };
      }
    });
  };

  const disableDraftMode = async () => {
    "use server";

    draftMode().disable();
  };

  const setupOnDemandRevalidation = async (origin: string) => {
    "use server";

    try {
      // don't setup on demand revalidation in dev
      if (process.env.NODE_ENV === "development") return;
    } catch (error) {
      // process not defined?
    }

    const { headers, url } = getStuffFromEnv(basehubProps);
    const apiOrigin = getBaseHubApiOrigin(url);
    const token = headers["x-basehub-token"];

    await fetch(apiOrigin + "/api/nextjs/setup-odr", {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": token,
      },
      body: JSON.stringify({ origin }),
    });
  };

  const revalidateTags = async (origin: string) => {
    "use server";

    const { headers, url } = getStuffFromEnv(basehubProps);
    const apiOrigin = getBaseHubApiOrigin(url);
    const token = headers["x-basehub-token"];

    const res = await fetch(apiOrigin + "/api/nextjs/get-odr-cache-tags", {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-basehub-token": token,
      },
      body: JSON.stringify({ origin }),
    });

    if (res.status === 200) {
      const { tags } = await res.json();
      revalidateTags(tags);
    }
  };

  return (
    <LazyClientConditionalRenderer
      draft={draftMode().isEnabled}
      isForcedDraft={isForcedDraft}
      enableDraftMode={enableDraftMode}
      disableDraftMode={disableDraftMode}
      setupOnDemandRevalidation={setupOnDemandRevalidation}
      revalidateTags={revalidateTags}
    />
  );
};

function getBaseHubApiOrigin(url: URL) {
  let origin: string;
  switch (true) {
    case url.origin.includes("api.basehub.com"):
      origin = "https://basehub.com";
      break;
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev";
      break;
    default:
      origin = url.origin;
  }

  return origin;
}
