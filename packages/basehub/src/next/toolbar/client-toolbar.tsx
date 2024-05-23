"use client";

import * as React from "react";

export const ClientToolbar = ({
  draft,
  enableDraftMode,
  disableDraftMode,
}: {
  draft: boolean;
  enableDraftMode: (
    bshbPreviewToken: string
  ) => Promise<{ status: number; response: object }>;
  disableDraftMode: () => void;
}) => {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [automaticDraftDetection, setAutomaticDraftDetection] =
    React.useState(true);

  const updateBshbPreviewToken = (value: string | undefined) => {
    setBshbPreviewToken(value);
    if (!value) return
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
            updateBshbPreviewToken(undefined);
            displayMessage(`Draft mode activation error: ${response.error}`);
          } else {
            updateBshbPreviewToken(undefined);
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
    enableDraftMode,
    seekAndStoreBshbPreviewToken,
    bshbPreviewToken,
    displayMessage,
    triggerDraftMode,
    draft,
    automaticDraftDetection,
  ]);

  return (
    <>
      {/* branch switcher eventually */}
      <div
        style={{
          paddingInline: 10,
          height: "100%",
          background: draft ? "#0C0C0C" : "",
          borderRight: "1px solid #252525",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BranchIcon />
        &nbsp;main
      </div>
      <button
        style={{
          all: 'unset',
          display: 'flex',
          cursor: loading ? "wait" : "pointer",
          background: draft ? "#FF6C02" : "#000",
          padding: 10,
          color: draft ? "#000" : "#646464",
        }}
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

            window.history.replaceState({}, "", urlWithoutPreview);
          } else {
            const previewToken =
              bshbPreviewToken ?? seekAndStoreBshbPreviewToken();
            if (!previewToken) return displayMessage("No preview token found");

            triggerDraftMode(previewToken);
          }
        }}
      >
        <EyeIcon />
      </button>

      <p
        style={{
          position: "fixed",
          bottom: 80,
          right: 32,
          borderRadius: 6,
          fontSize: 14,
          zIndex: 1000,
          padding: "6px 10px",
          visibility: message ? "visible" : "hidden",
          pointerEvents: message ? "auto" : "none",
          userSelect: message ? "auto" : "none",
          color: "white",
          display: "flex",
          alignItems: "center",
          border: "1px solid #252525",
          background: "#040404",
        }}
      >
        {message}
      </p>
    </>
  );
};

const EyeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.596 8C3.03 10.122 5.303 11.5 8 11.5s4.97-1.378 6.404-3.5C12.97 5.878 10.697 4.5 8 4.5S3.03 5.878 1.596 8Zm-1.02-.265C2.156 5.206 4.808 3.5 8 3.5s5.844 1.706 7.424 4.235a.5.5 0 0 1 0 .53C13.844 10.794 11.192 12.5 8 12.5S2.156 10.794.576 8.265a.5.5 0 0 1 0-.53Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
};

const BranchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none">
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.638 4.97a1.042 1.042 0 1 0 0-2.085 1.042 1.042 0 0 0 0 2.085Zm0 .886a1.93 1.93 0 1 0 .002-3.858 1.93 1.93 0 0 0-.002 3.858ZM4.362 13.114a1.042 1.042 0 1 0 0-2.085 1.042 1.042 0 0 0 0 2.085Zm0 .886a1.929 1.929 0 1 0 .002-3.858A1.929 1.929 0 0 0 4.362 14Z"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.806 7.982v3.04h-.888v-3.04h.888ZM11.082 5.331v2.245h-.888V5.331h.888Z"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.082 7.54a.443.443 0 0 1-.444.442h-6.23a.443.443 0 1 1 0-.886h6.23c.245 0 .444.199.444.443ZM4.362 2.886a1.042 1.042 0 1 1 0 2.085 1.042 1.042 0 0 1 0-2.085Zm0-.886a1.929 1.929 0 1 1 .002 3.858A1.929 1.929 0 0 1 4.362 2Z"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M4.806 8.018v-3.04h-.888v3.04h.888Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
