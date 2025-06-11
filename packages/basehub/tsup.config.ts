import { defineConfig, type Options } from "tsup";
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin";

export default defineConfig((_options: Options) => {
  return {
    entry: ["src/**/*.ts", "!src/**/*.test.ts"],
    minify: false,
    bundle: true,
    dts: true,
    outDir: "dist",
    clean: true,
    splitting: true,
    format: ["esm"],
    external: ["react", "react-dom", "next"],
    noExternal: ["dotenv-mono"],
    esbuildPlugins: [ScssModulesPlugin() as any],
  };
});
