"use client";
import * as React from "react";
import { Snippet } from "./primitive";

type ClientSnippet = Omit<Snippet, "code">;

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type CodeBlockClientControllerProps = {
  children?: React.ReactNode;
  snippets: Array<ClientSnippet>;
};

const CodeBlockContext = React.createContext<
  { activeSnippet: ClientSnippet | undefined } | undefined
>(undefined);

const CodeBlockClientController = ({
  children,
  snippets,
}: CodeBlockClientControllerProps) => {
  "use client";
  const [activeSnippet, _setActiveSnippet] = React.useState<
    ClientSnippet | undefined
  >(snippets[0]);

  return (
    <CodeBlockContext.Provider value={{ activeSnippet }}>
      {children}
    </CodeBlockContext.Provider>
  );
};

export default CodeBlockClientController;

export const useCodeBlock = () => {
  const context = React.useContext(CodeBlockContext);
  if (!context) {
    throw new Error("useCodeBlock must be used within a CodeBlockProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------------------------------
 * Copy Button
 * -----------------------------------------------------------------------------------------------*/

export const CopyButton = () => {
  const { activeSnippet } = useCodeBlock();
  if (!activeSnippet) {
    return null;
  }

  return <button>Copy</button>;
};
