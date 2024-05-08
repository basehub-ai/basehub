import * as React from "react";
import { Client } from "typesense";
import type { SearchParams } from "typesense/lib/Typesense/Documents";
import get from "lodash.get";
// import { Slot } from "@radix-ui/react-slot";

/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/

const decodeKey = (_searchKey: string) => {
  const [domain, apiKey, collectionName] = _searchKey.split(":");

  if (typeof domain !== "string") {
    throw new Error(`Couldn't get domain from _searchKey: ${_searchKey}`);
  }
  if (typeof apiKey !== "string") {
    throw new Error(`Couldn't get apiKey from _searchKey: ${_searchKey}`);
  }
  if (typeof collectionName !== "string") {
    throw new Error(
      `Couldn't get collectionName from _searchKey: ${_searchKey}`
    );
  }

  return { domain, apiKey, collectionName };
};

const camelToSnake = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

function deFlatten(flattened: object) {
  const newObject: Record<string, unknown> = {};
  Object.keys(flattened).forEach((key) => {
    const splitted = key.split(".");
    let previous: any = {};
    let current: any = {};
    splitted.forEach((split, i) => {
      const parent = splitted[i - 1];
      const isFirst = i === 0;
      const isLast = i === splitted.length - 1;

      const splitAsNumber = Number(split);
      const isArrayItem = Number.isNaN(splitAsNumber) === false;

      if (isArrayItem) {
        if (parent) {
          if (!previous[parent] || Array.isArray(previous[parent]) === false) {
            previous[parent] = [];
            current = previous[parent];
          }
        }
      }

      const newVal = {};
      const newKey = isArrayItem ? splitAsNumber : split;

      if (isFirst) {
        previous = newObject;
        newObject[newKey] = isLast
          ? // @ts-ignore
            flattened[key]
          : newObject[newKey] ?? newVal;
        current = newObject[newKey];
      } else {
        previous = current;
        current[newKey] = isLast
          ? // @ts-ignore
            flattened[key]
          : current[newKey] ?? newVal;
        current = current[newKey];
      }
    });
  });
  return newObject;
}

/* -------------------------------------------------------------------------------------------------
 * Get Search Client
 * -----------------------------------------------------------------------------------------------*/

export const getSearchClient = (
  /**
   * The _searchKey taken from a collection of our GraphQL API.
   */
  _searchKey: string
) => {
  const { domain, apiKey } = decodeKey(_searchKey);

  return new Client({
    apiKey,
    nodes: [{ host: domain, port: 443, protocol: "https" }],
  });
};

/* -------------------------------------------------------------------------------------------------
 * useSearch
 * -----------------------------------------------------------------------------------------------*/

export type SearchOptions = {
  queryBy: SearchParams["query_by"];
  filterBy?: SearchParams["filter_by"];
  sortBy?: SearchParams["sort_by"];
  groupBy?: SearchParams["group_by"];
  includeFields?: SearchParams["include_fields"];
  excludeFields?: SearchParams["exclude_fields"];
  page?: SearchParams["page"];
  perPage?: SearchParams["per_page"];
  query?: SearchParams["q"];
  highlightFields?: SearchParams["highlight_fields"];
  highlightFullFields?: SearchParams["highlight_full_fields"];
  highlightStartTag?: SearchParams["highlight_start_tag"];
  highlightEndTag?: SearchParams["highlight_end_tag"];
  limitHits?: SearchParams["limit_hits"];
  pinnedHits?: SearchParams["pinned_hits"];
  hiddenHits?: SearchParams["hidden_hits"];
  offset?: SearchParams["offset"];
  limit?: SearchParams["limit"];
  stopwords?: SearchParams["stopwords"];
  numTypos?: SearchParams["num_typos"];
  prioritizeExactMatch?: SearchParams["prioritize_exact_match"];
  textMatchType?: SearchParams["text_match_type"];
  prefix?: SearchParams["prefix"];
  queryByWeights?: SearchParams["query_by_weights"];
};

type Highlight = {
  fieldPath: string;
  fieldValue: unknown;
  indices: number[];
  matchedTokens: string[] | string[][];
  mainSnippet: string | undefined;
  snippets: string[];
  value: string | undefined;
};

export type SearchResult<Doc extends { _id: string }> = {
  empty: boolean;
  found: number;
  outOf: number;
  page: number;
  searchTimeMs: number;
  hits: Array<{
    document: Doc;
    mainHighlight: Highlight | undefined;
    highlights: Array<Highlight>;
    curated: boolean;
  }>;
};

export type UseSearchParams = {
  /**
   * The _searchKey taken from a collection of our GraphQL API.
   */
  _searchKey: string;
  /**
   * See https://typesense.org/docs/26.0/api/search.html#search-parameters
   * for more information about search options.
   */
  searchOptions: SearchOptions;
};

/**
 * Everything you need to create an instant-search experience.
 */
export const useSearch = <Document extends { _id: string }>({
  _searchKey,
  searchOptions,
}: UseSearchParams) => {
  const { collectionName } = decodeKey(_searchKey);

  const client = React.useMemo(() => {
    return getSearchClient(_searchKey);
  }, [_searchKey]);

  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState<SearchResult<Document>>();

  const searchOptionsRef = React.useRef(searchOptions);
  searchOptionsRef.current = searchOptions;

  const search = React.useCallback(
    async (q: string, opts?: SearchOptions): Promise<typeof result> => {
      const options: Record<string, unknown> = { q };
      Object.entries({ ...searchOptionsRef.current, ...opts }).forEach(
        ([key, value]) => {
          options[camelToSnake(key)] = value;
        }
      );

      const rawResult = await client
        .collections(collectionName)
        .documents()
        .search(options);

      const newResult: typeof result = {
        empty: !rawResult.found,
        found: rawResult.found,
        outOf: rawResult.out_of,
        page: rawResult.page,
        searchTimeMs: rawResult.search_time_ms,
        hits:
          rawResult.hits?.map((hit) => {
            const document = deFlatten(hit.document) as Document;
            const highlights =
              hit.highlights?.map((highlight) => {
                const fieldPath = highlight.field as string;

                return {
                  fieldPath,
                  fieldValue: get(document, fieldPath) as unknown,
                  indices: highlight.indices ?? [],
                  matchedTokens: highlight.matched_tokens,
                  mainSnippet: highlight.snippet,
                  snippets: highlight.snippets ?? [],
                  value: highlight.value,
                };
              }) ?? [];
            return {
              curated: hit.curated ?? false,
              document,
              mainHighlight: highlights[0],
              highlights,
            };
          }) ?? [],
      };

      return newResult;
    },
    [client, collectionName]
  );

  const onQueryChange = React.useCallback(
    async (q: string) => {
      setQuery(q);
      const r = await search(q);
      setResult(r);
    },
    [search]
  );

  return { result, query, onQueryChange };
};

export type UseSearchResult = ReturnType<typeof useSearch>;

/* -------------------------------------------------------------------------------------------------
 * Combobox
 * -----------------------------------------------------------------------------------------------*/

// const Context = React.createContext<UseSearchResult | undefined>(undefined);

// const useContext = () => {
//   const ctx = React.useContext(Context);
//   if (ctx === undefined) {
//     throw new Error(
//       "Context not found. Make sure you're rendering Search.Root on top of other Search.* components."
//     );
//   }
//   return ctx;
// };

// const Root = ({
//   children,
//   _searchKey,
//   searchOptions,
// }: { children?: React.ReactNode } & UseSearchParams) => {
//   const useSearchResult = useSearch({ _searchKey, searchOptions });

//   return (
//     <Context.Provider value={useSearchResult}>{children}</Context.Provider>
//   );
// };

// const Input = React.forwardRef<
//   HTMLInputElement,
//   Omit<JSX.IntrinsicElements["input"] & { asChild?: boolean }, "ref">
// >(({ asChild, ...props }, ref) => {
//   const { query, onQueryChange } = useContext();
//   const Comp = asChild ? Slot : "input";

//   return (
//     <Comp
//       {...props}
//       value={query}
//       onChange={(e) => {
//         if (e.target instanceof HTMLInputElement) {
//           onQueryChange(e.target.value);
//         }
//       }}
//       ref={ref}
//     />
//   );
// });

// const Empty = React.forwardRef<
//   HTMLDivElement,
//   Omit<JSX.IntrinsicElements["div"] & { asChild?: boolean }, "ref">
// >(({ asChild, ...props }, ref) => {
//   const { result } = useContext();
//   const Comp = asChild ? Slot : "div";

//   if (result?.empty === true) {
//     return <Comp {...props} ref={ref} />;
//   } else {
//     return null;
//   }
// });

// const ResultsList = React.forwardRef<
//   HTMLDivElement,
//   Omit<JSX.IntrinsicElements["div"] & { asChild?: boolean }, "ref">
// >(({ asChild, ...props }, ref) => {
//   const { result } = useContext();
//   const Comp = asChild ? Slot : "div";

//   if (result?.empty === true) {
//     return <Comp {...props} ref={ref} />;
//   } else {
//     return null;
//   }
// });

// const Hit = React.forwardRef<
//   HTMLDivElement,
//   Omit<JSX.IntrinsicElements["div"] & { asChild?: boolean }, "ref">
// >(({ asChild, ...props }, ref) => {
//   const { result } = useContext();
//   const Comp = asChild ? Slot : "div";

//   if (result?.empty === true) {
//     return <Comp {...props} ref={ref} />;
//   } else {
//     return null;
//   }
// });

// export const Search = {
//   Root,
//   Input,
//   Empty,
//   useContext,
// };
