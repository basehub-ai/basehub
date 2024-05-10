"use client";
import { useState } from "react";
import { SearchBox, useSearch } from "../../../.basehub/react-search";
import s from "./search.module.css";

export const Search = () => {
  const [count, setCount] = useState(0);

  const search = useSearch({
    _searchKey:
      "k19b3p50ue6irgvnp-1.a1.typesense.net:YjY3bk8zVDFOY05mbTlCczk4U1dpU2Nqa2FTTHJKNXBxRHJPSWlHcTVRRT1WRnRteyJmaWx0ZXJfYnkiOiJfY29sbGVjdGlvbklkOnFmZDVva2FnaTA0eHc0ZmNmZjV6d3UyYSJ9:dbjFgtnqgk7aCqonrqA8Z__tm8owg2lnuah5n62mm56qqc7__zhzxbpr40ied562l74zvrdwg",
    queryBy: ["_title", "content"],
  });

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
      <br />
      <SearchBox.Root search={search}>
        <SearchBox.Input />
        <SearchBox.Placeholder>
          <div>Search for something</div>
        </SearchBox.Placeholder>
        <SearchBox.Empty>
          <div>No results found for {search.query}</div>
        </SearchBox.Empty>
        <SearchBox.Results asChild>
          <ul>
            {search.result?.hits.map((hit) => {
              return (
                <li key={hit._key}>
                  <SearchBox.Hit
                    key={hit._key}
                    hit={hit}
                    href={`/doc/${hit.document._id}`}
                    className={s.hit}
                  >
                    <SearchBox.HitSnippet fieldPath="_title" />
                    <SearchBox.HitSnippet fieldPath="content" />
                  </SearchBox.Hit>
                </li>
              );
            })}
          </ul>
        </SearchBox.Results>
      </SearchBox.Root>
    </>
  );
};
