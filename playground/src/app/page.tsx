import { basehub } from "basehub";
import { Toolbar } from "basehub/next-toolbar";
import { Counter } from "./counter";
import { Search } from "./search";

export default async function HomePage() {
  const { pages } = await basehub().query({
    pages: {
      _analyticsKey: true,
    },
  });

  return (
    <main className="">
      <Toolbar />
      <Counter _analyticsKey={pages._analyticsKey} />
      <Search />
    </main>
  );
}
