"use client";
import * as React from "react";
import { CodeBlockContext } from "./client/context";
import { ClientSnippet } from "./types";

export type CodeBlockClientControllerProps = {
  children?: React.ReactNode;
  snippets: Array<ClientSnippet>;
  storeSnippetSelection: boolean;
  groupId: string;
};

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

const CodeBlockClientController = ({
  children,
  snippets,
  storeSnippetSelection,
  groupId,
}: CodeBlockClientControllerProps) => {
  "use client";

  const isSingleSnippet = snippets.length === 1;

  const [activeSnippet, setActiveSnippet] = React.useState<
    ClientSnippet | undefined
  >(snippets[0]);

  React.useEffect(() => {
    const snippets = document.querySelectorAll<HTMLDivElement>(
      `[data-snippet-group-id="${groupId}"]`
    );

    snippets.forEach((div) => {
      if (div.getAttribute("data-snippet-id") === activeSnippet?.id) {
        div.style.display = "block";
        div.setAttribute("data-active", "true");
      } else {
        div.style.display = "none";
        div.setAttribute("data-active", "false");
      }
    });
  }, [activeSnippet, groupId]);

  /**
   * Save snippet selection with localStorage.
   */
  const localStorageKey =
    !isSingleSnippet && storeSnippetSelection
      ? `__bshb-active-snippet-for-${snippets
          .map((s) => s.label || s.id)
          .sort((a, b) => a.localeCompare(b))
          .join("-")}`
      : null;

  React.useEffect(() => {
    if (!localStorageKey) return;
    const activeSnippetFromLS = window.localStorage.getItem(localStorageKey);
    if (activeSnippetFromLS) {
      const snippet = snippets.find(
        (s) => s.label === activeSnippetFromLS || s.id === activeSnippetFromLS
      );
      if (snippet) setActiveSnippet(snippet);
    }

    /**
     * Sync active snippet throughout multiple code snippets throughout the page.
     */
    function handleSnippetChange(
      event: CustomEvent<{ key: string; snippet: ClientSnippet }>
    ) {
      if (event.detail.key !== localStorageKey) return;
      const newActiveSnippet = snippets.find(
        (s) =>
          s.label === event.detail.snippet.label ||
          s.id === event.detail.snippet.id
      );
      if (newActiveSnippet) {
        setActiveSnippet(newActiveSnippet);
      }
    }

    // @ts-ignore
    window.addEventListener("__bshb-snippet-change", handleSnippetChange);
    return () => {
      // @ts-ignore
      window.removeEventListener("__bshb-snippet-change", handleSnippetChange);
    };
  }, [localStorageKey, snippets]);

  const selectSnippet = React.useCallback(
    (snippet: ClientSnippet) => {
      setActiveSnippet(snippet);
      if (!localStorageKey) return;
      window.localStorage.setItem(localStorageKey, snippet.label || snippet.id);
      const event = new CustomEvent("__bshb-snippet-change", {
        detail: { key: localStorageKey, snippet },
      });
      window.dispatchEvent(event);
    },
    [localStorageKey]
  );

  return (
    <CodeBlockContext.Provider
      value={{ snippets, activeSnippet, selectSnippet, groupId }}
    >
      {children}
    </CodeBlockContext.Provider>
  );
};

export default CodeBlockClientController;
