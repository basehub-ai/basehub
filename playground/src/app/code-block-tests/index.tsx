import { CodeBlock } from "basehub/react-code-block";
import { CodeBlockHeader } from "./header";

export const CodeBlockTests = () => {
  return (
    <div>
      <CodeBlock
        theme="github-dark"
        snippets={[
          {
            id: "1",
            lang: "javascript",
            code: `const a = 1;
const b = 2;
const c = a + b;
`,
          },
        ]}
      >
        <CodeBlockHeader />
      </CodeBlock>
    </div>
  );
};
