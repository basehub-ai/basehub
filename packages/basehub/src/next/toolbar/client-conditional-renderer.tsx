"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ResolvedRef } from "../../common-types";
import { LatestBranch } from "./components/branch-swticher";

const LazyClientToolbar = React.lazy(() =>
  import("./client-toolbar").then((mod) => ({ default: mod.ClientToolbar }))
);

export const ClientConditionalRenderer = ({
  draft,
  isForcedDraft,
  enableDraftMode,
  disableDraftMode,
  revalidateTags,
  resolvedRef,
  getLatestBranches,
  humanRevalidatePendingTags,
}: {
  draft: boolean;
  isForcedDraft: boolean;
  enableDraftMode: (o: {
    bshbPreviewToken: string;
  }) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => Promise<void>;
  revalidateTags: (o: { tags: string[] }) => Promise<{ success: boolean }>;
  getLatestBranches: (o: { bshbPreviewToken: string | undefined }) => Promise<{
    status: number;
    response: LatestBranch[] | { error: string };
  }>;
  humanRevalidatePendingTags: (o: {
    bshbPreviewToken: string;
    ref: string;
  }) => Promise<{ success: boolean }>;
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
        window.localStorage.setItem(bshbPreviewLSName, bshbPreviewToken);
        return bshbPreviewToken;
      }

      if (type === "url-only") return;

      const fromStorage = window.localStorage.getItem(bshbPreviewLSName);
      if (fromStorage) return fromStorage;
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
    const tags = url.searchParams.get("bshb-odr-tags");
    if (tags) {
      url.searchParams.delete("bshb-odr-tags");
      window.history.replaceState(null, "", url);
      revalidateTags({ tags: tags.split(",") })
        .then(({ success }) => {
          document.documentElement.dataset.basehubOdrStatus = success
            ? "success"
            : "error";
          document.documentElement.dataset.basehubOdrErrorMessage =
            "Response failed";
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
      humanRevalidatePendingTags={humanRevalidatePendingTags}
      bshbPreviewLSName={bshbPreviewLSName}
    />,
    document.body
  );

  return Portal;
};
