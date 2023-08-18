import { defineConfig } from "tsup";

const prependUseClientPlugin = {
  name: "prepend-use-client",
  setup(build: any) {
    build.onEnd((result: any) => {
      result.outputFiles
        ?.filter((file: any) => file.path.endsWith(".js"))
        .forEach(async (file: any) => {
          // add 'use client' for RSC
          Object.defineProperty(file, "text", {
            value: `"use client";\n${file.text}`,
          });
        });
    });
  },
};

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    dts: true,
    entry: {
      react: "./src/react/index.ts",
    },
    format: ["cjs"],
    esbuildPlugins: [prependUseClientPlugin],
  };
});
