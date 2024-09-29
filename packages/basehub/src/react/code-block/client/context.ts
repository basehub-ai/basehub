import * as React from "react";
import { ClientSnippet } from "../types";

export const CodeBlockContext = React.createContext<
  | {
      snippets: Array<ClientSnippet>;
      activeSnippet: ClientSnippet | undefined;
      selectSnippet: (snippet: ClientSnippet) => void;
      groupId: string;
    }
  | undefined
>(undefined);

export const useCodeBlockContext = () => {
  const ctx = React.useContext(CodeBlockContext);
  if (ctx === undefined) {
    throw new Error(
      "Context not found. Make sure to render CodeBlock on top this hook call."
    );
  }
  return ctx;
};
