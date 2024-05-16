"use client";
import { useState } from "react";
import { SearchBox, useSearch } from "../../../.basehub/react-search";
import s from "./search.module.css";

export const Search = () => {
  const [open, setOpen] = useState(false);

  const search = useSearch<{ some: "thing" }>({
    _searchKey:
      "k19b3p50ue6irgvnp-1.a1.typesense.net:iH0LYufEw4sAk3aihviwX9tthXlzy6t8:RzwcwGKShcB0pBmOiUseY__6cilu6IceejaWHUYQoIWC__GOSCkL1oxXpFlktOiuZY_",
    queryBy: ["_title", "body", "excerpt"],
    saveRecentSearches: {
      getStorage: () => window.localStorage,
      key: "recent-searches",
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        TOGGLE
      </button>
      <br />
      {open && (
        <SearchBox.Root search={search}>
          <SearchBox.Input autoFocus />
          <SearchBox.Placeholder asChild>
            <SearchBox.HitList asChild>
              <ul>
                <h3>Recent Searches</h3>
                {search.recentSearches?.hits?.map((hit) => {
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
                          search.recentSearches?.remove(hit._key);
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
            <div>No results found for {search.query}</div>
          </SearchBox.Empty>
          <SearchBox.HitList asChild>
            <ul style={{ maxHeight: 200, overflowY: "auto" }}>
              {search.result?.hits.map((hit) => {
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
                      key={hit._key}
                      hit={hit}
                      href={`/docs/${pathname}`}
                      className={s.hit}
                    >
                      <SearchBox.HitSnippet fieldPath="_title" />
                      <SearchBox.HitSnippet
                        fieldPath="body"
                        fallbackFieldPaths={["excerpt"]}
                      />
                    </SearchBox.HitItem>
                  </li>
                );
              })}
            </ul>
          </SearchBox.HitList>
        </SearchBox.Root>
      )}
    </>
  );
};
