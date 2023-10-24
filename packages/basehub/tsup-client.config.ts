import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => {
  return {
    minify: !options.watch,
    dts: true,
    entry: {
      react: "./src/react/index.ts",
    },
    format: ["cjs"],
  };
});
