import { Pump } from "basehub/react-pump";
import { CodeBlock } from "basehub/react-code-block";

export default function HomePage() {
  return (
    <>
      <CodeBlock
        snippets={[{ code: 'const hello = "world"', language: "ts" }]}
        theme={"andromeeda"}
      />
      <Pump
        queries={[
          {
            homepage: {
              heroTitle: { html: true },
            },
          },
        ]}
        bind={{
          someParam: "someValue",
        }}
      >
        {async (params, [data]) => {
          "use server";

          data.homepage.heroTitle?.html;
          params.someParam;

          return (
            <div>
              <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </div>
          );
        }}
      </Pump>
    </>
  );
}
