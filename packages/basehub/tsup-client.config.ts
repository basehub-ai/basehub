import { defineConfig, type Options } from "tsup";

export default defineConfig((_options: Options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      "react-rich-text": "./src/react/rich-text/index.ts",
      "react-code-block": "./src/react/code-block/index.ts",
      "api-transaction": "./src/api-transaction.ts",
    },
    external: ["react", "react-dom"],
    format: ["esm"],
    splitting: true,
    clean: true,
  };
});
