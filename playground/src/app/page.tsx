import { Pump } from "../../.basehub/next-pump";

export default async function HomePage() {
  return (
    <main>
      <h1>Does it work?</h1>
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
          doc: {
            heroTitle: true,
            _title: true,
            _id: true,
          },
        }}
      >
        {async (data) => {
          "use server";

          if (!data) return null;
          return (
            <h1>
              different return data even...{data.doc.heroTitle} {data.doc._id}
            </h1>
          );
        }}
      </Pump>
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
      <Pump
        draft
        token={process.env.BASEHUB_TOKEN!}
        query={{
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
