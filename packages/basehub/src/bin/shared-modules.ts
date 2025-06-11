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

/**
 * Core modules that are always exported
 */
export const CORE_MODULES = ["cli", "react-pump", "next-toolbar"] as const;

/**
 * Generate package.json exports field from module lists
 */
export function generatePackageExports(includePackOnlyModules = false) {
  const exports: Record<string, { types: string; default: string }> = {
    ".": {
      types: "./index.d.ts",
      default: "./index.js",
    },
  };

  // Add core modules
  for (const moduleName of CORE_MODULES) {
    exports[`./${moduleName}`] = {
      types: `./${moduleName}.d.ts`,
      default: `./${moduleName}.js`,
    };
  }

  // Add base modules
  for (const moduleName of BASEHUB_MODULES) {
    if (moduleName === "react-code-block/index") {
      // Special case for react-code-block - export both the base and the index
      exports["./react-code-block"] = {
        types: "./react-code-block/index.d.ts",
        default: "./react-code-block/index.js",
      };
    } else if (moduleName === "react-code-block/client") {
      exports["./react-code-block/client"] = {
        types: "./react-code-block/client.d.ts",
        default: "./react-code-block/client.js",
      };
    } else {
      exports[`./${moduleName}`] = {
        types: `./${moduleName}.d.ts`,
        default: `./${moduleName}.js`,
      };
    }
  }

  // Add pack-only modules if requested
  if (includePackOnlyModules) {
    for (const moduleName of PACK_ONLY_MODULES) {
      exports[`./${moduleName}`] = {
        types: `./${moduleName}.d.ts`,
        default: `./${moduleName}.js`,
      };
    }
  }

  return exports;
}
