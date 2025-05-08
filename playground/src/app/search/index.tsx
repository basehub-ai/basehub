"use client";
import { SearchBox, useSearch } from "basehub/react-search";
import s from "./search.module.css";

export const Search = ({ keys }: { keys: [string, string] }) => {
  const topLevelSearch = useSearch({
    _searchKey: keys[0],
    queryBy: ["_title", "description"],
    saveRecentSearches: {
      getStorage: () => {
        try {
          return window.localStorage;
        } catch (e) {
          return null;
        }
      },
      key: "recent-searches",
    },
  });

  const articlesSearch = useSearch({
    _searchKey: keys[1],
    queryBy: ["_title", "content", "excerpt"],
  });

  const joinedSearch: ReturnType<typeof useSearch> = {
    result: {
      empty: Boolean(
        topLevelSearch.result?.empty && articlesSearch.result?.empty
      ),
      found:
        (topLevelSearch.result?.found || 0) +
        (articlesSearch.result?.found || 0),
      outOf:
        (topLevelSearch.result?.outOf || 0) +
        (articlesSearch.result?.outOf || 0),
      page: Math.max(
        topLevelSearch.result?.page || 0,
        articlesSearch.result?.page || 0
      ),
      searchTimeMs: Math.max(
        topLevelSearch.result?.searchTimeMs || 0,
        articlesSearch.result?.searchTimeMs || 0
      ),
      hits: [
        ...(topLevelSearch.result?.hits || []),
        ...(articlesSearch.result?.hits || []),
      ].sort((a, b) => {
        return a.textMatch < b.textMatch ? -1 : 1;
      }),
    },
    onQueryChange: async (q) => {
      const promises = [];
      if (topLevelSearch.valid) {
        promises.push(topLevelSearch.onQueryChange(q));
      }
      if (articlesSearch.valid) {
        promises.push(articlesSearch.onQueryChange(q));
      }
      await Promise.all(promises);
    },
    // we'll use the topLevelSearch to store all recentSearches no matter what collection they belong to
    recentSearches: topLevelSearch.recentSearches,
    query: topLevelSearch.query ?? "",
    valid: true,
  };

  return (
    <SearchBox.Root search={joinedSearch}>
      <SearchBox.Input autoFocus />
      <SearchBox.Placeholder asChild>
        <SearchBox.HitList asChild>
          <ul>
            <h3>Recent Searches</h3>
            {joinedSearch.recentSearches?.hits?.map((hit) => {
              let pathname = hit.document._slug;
              const bodyHighlight = hit._getFieldHighlight("body");
              if (
                bodyHighlight?.highlightedField?._type ===
                  "rich-text-section" &&
                bodyHighlight.highlightedField._id
              ) {
                pathname += `#${bodyHighlight.highlightedField._id}`;
              }
              return (
                <li key={hit._key}>
                  <SearchBox.HitItem
                    hit={hit}
                    href={`/docs/${pathname}`}
                    className={s.hit}
                  >
                    <SearchBox.HitSnippet fieldPath="_title" />
                    <SearchBox.HitSnippet fieldPath="body" />
                  </SearchBox.HitItem>

                  <button
                    onClick={() => {
                      joinedSearch.recentSearches?.remove(hit._key);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </SearchBox.HitList>
      </SearchBox.Placeholder>
      <SearchBox.Empty>
        <div>No results found for {joinedSearch.query}</div>
      </SearchBox.Empty>
      <SearchBox.HitList asChild>
        <ul style={{ maxHeight: 200, overflowY: "auto" }}>
          {joinedSearch.result?.hits.map((hit) => {
            let pathname = hit.document._slug;

            const bodyHighlight = hit._getFieldHighlight("content");
            if (
              bodyHighlight?.highlightedField?._type === "rich-text-section" &&
              bodyHighlight.highlightedField._id
            ) {
              pathname += `#${bodyHighlight.highlightedField._id}`;
            }

            return (
              <li key={hit._key}>
                <SearchBox.HitItem
                  key={hit._key}
                  hit={hit}
                  href={`/docs/${pathname}`}
                  className={s.hit}
                >
                  <SearchBox.HitSnippet
                    fieldPath="_title"
                    components={{
                      container: ({ children }) => <h3>{children}</h3>,
                    }}
                  />
                  <SearchBox.HitSnippet
                    fieldPath="content"
                    fallbackFieldPaths={["excerpt", "description"]}
                    components={{
                      container: ({ children }) => <p>{children}</p>,
                    }}
                  />
                </SearchBox.HitItem>
              </li>
            );
          })}
        </ul>
      </SearchBox.HitList>
    </SearchBox.Root>
  );
};
