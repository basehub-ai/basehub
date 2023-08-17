import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    minify: false,
    dts: false,
    entry: {
      bin: "./src/bin/index.ts",
    },
  };
});
