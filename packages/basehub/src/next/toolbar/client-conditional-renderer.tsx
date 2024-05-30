"use client";

import * as React from "react";

const LazyClientToolbar = React.lazy(() =>
  import("./client-toolbar").then((mod) => ({ default: mod.ClientToolbar }))
);

export const ClientConditionalRenderer = ({
  draft,
  isForcedDraft,
  enableDraftMode,
  disableDraftMode,
}: {
  draft: boolean;
  isForcedDraft: boolean;
  enableDraftMode: (
    bshbPreviewToken: string
  ) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => Promise<void>;
}) => {
  const [hasRendered, setHasRendered] = React.useState(false);

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
    setHasRendered(true);
  }, []);

  if (!bshbPreviewToken || !hasRendered) return null;
  return (
    <LazyClientToolbar
      disableDraftMode={disableDraftMode}
      enableDraftMode={enableDraftMode}
      draft={draft}
      isForcedDraft={isForcedDraft}
      bshbPreviewToken={bshbPreviewToken}
      shouldAutoEnableDraft={shouldAutoEnableDraft}
      seekAndStoreBshbPreviewToken={seekAndStoreBshbPreviewToken}
    />
  );
};
