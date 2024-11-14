import { Client } from "typesense";
import type { SearchParams } from "typesense/lib/Typesense/Documents";
import get from "lodash.get";
import { getHitKey } from "./helpers";

/* -------------------------------------------------------------------------------------------------
 * Get Search Client
 * -----------------------------------------------------------------------------------------------*/

const clientMap = new Map<string, Client>();

export const getSearchClient = (
  /**
   * The _searchKey taken from a collection of our GraphQL API.
   */
  _searchKey: string | null
) => {
  if (!_searchKey) return;
  const { domain, apiKey, valid } = decodeKey(_searchKey);

  if (!valid) return;

  if (_searchKey && clientMap.has(_searchKey)) {
    return clientMap.get(_searchKey);
  }

  const client = new Client({
    apiKey,
    nodes: [{ host: domain, port: 443, protocol: "https" }],
    useServerSideSearchCache: true,
  });

  clientMap.set(_searchKey, client);
  return client;
};

/* -------------------------------------------------------------------------------------------------
 * Search Client
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

export type BaseDoc = {
  _id: string;
  _idPath: string;
  _title?: string;
  _slug?: string;
  _slugPath?: string;
};

export type Highlight = {
  fieldPath: string;
  fieldValue: unknown;
  indices: number[];
  matchedTokens: string[] | string[][];
  snippet: string | undefined;
  snippets: string[];
  value: string | undefined;
};

export type Hit<Doc = Record<string, unknown>> = {
  _key: string;
  document: Doc & BaseDoc;
  highlight: Record<string, Highlight> | undefined;
  highlights: Array<Highlight>;
  curated: boolean;
  textMatch: number;
  _getField: (fieldPath: string) => unknown;
  _getFieldHighlight: (
    fieldPath: string,
    fallbackFieldPaths?: string[]
  ) => ReturnType<typeof _getFieldHighlightImpl>;
};

export type SearchResult<Doc = Record<string, unknown>> = {
  empty: boolean;
  found: number;
  outOf: number;
  page: number;
  searchTimeMs: number;
  hits: Array<Hit<Doc>>;
};

export const search = async <Document extends Record<string, unknown>>(
  _searchKey: string | null,
  q: string,
  opts: SearchOptions
): Promise<SearchResult<Document>> => {
  if (!_searchKey) throw new Error("Not enabled");
  const { collectionName, valid } = decodeKey(_searchKey);
  if (!valid) throw new Error("Invalid _searchKey");
  const client = getSearchClient(_searchKey);
  if (!client) throw new Error("Couldn't get search client");

  const options: Record<string, unknown> = { q };
  Object.entries(opts).forEach(([key, value]) => {
    options[camelToSnake(key)] = value;
  });

  const rawResult = await client
    .collections(collectionName)
    .documents()
    .search(options);

  const newResult: SearchResult<Document> = {
    empty: !rawResult.found,
    found: rawResult.found,
    outOf: rawResult.out_of,
    page: rawResult.page,
    searchTimeMs: rawResult.search_time_ms,
    hits:
      rawResult.hits?.map((hit) => {
        const document = deFlatten(hit.document) as Document & BaseDoc;
        const highlightRecord = {} as Record<string, Highlight>;
        const highlights =
          hit.highlights?.map((highlight) => {
            const fieldPath = highlight.field as string;

            const cast: Highlight = {
              fieldPath,
              fieldValue: get(document, fieldPath) as unknown,
              indices: highlight.indices ?? [],
              matchedTokens: highlight.matched_tokens,
              snippet: highlight.snippet,
              snippets: highlight.snippets ?? [],
              value: highlight.value,
            };

            highlightRecord[highlight.field as string] = cast;

            return cast;
          }) ?? [];

        const _key = getHitKey(hit);

        const _getField = (fieldPath: string) => {
          return get(document, fieldPath) as unknown;
        };

        const fullHit: Hit<Document> = {
          _key,
          curated: hit.curated ?? false,
          document,
          highlight: highlightRecord,
          highlights,
          textMatch: hit.text_match,
          _getField,
          _getFieldHighlight: () => null,
        };

        fullHit._getFieldHighlight = (
          fieldPath: string,
          fallbackFieldPaths?: string[]
        ) => {
          return _getFieldHighlightImpl({
            fieldPath,
            fallbackFieldPaths,
            includeFallback: true,
            hit: fullHit,
          });
        };

        return fullHit;
      }) ?? [],
  };

  return newResult;
};

/* -------------------------------------------------------------------------------------------------
 * Ask Ai
 * -----------------------------------------------------------------------------------------------*/

export type AskAiOptions = {
  conversationId?: string;
};

export type AskAiResult<Doc = Record<string, unknown>> = SearchResult<Doc> & {
  conversation: {
    id: string;
    answer: string;
    history: {
      key: string;
      question: string;
      answer: string;
    }[];
  };
};

export const askAi = async <Document extends Record<string, unknown>>(
  _searchKey: string | null,
  q: string,
  opts: SearchOptions
): Promise<AskAiResult<Document>> => {
  if (!_searchKey) throw new Error("Not enabled");
  const { collectionName, valid } = decodeKey(_searchKey);
  if (!valid) throw new Error("Invalid _searchKey");
  const client = getSearchClient(_searchKey);
  if (!client) throw new Error("Couldn't get search client");

  const options: Record<string, unknown> = {
    q,
    conversation: true,
    conversation_model_id: "conv-model-1",
    queryBy: ["__embedding"],
    excludeFields: ["__embedding"],
  };
  Object.entries(opts).forEach(([key, value]) => {
    options[camelToSnake(key)] = value;
  });

  const rawResult = await client
    .collections(collectionName)
    .documents()
    .search(options);

  if (!rawResult.conversation) {
    throw new Error("Ask AI failed: conversation wasn't found in response.");
  }

  const rawConversationHistory = (rawResult.conversation
    .conversation_history as unknown as undefined) ?? [
    { user: q },
    { assistant: rawResult.conversation.answer },
  ];

  const newResult: AskAiResult<Document> = {
    empty: !rawResult.found,
    found: rawResult.found,
    outOf: rawResult.out_of,
    page: rawResult.page,
    searchTimeMs: rawResult.search_time_ms,
    hits:
      rawResult.hits?.map((hit) => {
        const document = deFlatten(hit.document) as Document & BaseDoc;
        const highlightRecord = {} as Record<string, Highlight>;
        const highlights =
          hit.highlights?.map((highlight) => {
            const fieldPath = highlight.field as string;

            const cast: Highlight = {
              fieldPath,
              fieldValue: get(document, fieldPath) as unknown,
              indices: highlight.indices ?? [],
              matchedTokens: highlight.matched_tokens,
              snippet: highlight.snippet,
              snippets: highlight.snippets ?? [],
              value: highlight.value,
            };

            highlightRecord[highlight.field as string] = cast;

            return cast;
          }) ?? [];

        const _key = getHitKey(hit);

        const _getField = (fieldPath: string) => {
          return get(document, fieldPath) as unknown;
        };

        const fullHit: Hit<Document> = {
          _key,
          curated: hit.curated ?? false,
          document,
          highlight: highlightRecord,
          highlights,
          textMatch: hit.text_match,
          _getField,
          _getFieldHighlight: () => null,
        };

        fullHit._getFieldHighlight = (
          fieldPath: string,
          fallbackFieldPaths?: string[]
        ) => {
          return _getFieldHighlightImpl({
            fieldPath,
            fallbackFieldPaths,
            includeFallback: true,
            hit: fullHit,
          });
        };

        return fullHit;
      }) ?? [],
    conversation: {
      answer: rawResult.conversation.answer,
      id: rawResult.conversation.conversation_id,
      history: rawConversationHistory
        .map((h, i) => {
          const question = h.user;
          if (!question) return null;
          const answer = rawConversationHistory[i + 1]?.assistant;
          if (!answer) return null;
          return {
            question,
            answer,
            key: `${rawResult.conversation?.conversation_id}-${i}`,
          };
        })
        .filter(
          (h): h is AskAiResult<Document>["conversation"]["history"][number] =>
            !!h
        ),
    },
  };

  return newResult;
};

/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/

export const camelToSnake = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export function deFlatten(flattened: object) {
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

export const decodeKey = (_searchKey: string | null) => {
  if (_searchKey === null) {
    return { valid: false } as const;
  }
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

  return { domain, apiKey, collectionName, valid: true } as const;
};

/* -------------------------------------------------------------------------------------------------
 * Hit Utils
 * -----------------------------------------------------------------------------------------------*/

export type HighlightedField =
  | undefined
  | {
      _type: "rich-text-section";
      _content: string;
      _id?: string;
      _level?: number;
    }
  | {
      _type: "text";
      _content: string;
    }
  | {
      _type: "unknown";
      _content: unknown;
    };

export function _getFieldHighlightImpl({
  hit,
  fieldPath,
  fallbackFieldPaths,
  includeFallback,
}: {
  hit: Hit;
  fieldPath: string;
  fallbackFieldPaths?: string[];
  includeFallback?: boolean;
}): null | {
  highlightedField: HighlightedField;
  snippet: string | undefined;
  snippetByExactMatch: string | undefined;
  snippetByPrefix: string | undefined;
  fallbackSnippet: string | undefined;
} {
  const field = hit._getField(fieldPath);
  if (!field) {
    if (fallbackFieldPaths && fallbackFieldPaths[0]) {
      const [fallbackFieldPath, ...rest] = fallbackFieldPaths;
      return _getFieldHighlightImpl({
        hit,
        fieldPath: fallbackFieldPath,
        fallbackFieldPaths: rest,
        includeFallback: true,
      });
    }
    return null;
  }

  const isRichText =
    Array.isArray(field) && field[0]?._type === "rich-text-section";

  let snippetByExactMatch: string | undefined = undefined;
  let snippetByPrefix: string | undefined = undefined;

  const prefix = fieldPath.endsWith(".") ? fieldPath : fieldPath + ".";

  let highlightedField: HighlightedField = undefined;

  hit.highlights.forEach((h) => {
    if (h.fieldPath !== fieldPath && h.fieldPath.startsWith(prefix) === false) {
      return;
    }
    if (!highlightedField) {
      const adjustedPath = isRichText
        ? h.fieldPath.split(".").slice(0, 2).join(".")
        : h.fieldPath;
      const fieldData = hit._getField(adjustedPath);
      if (!fieldData) return;
      else if (typeof fieldData === "string") {
        highlightedField = {
          _type: "text",
          _content: fieldData,
        };
      } else if (
        typeof fieldData === "object" &&
        "_type" in fieldData &&
        fieldData._type === "rich-text-section"
      ) {
        highlightedField = fieldData as HighlightedField;
      } else {
        highlightedField = {
          _type: "unknown",
          _content: fieldData,
        };
      }
    }

    if (!snippetByExactMatch && h.fieldPath === fieldPath) {
      snippetByExactMatch = h.snippet ?? h.snippets[0];
    }
    if (!snippetByPrefix && h.fieldPath.startsWith(prefix)) {
      snippetByPrefix = h.snippet ?? h.snippets[0];
    }
  });

  // get first piece of text we find under `field`
  function getFallbackString(
    current: unknown,
    opts: { isRichText: boolean }
  ): string | undefined {
    if (typeof current === "string") return current;

    if (current === null || current === undefined) {
      return undefined;
    }

    if (Array.isArray(current)) {
      const found = current
        .map((c) => getFallbackString(c, opts))
        .find((v) => v);
      return found;
    } else if (typeof current === "object") {
      let found: string | undefined = undefined;
      for (const [key, value] of Object.entries(current)) {
        if (["_id", "_slug"].includes(key)) continue;
        if (opts.isRichText && key !== "_content") {
          continue;
        }
        const processedRecursive = getFallbackString(value, opts);
        if (processedRecursive) {
          found = processedRecursive;
          break;
        }
      }
      return found;
    }
  }

  let fallbackSnippet;
  let snippet: string | undefined =
    snippetByExactMatch || snippetByPrefix || undefined;

  if (snippet === undefined && fallbackFieldPaths && fallbackFieldPaths[0]) {
    const [fallbackFieldPath, ...rest] = fallbackFieldPaths;
    const fallbackResult = _getFieldHighlightImpl({
      hit,
      fieldPath: fallbackFieldPath,
      fallbackFieldPaths: rest,
      includeFallback: false,
    });
    snippet = fallbackResult?.snippet;
    fallbackSnippet = fallbackResult?.snippet;
  }

  if (snippet === undefined && includeFallback) {
    // if snippet is still undefined after trying all fallbacks, we'll fallback to the first piece of text we find in the field
    fallbackSnippet = getFallbackString(field, { isRichText });
    snippet = fallbackSnippet;
  }

  return {
    highlightedField,
    snippet,
    snippetByExactMatch: snippetByExactMatch as string | undefined,
    snippetByPrefix: snippetByPrefix as string | undefined,
    fallbackSnippet,
  };
}
