import { defineConfig } from "tsup";

export default defineConfig((_options) => {
  return {
    minify: false,
    dts: false,
    entry: {
      bin: "./src/bin/index.ts",
    },
    format: ["esm"],
    outDir: "dist-bin",
  };
});
