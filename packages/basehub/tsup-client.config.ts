import { defineConfig, type Options } from "tsup";

export default defineConfig((_options: Options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      react: "./src/react/index.ts",
    },
    format: ["esm"],
  };
});
