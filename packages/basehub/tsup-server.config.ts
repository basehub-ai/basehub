import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      index: "./src/query-client/index.ts",
    },
  };
});
