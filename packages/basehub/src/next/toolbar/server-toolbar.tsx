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

    const token = headers["x-basehub-token"];
    let enablePreviewEndpoint: string;
    switch (true) {
      case url.origin.includes("api.basehub.com"):
        enablePreviewEndpoint = "https://basehub.com/api/preview/auth";
        break;
      case url.origin.includes("api.bshb.dev"):
        enablePreviewEndpoint = "https://basehub.dev/api/preview/auth";
        break;
      default:
        enablePreviewEndpoint = url.toString();
    }

    return fetch(enablePreviewEndpoint, {
      // @ts-expect-error - nextjs only option
      next: { revalidate: 0 },
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

  return (
    <LazyClientConditionalRenderer
      draft={draftMode().isEnabled}
      isForcedDraft={isForcedDraft}
      enableDraftMode={enableDraftMode}
      disableDraftMode={disableDraftMode}
    />
  );
};
