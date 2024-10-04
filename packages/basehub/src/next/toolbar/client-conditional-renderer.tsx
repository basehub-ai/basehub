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
}: {
  draft: boolean;
  isForcedDraft: boolean;
  enableDraftMode: (o: {
    bshbPreviewToken: string;
  }) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => Promise<void>;
  revalidateTags: (o: { tags: string[] }) => Promise<{ success: boolean }>;
  getLatestBranches: (o: { bshbPreviewToken: string }) => Promise<{
    status: number;
    response: LatestBranch[] | { error: string };
  }>;
  resolvedRef: ResolvedRef;
}) => {
  const [hasRendered, setHasRendered] = React.useState(false);

  React.useEffect(() => {
    setHasRendered(true);
  }, []);

  const seekAndStoreBshbPreviewToken = React.useCallback(
    (type?: "url-only") => {
      if (typeof window === "undefined") return;

      const urlParams = new URLSearchParams(window.location.search);
      const bshbPreviewToken = urlParams.get("bshb-preview");

      if (bshbPreviewToken) {
        window.localStorage.setItem("bshb-preview", bshbPreviewToken);
        return bshbPreviewToken;
      }

      if (type === "url-only") return;

      const fromStorage = window.localStorage.getItem("bshb-preview");
      if (fromStorage) return fromStorage;
    },
    []
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
      revalidateTags({ tags: tags.split(",") })
        .then(({ success }) => {
          document.documentElement.dataset.basehubOdrStatus = success
            ? "success"
            : "error";
        })
        .catch(() => {
          document.documentElement.dataset.basehubOdrStatus = "error";
        });
    }
  }, [revalidateTags]);

  if (!bshbPreviewToken || !hasRendered || typeof document === "undefined") {
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
    />,
    document.body
  );

  return Portal;
};
