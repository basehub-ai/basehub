import { basehub } from "basehub";
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
      <Counter _analyticsKey={homepage._analyticsKey} />
      <Search />
    </main>
  );
}
