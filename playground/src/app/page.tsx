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
          },
        }}
      >
        {async (data) => {
          "use server";

          if (!data) return null;
          return <h1>{data.doc.heroTitle}</h1>;
        }}
      </Pump>
    </main>
  );
}
