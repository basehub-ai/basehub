import { Pump } from "../../.basehub/next-pump";

export default async function HomePage() {
  return (
    <main>
      <h1>Does it work?</h1>
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
          _sys: {
            id: true,
          },
          doc: {
            heroTitle: true,
            _title: true,
          },
        }}
      >
        {async (data) => {
          "use server";

          if (!data) return null;
          return <h1>{JSON.stringify(data, null, 2)}</h1>;
        }}
      </Pump>
    </main>
  );
}
