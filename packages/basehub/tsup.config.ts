import { defineConfig, type Options } from "tsup";
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin";

export default defineConfig((_options: Options) => {
  return {
    entry: ["src/**/*.ts", "!src/**/*.test.ts", "!src/bin/index.ts"],
    minify: false,
    bundle: true,
    dts: true,
    outDir: "dist",
    splitting: true,
    format: ["esm"],
    external: ["react", "react-dom", "next"],
    noExternal: [
      "dotenv-mono",
      "arg",
      "graphql",
      "mkdirp",
      "rimraf",
      "prettier",
      "listr2",
      "lodash.uniq",
      "lodash.camelcase",
    ],
    esbuildPlugins: [ScssModulesPlugin() as any],
  };
});
