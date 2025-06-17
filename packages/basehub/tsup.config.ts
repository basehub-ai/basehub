import { defineConfig, type Options } from "tsup";
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin";
import fs from "fs";
import { join } from "path";

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
    plugins: [
      {
        name: "use-client-banner",
        buildEnd(thing) {
          const useClientBannerRgx = /['"]use client['"]\s?;/i;
          thing.writtenFiles.forEach((file) => {
            const filePath = join(process.cwd(), file.name);
            const content = fs.readFileSync(filePath, "utf-8");
            if (!useClientBannerRgx.test(content)) return;
            const newContents = content.replace(useClientBannerRgx, "");
            fs.writeFileSync(filePath, `"use client";\n${newContents}`);
          });
        },
      },
    ],
  };
});
