/**
 * Shared list of modules that need to be handled consistently
 * between generation and packing
 */
export const BASEHUB_MODULES = [
  "react-svg",
  "react-rich-text",
  "react-form",
  "react-code-block/index",
  "react-code-block/client",
  "api-transaction",
  "react-search",
  "search",
  "next-image",
] as const;

/**
 * Additional modules that are only needed for packing
 * (not aliased in regular generation)
 */
export const PACK_ONLY_MODULES = ["react-icon", "events", "workflows"] as const;

/**
 * All modules that need to be bundled during packing
 */
export const ALL_PACK_MODULES = [
  ...BASEHUB_MODULES,
  ...PACK_ONLY_MODULES,
] as const;
