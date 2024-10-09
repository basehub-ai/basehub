"use client";

import * as React from "react";
import s from "./toolbar.module.scss";
import { Tooltip } from "./components/tooltip";
import { DragHandle } from "./components/drag-handle";
import { BranchSwitcher, LatestBranch } from "./components/branch-swticher";
import debounce from "lodash.debounce";
import { ResolvedRef } from "../../common-types";

const TOOLBAR_POSITION_STORAGE_KEY = "bshb_toolbar_pos";

export const ClientToolbar = ({
  draft,
  isForcedDraft,
  enableDraftMode,
  disableDraftMode,
  bshbPreviewToken,
  shouldAutoEnableDraft,
  seekAndStoreBshbPreviewToken,
  resolvedRef,
  getLatestBranches,
}: {
  draft: boolean;
  isForcedDraft: boolean;
  enableDraftMode: (o: { bshbPreviewToken: string }) => Promise<{
    status: number;
    response: {
      ref?: string;
      error?: string;
      latestBranches?: LatestBranch[];
    };
  }>;
  disableDraftMode: () => Promise<void>;
  bshbPreviewToken: string | undefined;
  shouldAutoEnableDraft: boolean | undefined;
  seekAndStoreBshbPreviewToken: (type?: "url-only") => string | undefined;
  resolvedRef: ResolvedRef;
  getLatestBranches: (o: { bshbPreviewToken: string }) => Promise<{
    status: number;
    response: LatestBranch[] | { error: string };
  }>;
}) => {
  const [toolbarRef, setToolbarRef] = React.useState<HTMLDivElement | null>(
    null
  );
  const dragHandleRef = React.useRef<DragHandle>(null);
  const tooltipRef = React.useRef<Tooltip>(null);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [ref, setRef] = React.useState(resolvedRef.ref);
  const [latestBranches, setLatestBranches] = React.useState<LatestBranch[]>(
    []
  );

  React.useEffect(() => {
    setRef(window.localStorage.getItem("bshb-preview-ref") || resolvedRef.ref);
  }, [resolvedRef.ref]);

  const currentMessageTimeout = React.useRef(0);

  const displayMessage = React.useCallback(
    (message: string) => {
      window.clearTimeout(currentMessageTimeout.current);
      setMessage(message);
      currentMessageTimeout.current = window.setTimeout(
        () => setMessage(""),
        5000
      );
    },
    [setMessage]
  );

  const triggerDraftMode = React.useCallback(
    (previewToken: string) => {
      setLoading(true);
      enableDraftMode({ bshbPreviewToken: previewToken })
        .then(({ status, response }) => {
          if (status === 200) {
            setLatestBranches((p) => response.latestBranches ?? p);
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

  const [hasAutoEnabledDraftOnce, setHasAutoEnabledDraftOnce] =
    React.useState(false);

  React.useLayoutEffect(() => {
    if (
      draft ||
      hasAutoEnabledDraftOnce ||
      !shouldAutoEnableDraft ||
      isForcedDraft ||
      !bshbPreviewToken
    ) {
      return;
    }

    triggerDraftMode(bshbPreviewToken);
    setHasAutoEnabledDraftOnce(true);
  }, [
    isForcedDraft,
    enableDraftMode,
    seekAndStoreBshbPreviewToken,
    bshbPreviewToken,
    displayMessage,
    triggerDraftMode,
    draft,
    shouldAutoEnableDraft,
    hasAutoEnabledDraftOnce,
  ]);

  const getAndSetLatestBranches = React.useCallback(async () => {
    let result: LatestBranch[] = [];
    if (bshbPreviewToken) {
      const res = await getLatestBranches({ bshbPreviewToken });
      if (Array.isArray(res.response)) {
        result = res.response;
      } else if ("error" in res.response) {
        console.error(`BaseHub Toolbar Error: ${res.response.error}`);
      }
    }
    setLatestBranches(result);
  }, [bshbPreviewToken, getLatestBranches]);

  /**
   * Get latest branches every 30 seconds (we'll also get 'em on load and when the user hovers the branch switcher)
   */
  React.useEffect(() => {
    if (!bshbPreviewToken) return;

    async function effect() {
      while (true) {
        try {
          getAndSetLatestBranches();
          await new Promise((resolve) => setTimeout(resolve, 30_000));
        } catch (error) {
          console.error(`BaseHub Toolbar Error: ${error}`);
          break;
        }
      }
    }

    effect();
  }, [bshbPreviewToken, getAndSetLatestBranches]);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const previewRef = url.searchParams.get("bshb-preview-ref");
    if (!previewRef) return;

    setRef(previewRef);
    window.dispatchEvent(new Event("__bshb_ref_changed"));
  }, []);

  React.useLayoutEffect(() => {
    tooltipRef.current?.checkOverflow();
  }, [message]);

  const getStoredToolbarPosition = React.useCallback(() => {
    if (!toolbarRef) return;

    const toolbarPositionStored = window.sessionStorage.getItem(
      TOOLBAR_POSITION_STORAGE_KEY
    );

    if (!toolbarPositionStored) return;

    const toolbarPosition = JSON.parse(toolbarPositionStored);
    if (!("x" in toolbarPosition)) return;
    if (!("y" in toolbarPosition)) return;

    return toolbarPosition;
  }, [toolbarRef]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateToolbarStoredPositionDebounced = React.useCallback(
    debounce((position: { x?: number; y?: number }) => {
      const storedPosition = getStoredToolbarPosition() ?? { x: 0, y: 0 };
      window.sessionStorage.setItem(
        TOOLBAR_POSITION_STORAGE_KEY,
        JSON.stringify({ ...storedPosition, ...position })
      );
    }, 250),
    []
  );

  const dragToolbar = React.useCallback(
    (position: { x: number; y: number }) => {
      const toolbar = toolbarRef;
      if (!toolbar) return;

      const rect = toolbar.getBoundingClientRect();
      const padding = 32;
      const newPositionForStore: { x?: number; y?: number } = {};

      // reached left
      if (position.x - padding < 0) {
        toolbar.style.left = `${padding}px`;
        toolbar.style.right = "unset";
        newPositionForStore.x = padding;
      } else if (position.x + rect.width + padding > window.innerWidth) {
        // reached right
        toolbar.style.right = `${padding}px`;
        toolbar.style.left = "unset";
        newPositionForStore.x = padding;
      } else {
        toolbar.style.right = "unset";
        toolbar.style.left = `${position.x}px`;
        newPositionForStore.x = position.x;
      }

      // reached top
      if (position.y - padding < 0) {
        toolbar.style.bottom = "unset";
        toolbar.style.top = `${padding}px`;
        newPositionForStore.y = padding;
      } else if (position.y + rect.height + padding > window.innerHeight) {
        // reached bottom
        toolbar.style.top = "unset";
        toolbar.style.bottom = `${padding}px`;
        newPositionForStore.y = padding;
      } else {
        toolbar.style.bottom = "unset";
        toolbar.style.top = `${position.y}px`;
        newPositionForStore.x = position.y;
      }

      // replace sessionStorage
      updateToolbarStoredPositionDebounced({ x: position.x, y: position.y });
    },
    [toolbarRef, updateToolbarStoredPositionDebounced]
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const repositionToolbar = () => {
      const pos = getStoredToolbarPosition();
      if (!pos) return;
      dragToolbar(pos);
      tooltipRef.current?.checkOverflow();
    };

    repositionToolbar();

    window.addEventListener("resize", repositionToolbar);
    return () => {
      window.removeEventListener("resize", repositionToolbar);
    };
  }, [getStoredToolbarPosition, dragToolbar]);

  const tooltip = isForcedDraft
    ? "Draft enforced by dev env"
    : `${draft ? "Disable" : "Enable"} draft mode`;

  return (
    <div className={s.wrapper} ref={(ref) => setToolbarRef(ref)}>
      <DragHandle
        ref={dragHandleRef}
        onDrag={(pos) => {
          dragToolbar(pos);
          tooltipRef.current?.checkOverflow();
        }}
      >
        <div className={s.root} data-draft-active={isForcedDraft || draft}>
          {/* branch switcher */}
          <BranchSwitcher
            isForcedDraft={isForcedDraft}
            draft={draft}
            apiRref={ref}
            latestBranches={latestBranches}
            onRefChange={(newRef) => {
              const url = new URL(window.location.href);
              url.searchParams.set("bshb-preview-ref", newRef);
              window.history.replaceState(null, "", url.toString());
              window.dispatchEvent(new Event("__bshb_ref_changed"));
              setRef(newRef);
            }}
            getAndSetLatestBranches={getAndSetLatestBranches}
          />

          {/* draft mode button */}
          <Tooltip
            content={message || tooltip}
            ref={tooltipRef}
            forceVisible={Boolean(message)}
          >
            <button
              className={s.draft}
              data-active={isForcedDraft || draft}
              aria-label={`${draft ? "Disable" : "Enable"} draft mode`}
              data-loading={loading}
              disabled={isForcedDraft || loading}
              onClick={() => {
                if (loading || dragHandleRef.current?.hasDragged) return;

                if (draft) {
                  setLoading(true);
                  disableDraftMode()
                    .then(() => {
                      const url = new URL(window.location.href);
                      url.searchParams.delete("bshb-preview");
                      url.searchParams.delete("__vercel_draft");

                      window.location.href = url.toString();
                    })
                    .finally(() => setLoading(false));
                } else {
                  const previewToken =
                    bshbPreviewToken ?? seekAndStoreBshbPreviewToken();
                  if (!previewToken) {
                    return displayMessage("No preview token found");
                  }

                  triggerDraftMode(previewToken);
                }
              }}
            >
              {draft || isForcedDraft ? <EyeIcon /> : <EyeDashedIcon />}
            </button>
          </Tooltip>
        </div>
      </DragHandle>
    </div>
  );
};

const EyeDashedIcon = () => {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};

const EyeIcon = () => {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};
