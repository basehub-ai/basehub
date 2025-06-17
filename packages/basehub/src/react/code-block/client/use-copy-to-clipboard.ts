import * as React from "react";
import { useCodeBlockContext } from "./context.js";

export const useCopyToClipboard = (opts?: { copiedDurationMs?: number }) => {
  const { activeSnippet, groupId } = useCodeBlockContext();
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(
      () => {
        setCopied(false);
      },
      opts?.copiedDurationMs ?? 2000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [copied, opts?.copiedDurationMs]);

  const onCopy = React.useCallback(() => {
    const element =
      document.querySelector<HTMLDivElement>(
        `[data-snippet-id="${activeSnippet?.id}"]`
      ) ??
      document.querySelector<HTMLDivElement>(
        `[data-snippet-group-id="${groupId}"]`
      );
    if (!element) return;
    navigator.clipboard.writeText(element.textContent ?? "");
    setCopied(true);
  }, [activeSnippet?.id, groupId]);

  return { onCopy, copied };
};
