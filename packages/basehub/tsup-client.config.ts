import { defineConfig, type Options } from "tsup";
import fs from "fs";
import { join } from "path";

export default defineConfig((_options: Options) => {
  return {
    minify: false,
    dts: true,
    entry: {
      "react-svg": "./src/react/icon/index.ts",
      "react-icon": "./src/react/icon/index.ts",
      "react-rich-text": "./src/react/rich-text/index.ts",
      "react-form": "./src/react/form/index.ts",
      "react-code-block/index": "./src/react/code-block/index.ts",
      "react-code-block/client": "./src/react/code-block/client/index.ts",
      "react-search": "./src/react/search/index.ts",
      "api-transaction": "./src/api-transaction.ts",
      search: "./src/search/index.ts",
      "next-image": "./src/next/image/index.ts",
      cli: "./src/cli.ts",
    },
    format: ["esm"],
    splitting: true,
    external: [
      "react",
      "react-dom",
      "next",
      // Node.js built-ins
      "path",
      "fs",
      "url",
      "crypto",
      "process",
      "os",
      "child_process",
      "util",
      "events",
      "stream",
      "buffer",
      "assert",
      "zlib",
      "querystring",
      "http",
      "https",
      "net",
      "tls",
      "dns",
      "dgram",
      // CLI dependencies that should stay external
      "@basehub/genql",
      "resolve-pkg",
      "esbuild",
      "esbuild-scss-modules-plugin",
      "dotenv-mono",
      "arg",
      "zod",
    ],
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
