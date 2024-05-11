"use client";
import { useState } from "react";
import { SearchBox, useSearch } from "../../../.basehub/react-search";
import s from "./search.module.css";

export const Search = () => {
  const [open, setOpen] = useState(false);

  const search = useSearch<{ some: "thing" }>({
    _searchKey:
      "k19b3p50ue6irgvnp-1.a1.typesense.net:YjY3bk8zVDFOY05mbTlCczk4U1dpU2Nqa2FTTHJKNXBxRHJPSWlHcTVRRT1WRnRteyJmaWx0ZXJfYnkiOiJfY29sbGVjdGlvbklkOnFmZDVva2FnaTA0eHc0ZmNmZjV6d3UyYSJ9:dbjFgtnqgk7aCqonrqA8Z__tm8owg2lnuah5n62mm56qqc7__zhzxbpr40ied562l74zvrdwg",
    queryBy: ["_title", "content"],
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
            <SearchBox.HitsList asChild>
              <ul>
                <h3>Recent Searches</h3>
                {search.recentSearches?.hits?.map((hit) => {
                  return (
                    <li key={hit._key}>
                      <SearchBox.HitItem
                        hit={hit}
                        href={`/doc/${hit.document._id}`}
                        className={s.hit}
                      >
                        <SearchBox.HitSnippet fieldPath="_title" />
                        <SearchBox.HitSnippet fieldPath="content" />
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
            </SearchBox.HitsList>
          </SearchBox.Placeholder>
          <SearchBox.Empty>
            <div>No results found for {search.query}</div>
          </SearchBox.Empty>
          <SearchBox.HitsList asChild>
            <ul style={{ maxHeight: 200, overflowY: "auto" }}>
              {search.result?.hits.map((hit) => {
                return (
                  <li key={hit._key}>
                    <SearchBox.HitItem
                      key={hit._key}
                      hit={hit}
                      href={`/doc/${hit.document._id}`}
                      className={s.hit}
                    >
                      <SearchBox.HitSnippet fieldPath="_title" />
                      <SearchBox.HitSnippet fieldPath="content" />
                    </SearchBox.HitItem>
                  </li>
                );
              })}
            </ul>
          </SearchBox.HitsList>
        </SearchBox.Root>
      )}
    </>
  );
};
