import { defineConfig, type Options } from "tsup";

export default defineConfig((_options: Options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      "react-rich-text": "./src/react/rich-text/index.ts",
      "react-search": "./src/react/search/index.ts",
      "api-transaction": "./src/api-transaction.ts",
      analytics: "./src/analytics/index.ts",
    },
    format: ["esm"],
  };
});
