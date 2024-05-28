"use client";

import * as React from "react";
import s from "./toolbar.module.scss";
import { Tooltip } from "./components/tooltip";
import { DraftButton } from "./components/draft-button";
import { DragHandle } from "./components/drag-handle";
import { BranchSwitcher } from "./components/branch-swticher";

export const ClientToolbar = ({
  draft,
  isDev,
  enableDraftMode,
  disableDraftMode,
}: {
  draft: boolean;
  isDev: boolean;
  enableDraftMode: (
    bshbPreviewToken: string
  ) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => void;
}) => {
  const toolbarRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<Tooltip>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [hasRendered, setHasRendered] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [automaticDraftDetection, setAutomaticDraftDetection] =
    React.useState(true);

  const updateBshbPreviewToken = (value: string | undefined) => {
    setBshbPreviewToken(value);
    if (!value) return;
    window.localStorage.setItem("bshb-preview", value);
  };

  const displayMessage = React.useCallback(
    (message: string) => {
      setMessage(message);
      setTimeout(() => setMessage(""), 5000);
    },
    [setMessage]
  );

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

  const triggerDraftMode = React.useCallback(
    (previewToken: string) => {
      setLoading(true);
      enableDraftMode(previewToken)
        .then(({ status, response }) => {
          if (status === 200) {
            updateBshbPreviewToken(previewToken);
            displayMessage("Draft mode activated");
            // refresh
            window.location.reload();
          } else if ("error" in response) {
            displayMessage(`Draft mode activation error: ${response.error}`);
          } else {
            displayMessage("Draft mode activation error");
          }
        })
        .finally(() => setLoading(false));
    },
    [enableDraftMode, displayMessage]
  );

  const [bshbPreviewToken, setBshbPreviewToken] = React.useState<
    string | undefined
  >(seekAndStoreBshbPreviewToken);

  React.useLayoutEffect(() => {
    if (draft || !automaticDraftDetection) return;

    const previewToken = seekAndStoreBshbPreviewToken("url-only");
    if (!previewToken) return;

    triggerDraftMode(previewToken);
    setAutomaticDraftDetection(false);
  }, [
    isDev,
    enableDraftMode,
    seekAndStoreBshbPreviewToken,
    bshbPreviewToken,
    displayMessage,
    triggerDraftMode,
    draft,
    automaticDraftDetection,
  ]);

  React.useEffect(() => {
    setHasRendered(true);
  }, []);

  if ((!draft && !bshbPreviewToken) || !hasRendered) return null;

  const tooltip = isDev ? "Draft enforced by dev env" : "Draft mode";
  // const isDraggingTool

  const dragToolbar = (position: { x: number; y: number }) => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;

    const rect = toolbar.getBoundingClientRect();
    const padding = 20;
    let cancelX = false;
    let cancelY = false;

    if (
      position.x - padding < 0 ||
      position.x + rect.width + padding > window.innerWidth
    ) {
      cancelX = true;
    }

    if (
      position.y - padding < 0 ||
      position.y + rect.height + padding > window.innerHeight
    ) {
      // will overflow, not allowed
      cancelY = true;
    }

    if (tooltipRef.current) {
      tooltipRef.current.checkOverflow();
    }

    if (!cancelX) {
      toolbar.style.left = `${position.x}px`;
      toolbar.style.right = "unset";
    }

    if (!cancelY) {
      toolbar.style.bottom = "unset";
      toolbar.style.top = `${position.y}px`;
    }
  };

  return (
    <div className={s.wrapper} ref={toolbarRef}>
      <div className={s.root} data-draft-active={isDev || draft}>
        {/* branch switcher */}
        <BranchSwitcher isDev={isDev} draft={draft} />

        {/* draft mode button */}
        <Tooltip
          content={tooltip}
          ref={tooltipRef}
          disabled={isDragging}
        >
          <DraftButton
            isDev={isDev}
            draft={draft}
            loading={loading}
            onClick={() => {
              if (loading) return;

              if (draft) {
                disableDraftMode();
                displayMessage("Draft mode deactivated");

                const pathname = window.location.pathname;
                const urlWithoutPreview = pathname.replace(
                  /(\?|&)bshb-preview=[^&]*/,
                  ""
                );

                setTimeout(() => {
                  window.location.href = urlWithoutPreview;
                }, 1000);
              } else {
                const previewToken =
                  bshbPreviewToken ?? seekAndStoreBshbPreviewToken();
                if (!previewToken) {
                  return displayMessage("No preview token found");
                }

                triggerDraftMode(previewToken);
              }
            }}
          />
        </Tooltip>

        <DragHandle
          onDrag={dragToolbar}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />

        <p
          className={s.message}
          data-active={isDev || draft}
          data-visible={Boolean(message)}
        >
          {message}
        </p>
      </div>
    </div>
  );
};
