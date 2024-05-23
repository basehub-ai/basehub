import { basehub } from "basehub";
import { BaseHubToolbar } from 'basehub/next-toolbar'
import { Counter } from "./counter";
import { Search } from "./search";

export default async function HomePage() {
  const { homepage } = await basehub().query({
    homepage: {
      _analyticsKey: true,
    },
  });

  return (
    <main className="">
      <BaseHubToolbar />
      <Counter _analyticsKey={homepage._analyticsKey} />
      <Search />
    </main>
  );
}
