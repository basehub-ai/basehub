import { basehub } from "basehub";

export default async function ClientPage() {
  "use cache";

  const data = await basehub().query({
    blog: {
      posts: {
        items: {
          date: true,
        },
      },
    },
  });

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
}
