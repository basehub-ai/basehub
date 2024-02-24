import { Pump } from "../../.basehub/react-pump";

export default async function HomePage() {
  return (
    <main>
      <h1>Does it work?</h1>
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        queries={[
          {
            doc: {
              heroTitle: true,
              _title: true,
            },
          },
        ]}
      >
        {([data]) => {
          if (!data) return null;
          return <h1>{JSON.stringify(data, null, 2)}</h1>;
        }}
      </Pump>
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        queries={[
          {
            doc: {
              heroTitle: true,
              _title: true,
            },
          },
          {
            _sys: {
              hash: true,
            },
          },
        ]}
      >
        {async ([data, data2]) => {
          "use server";

          if (!data) return null;
          return (
            <h1>
              different return data even... {data.doc.heroTitle}{" "}
              {data2._sys.hash}
            </h1>
          );
        }}
      </Pump>
    </main>
  );
}
