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
  resolvedRef: _resolvedRef,
  revalidateTags,
  ...actions
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
    warmupRun?: boolean;
  }) => Promise<{
    success: boolean;
    message?: string;
    fetchData?: { url: string; options: RequestInit };
  }>;
  getLatestBranches: (o: { bshbPreviewToken: string | undefined }) => Promise<{
    status: number;
    response: LatestBranch[] | { error: string };
  }>;
  resolvedRef: ResolvedRef;
}) => {
  const [hasRendered, setHasRendered] = React.useState(false);
  const [resolvedRef] = React.useState(_resolvedRef);
  const revalidateTagsRef = React.useRef(revalidateTags);
  revalidateTagsRef.current = revalidateTags;

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
    const shouldRevalidate =
      url.searchParams.get("__bshb-odr") === "true" &&
      !document.documentElement.dataset.basehubOdrStatus;
    const odrToken = url.searchParams.get("__bshb-odr-token");
    const ref = url.searchParams.get("__bshb-odr-ref");
    if (shouldRevalidate && odrToken) {
      // first call is a warmup call to pre-cache the work
      // the whole thing could take > 5 seconds in big repos, and we don't wanna hit nextjs' 5 second default timeout
      // so the warmup
      revalidateTagsRef
        .current({
          warmupRun: true,
          bshbPreviewToken: odrToken,
          ...(ref ? { ref } : {}),
        })
        .then(async (dryRunResult) => {
          if (dryRunResult.success && dryRunResult.fetchData) {
            // this next one won't be warmupRun, it'll actually compute and cache the tags
            // but we won't use the result here. it's just so that the next call is fast
            await fetch(
              dryRunResult.fetchData.url,
              dryRunResult.fetchData.options
            );
          }

          const { success, message } = await revalidateTagsRef.current({
            bshbPreviewToken: odrToken,
            ...(ref ? { ref } : {}),
          });
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
  }, []);

  if (
    (!bshbPreviewToken && !isForcedDraft) ||
    !hasRendered ||
    typeof document === "undefined"
  ) {
    return null;
  }
  const Portal = createPortal(
    <LazyClientToolbar
      {...actions}
      draft={draft}
      isForcedDraft={isForcedDraft}
      bshbPreviewToken={bshbPreviewToken}
      shouldAutoEnableDraft={shouldAutoEnableDraft}
      seekAndStoreBshbPreviewToken={seekAndStoreBshbPreviewToken}
      resolvedRef={resolvedRef}
      bshbPreviewLSName={bshbPreviewLSName}
    />,
    document.body
  );

  return Portal;
};
