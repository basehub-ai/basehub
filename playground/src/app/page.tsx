import { basehub } from "basehub";

export default async function HomePage() {
  const data = await basehub({ cache: "no-cache" }).query({
    _sys: {
      id: true,
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
