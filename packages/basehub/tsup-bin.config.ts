import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    dts: false,
    entry: {
      bin: "./src/bin/index.ts",
    },
  };
});
