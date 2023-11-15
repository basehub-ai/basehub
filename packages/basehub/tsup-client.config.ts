import { defineConfig, type Options } from "tsup";

export default defineConfig((_options: Options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      react: "./src/react/index.ts",
      ["react-code-block"]: "./src/react/code-block/index.ts",
      ["react-rich-text"]: "./src/react/rich-text/index.ts",
    },
    format: ["cjs"],
  };
});
