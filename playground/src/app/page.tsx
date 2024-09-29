import { basehub } from "basehub";

export default async function HomePage() {
  const data = await basehub({ cache: "no-cache" }).query({
    _sys: {
      __typename: true,
      id: true,
    },
    collections: {
      authors: {
        __args: {
          first: 5,
        },
        items: {
          _id: true,
        },
      },
    },
  });

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
