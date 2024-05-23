import * as React from "react";

import { draftMode } from "next/headers";
import {
  // @ts-ignore
  getStuffFromEnv,
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
} from "../index";

// we use react.lazy to code split client-toolbar
const LazyClientToolbar = React.lazy(() =>
  import("./client-toolbar").then((mod) => ({ default: mod.ClientToolbar }))
);

export const ServerToolbar = () => {
  const enableDraftMode = async (bshbPreviewToken: string) => {
    "use server";

    const { headers, url } = getStuffFromEnv({});
    const token = headers["x-basehub-token"];
    let enablePreviewEndpoint: string;
    switch (true) {
      case url.origin.includes("api.basehub.com"):
        // TODO: update this to the correct endpoint
        // enablePreviewEndpoint = "https://basehub.com/api/preview";
        enablePreviewEndpoint =
          "https://basehub-git-preview-exp-basehub.vercel.app/api/preview";
        break;
      case url.origin.includes("api.bshb.dev"):
        // TODO: update this to the correct endpoint
        // enablePreviewEndpoint = "https://basehub.dev/api/preview";
        enablePreviewEndpoint =
          "https://basehub-git-preview-exp-basehub.vercel.app/api/preview";
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
    <>
      <div
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          borderRadius: 6,
          zIndex: 1000,
          height: 36,
          overflow: "hidden",
          color: "white",
          display: "flex",
          alignItems: "center",
          border: "1px solid #252525",
          background: "#040404",
          boxShadow: "0px 0px 100px 20px #000",
        }}
      >
        <LazyClientToolbar
          draft={draftMode().isEnabled}
          enableDraftMode={enableDraftMode}
          disableDraftMode={disableDraftMode}
        />
      </div>
    </>
  );
};
