import { basehub } from "basehub";
import { Search } from "./search";

export default async function HomePage() {
  const data = await basehub().query({
    _componentInstances: {
      postsItem: {
        _searchKey: true,
      },
      sectionsItem: {
        _searchKey: true,
      },
    },
  });

  return (
    <main className="">
      <Search
        keys={[
          data._componentInstances.postsItem._searchKey,
          data._componentInstances.sectionsItem._searchKey,
        ]}
      />
    </main>
  );
}
