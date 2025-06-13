/**
 * Credits: https://gist.github.com/jlevy/c246006675becc446360a798e2b2d781
 */
// cyrb53 (c) 2018 bryc (github.com/bryc). License: Public domain. Attribution appreciated.
// A fast and simple 64-bit (or 53-bit) string hash function with decent collision resistance.
// Largely inspired by MurmurHash2/3, but with a focus on speed/simplicity.
// See https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/52171480#52171480

import type { SearchResponseHit } from "typesense/lib/Typesense/Documents.js";
import { BaseDoc } from "./primitive.js";

// https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
const cyrb64 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  // For a single 53-bit numeric return value we could return
  // 4294967296 * (2097151 & h2) + (h1 >>> 0);
  // but we instead return the full 64-bit value:
  return [h2 >>> 0, h1 >>> 0] as const;
};

// An improved, *insecure* 64-bit hash that's short, fast, and has no dependencies.
// Output is always 14 characters.
export const cyrb64Hash = (str: string, seed = 0) => {
  const [h2, h1] = cyrb64(str, seed);
  return h2.toString(36).padStart(7, "0") + h1.toString(36).padStart(7, "0");
};

export function getHitKey(hit: SearchResponseHit<object>): string {
  return cyrb64Hash(
    JSON.stringify({
      _id: (hit.document as BaseDoc)._id,
      curated: hit.curated,
      highlight: hit.highlight,
      highlights: hit.highlights,
      text_match: hit.text_match,
      text_match_info: hit.text_match_info,
    })
  );
}

export function getHitRecentSearchKey(hit: { document: BaseDoc }): string {
  /**
   * We'll just use the document ID as the recent search key so that you can't save a document multiple times into recent searches.
   */
  return `recent-search-${hit.document._id}`;
}
