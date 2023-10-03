import * as bshb from "basehub";
import { RenderBaseHubRichText } from "basehub/react";

export default async function HomePage() {
  const firstQuery = await bshb.basehub({ next: { revalidate: 1 } }).query({
    blogIndex: {
      blogIndex: true,
    },
  });

  return (
    <main>
      <pre>{JSON.stringify(firstQuery, null, 2)}</pre>
      <br />
      <RenderBaseHubRichText html="<h1>Holis</h1>" />
    </main>
  );
}
