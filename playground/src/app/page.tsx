import { Pump } from "basehub/react-pump";
import { CodeBlock } from "basehub/react-code-block";
// import { basehub } from "basehub";

export default async function HomePage() {
  // await basehub().mutation({
  //   transaction: {
  //     __args: {
  //       data: {
  //         some: {
  //           dude: true,
  //         },
  //       },
  //     },
  //     id: true,
  //   },
  // });

  return (
    <>
      <CodeBlock
        snippets={[{ code: 'const hello = "world"', language: "ts" }]}
        theme={"andromeeda"}
      />
      <Pump
        queries={[{ homepage: { heroTitle: { html: true } } }]}
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
      this one targets a different ref
      <Pump
        _ref="FdhB3Vr5gK0s4S582524R"
        queries={[
          {
            homepage: {
              _id: true,
              branching: {
                sectionTitle: true,
              },
            },
          },
        ]}
      >
        {async ([data]) => {
          "use server";

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
