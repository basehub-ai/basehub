import { Pump } from "../../.basehub/react-pump";
import { CodeBlockTests } from "./code-block-tests";

export default async function HomePage() {
  return (
    <main>
      <CodeBlockTests />

      <br />
      <br />
      <br />

      <Pump
        draft
        queries={[
          {
            homepage: {
              _id: true,
            },
          },
        ]}
        cache="no-store"
      >
        {async ([{ homepage }]) => {
          "use server";

          return <div>{JSON.stringify(homepage, null, 2)}</div>;
        }}
      </Pump>
    </main>
  );
}
