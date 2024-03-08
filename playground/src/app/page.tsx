import { Pump } from "../../.basehub/react-pump";

export default async function HomePage() {
  return (
    <main>
      <Pump
        draft
        queries={[{ homepage: { heroTitle: true } }]}
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
