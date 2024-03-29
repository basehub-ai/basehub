"use client";
import { useCodeBlock } from "basehub/react-code-block";

export const CodeBlockHeader = () => {
  const { activeSnippet } = useCodeBlock();

  return (
    <div>
      Active: {activeSnippet?.id ?? "none"}
      <button onClick={() => {}}>copy snippet</button>
    </div>
  );
};
