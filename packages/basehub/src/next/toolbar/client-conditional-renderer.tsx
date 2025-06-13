"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ResolvedRef } from "../../common-types.js";
import type { LatestBranch } from "./components/branch-swticher.js";

const LazyClientToolbar = React.lazy(() =>
  import("./client-toolbar.js").then((mod) => ({ default: mod.ClientToolbar }))
);

export const ClientConditionalRenderer = ({
  draft,
  isForcedDraft,
  enableDraftMode,
  disableDraftMode,
  revalidateTags,
  resolvedRef,
  getLatestBranches,
}: {
  draft: boolean;
  isForcedDraft: boolean;
  enableDraftMode: (o: {
    bshbPreviewToken: string;
  }) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => Promise<void>;
  revalidateTags: (o: {
    bshbPreviewToken: string;
    ref?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  getLatestBranches: (o: { bshbPreviewToken: string | undefined }) => Promise<{
    status: number;
    response: LatestBranch[] | { error: string };
  }>;
  resolvedRef: ResolvedRef;
}) => {
  const [hasRendered, setHasRendered] = React.useState(false);

  React.useEffect(() => {
    setHasRendered(true);
  }, []);

  const bshbPreviewLSName = `bshb-preview-${resolvedRef.repoHash}`;
  const seekAndStoreBshbPreviewToken = React.useCallback(
    (type?: "url-only") => {
      if (typeof window === "undefined") return;

      const urlParams = new URLSearchParams(window.location.search);
      const bshbPreviewToken = urlParams.get("bshb-preview");

      if (bshbPreviewToken) {
        try {
          window.localStorage?.setItem(bshbPreviewLSName, bshbPreviewToken);
        } catch (e) {
          // Silently fail if localStorage is not available
        }
        return bshbPreviewToken;
      }

      if (type === "url-only") return;

      try {
        const fromStorage = window.localStorage?.getItem(bshbPreviewLSName);
        if (fromStorage) return fromStorage;
      } catch (e) {
        // Silently fail if localStorage is not available
      }
    },
    [bshbPreviewLSName]
  );

  const [bshbPreviewToken, setBshbPreviewToken] = React.useState<
    string | undefined
  >(seekAndStoreBshbPreviewToken);
  const [shouldAutoEnableDraft, setShouldAutoEnableDraft] =
    React.useState<boolean>();

  React.useLayoutEffect(() => {
    if (draft || isForcedDraft) {
      setShouldAutoEnableDraft(false);
      return;
    }

    const previewToken = seekAndStoreBshbPreviewToken("url-only");
    if (!previewToken) {
      setShouldAutoEnableDraft(false);
      return;
    }

    setBshbPreviewToken(previewToken);
    setShouldAutoEnableDraft(true);
  }, [draft, isForcedDraft, seekAndStoreBshbPreviewToken]);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const shouldRevalidate = url.searchParams.get("__bshb-odr") === "true";
    const odrToken = url.searchParams.get("__bshb-odr-token");
    const ref = url.searchParams.get("__bshb-odr-ref");
    if (shouldRevalidate && odrToken) {
      revalidateTags({ bshbPreviewToken: odrToken, ...(ref ? { ref } : {}) })
        .then(({ success, message }) => {
          document.documentElement.dataset.basehubOdrStatus = success
            ? "success"
            : "error";
          if (!success) {
            document.documentElement.dataset.basehubOdrErrorMessage =
              "Response failed";
          }
          if (message) {
            document.documentElement.dataset.basehubOdrMessage = message;
          }
        })
        .catch((e) => {
          document.documentElement.dataset.basehubOdrStatus = "error";
          let errorMessage = "";
          try {
            errorMessage = e.message;
          } catch (err) {
            console.error(err);
            errorMessage = "Unknown error";
          }
          document.documentElement.dataset.basehubOdrErrorMessage =
            errorMessage;
        });
    }
  }, [revalidateTags]);

  if (
    (!bshbPreviewToken && !isForcedDraft) ||
    !hasRendered ||
    typeof document === "undefined"
  ) {
    return null;
  }
  const Portal = createPortal(
    <LazyClientToolbar
      disableDraftMode={disableDraftMode}
      enableDraftMode={enableDraftMode}
      draft={draft}
      isForcedDraft={isForcedDraft}
      bshbPreviewToken={bshbPreviewToken}
      shouldAutoEnableDraft={shouldAutoEnableDraft}
      seekAndStoreBshbPreviewToken={seekAndStoreBshbPreviewToken}
      resolvedRef={resolvedRef}
      getLatestBranches={getLatestBranches}
      bshbPreviewLSName={bshbPreviewLSName}
    />,
    document.body
  );

  return Portal;
};
