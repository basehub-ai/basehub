import * as React from "react";
import { Client } from "typesense";
import type {
  SearchParams,
  SearchResponse,
} from "typesense/lib/Typesense/Documents";

/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/

const decodeKey = (key: string) => {
  const [domain, apiKey, collectionName] = key.split(":");

  if (typeof domain !== "string") {
    throw new Error(`Couldn't get domain from key: ${key}`);
  }
  if (typeof apiKey !== "string") {
    throw new Error(`Couldn't get apiKey from key: ${key}`);
  }
  if (typeof collectionName !== "string") {
    throw new Error(`Couldn't get collectionName from key: ${key}`);
  }

  return { domain, apiKey, collectionName };
};

const camelToSnake = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

/* -------------------------------------------------------------------------------------------------
 * Get Search Client
 * -----------------------------------------------------------------------------------------------*/

export const getSearchClient = (
  /**
   * The _searchKey taken from a collection of our GraphQL API.
   */
  key: string
) => {
  const { domain, apiKey } = decodeKey(key);

  return new Client({
    apiKey,
    nodes: [{ host: domain, port: 443, protocol: "https" }],
  });
};

/* -------------------------------------------------------------------------------------------------
 * useSearch
 * -----------------------------------------------------------------------------------------------*/

export type SearchOptions = {
  queryBy?: SearchParams["query_by"];
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

export type SearchResult = {
  id: string;
};

/**
 * Everything you need to create an instant-search experience.
 */
export const useSearch = <Document extends { _id: string }>(
  /**
   * The _searchKey taken from a collection of our GraphQL API.
   */
  key: string,
  /**
   * See https://typesense.org/docs/26.0/api/search.html#search-parameters
   * for more information about search options.
   */
  defaultSearchOptions?: SearchOptions
) => {
  const { collectionName } = decodeKey(key);

  const client = React.useMemo(() => {
    return getSearchClient(key);
  }, [key]);

  type Result = SearchResponse<Document>;

  const [result, setResult] = React.useState<Result>();
  const hits = result?.hits;

  const defaultSearchOptionsRef = React.useRef(defaultSearchOptions);
  defaultSearchOptionsRef.current = defaultSearchOptions;

  const search = React.useCallback(
    async (q: string, opts?: SearchOptions): Promise<Result> => {
      const options: Record<string, unknown> = { q };

      Object.entries({ ...defaultSearchOptionsRef.current, ...opts }).forEach(
        ([key, value]) => {
          options[camelToSnake(key)] = value;
        }
      );

      const result = await client
        .collections<Document>(collectionName)
        .documents()
        .search(options);

      setResult(result);
      return result;
    },
    [client, collectionName]
  );

  return React.useMemo(() => {
    return { search, result, hits };
  }, [hits, result, search]);
};
