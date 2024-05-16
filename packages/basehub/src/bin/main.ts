import { generate } from "@basehub/genql";
import resolvePkg from "resolve-pkg";
import path from "path";
import { Args } from ".";
import fs from "fs";
import * as esbuild from "esbuild";
import {
  getStuffFromEnv,
  runtime__getStuffFromEnvString,
  Options,
} from "./util/get-stuff-from-env";
import { appendGeneratedCodeBanner } from "./util/disable-linters";
import { writeReactPump } from "./util/write-react-pump";

export const main = async (
  args: Args,
  opts: { forceDraft?: boolean; version: string }
) => {
  async function generateSDK(silent: boolean, previousSchemaHash: string) {
    logIfNotSilent(silent, "🪄 Generating...");

    const options: Options = {
      token: args["--token"],
      prefix: args["--env-prefix"],
      output: args["--output"],
      draft: args["--draft"],
      ...(opts?.forceDraft && { draft: true }),
    };

    const { url, headers, draft, output } = getStuffFromEnv(options);

    const basehubModulePath = resolvePkg("basehub");

    if (!basehubModulePath) {
      throw new Error(
        "basehub package not found in node_modules. If this issue persists, please raise an issue on the `basehub-ai/basehub` repository."
      );
    }

    const pathArgs = output
      ? [output]
      : ["node_modules", "basehub", "dist", "generated-client"]; // default output path
    const isCustomOutput = !!output;

    const basehubOutputPath = path.resolve(process.cwd(), ...pathArgs);

    if (!silent) {
      logInsideBox([
        `🎫 SDK Version: ${opts.version}`,
        `🔗 Endpoint: ${url.toString()}`,
        `${draft ? "🟡" : "🔵"} Draft: ${draft ? "enabled" : "disabled"}`,
        `📦 Output: ${basehubOutputPath}`,
      ]);
    }

    const { preventedClientGeneration, schemaHash } = await generate({
      endpoint: url.toString(),
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      output: path.join(basehubOutputPath),
      verbose: false,
      sortProperties: true,
      silent,
      previousSchemaHash,
    });

    if (preventedClientGeneration) {
      // done
      return { preventedClientGeneration, schemaHash };
    }

    const generatedMainExportPath = path.join(basehubOutputPath, "index.ts");

    // We'll patch some things from the generated code.
    let schemaFileContents = fs.readFileSync(generatedMainExportPath, "utf-8");

    // 1. remove hardcoded URL and replace with our function that infers it from .env
    // on all ocurrances.

    schemaFileContents = schemaFileContents.replace(
      "return createClientOriginal({",
      "const { url, headers } = getStuffFromEnv(options)\n  return createClientOriginal({" // function injected below
    );

    const basehubUrlRegex = new RegExp(
      // match ", or ', or ` (as the start/end of a string)
      // match basehubUrl but escape the ? of the query param with a \. Escape the \ with another \ so prettier doesn't remove it.
      `['"\`]${url.toString().replace("?", "\\?")}['"\`]`,
      "g"
    );
    schemaFileContents = schemaFileContents.replace(
      basehubUrlRegex,
      "url.toString()"
    );

    schemaFileContents = schemaFileContents.replace(
      "...options",
      "...options,\n    headers: { ...options?.headers, ...headers }"
    );

    // 2. remove export for `createClient`, as it holds options that we don't want to expose.
    schemaFileContents = schemaFileContents.replace(
      "export const createClient = ",
      "const createClient = "
    );

    // this should go at the end so that it doesn't suffer any modifications.
    schemaFileContents = schemaFileContents.concat(
      `\n${runtime__getStuffFromEnvString({ ...options, draft })}}`
    );

    // 3. append our basehub function to the end of the file.
    const basehubExport = getBaseHubExport(draft);
    if (!schemaFileContents.includes(basehubExport)) {
      schemaFileContents = schemaFileContents.concat(`\n${basehubExport}`);
    }

    // 4. write the file back.
    fs.writeFileSync(generatedMainExportPath, schemaFileContents);

    /**
     * Next Pump stuff.
     */
    writeReactPump({
      modulePath: basehubModulePath,
      outputPath: basehubOutputPath,
    });

    // we'll want to externalize react, react-dom, and "../index" in this case is the generated basehub client.
    const peerDependencies = [
      "react",
      "react-dom",
      "../index",
      "@basehub/mutation-api-helpers",
    ];

    logIfNotSilent(silent, "📦 Compiling to JavaScript...");
    const reactPumpOutDir = path.join(basehubOutputPath, "react-pump");
    await Promise.all([
      esbuild.build({
        entryPoints: [generatedMainExportPath],
        bundle: true,
        outdir: basehubOutputPath,
        minify: false,
        treeShaking: true,
        splitting: true,
        format: "esm",
        external: peerDependencies,
      }),
      esbuild.build({
        entryPoints: [
          path.join(basehubModulePath, "src-react-pump", "index.ts"),
        ],
        bundle: true,
        outdir: reactPumpOutDir,
        minify: false,
        treeShaking: true,
        splitting: true,
        format: "esm",
        target: ["es2020", "node18"],
        external: peerDependencies,
        plugins: [
          {
            name: "use-client-for-client-components",
            setup(build) {
              build.onEnd(() => {
                const rxp = /['"]use client['"]\s?;/i;
                const outputFilePaths = fs.readdirSync(reactPumpOutDir);
                outputFilePaths
                  ?.filter((fileName) => !fileName.endsWith(".map"))
                  .forEach((fileName) => {
                    // if the file contains "use client" we'll make sure it's on the top.
                    const filePath = path.join(reactPumpOutDir, fileName);
                    const fileContents = fs.readFileSync(filePath, "utf-8");
                    if (!rxp.test(fileContents)) return;
                    const newContents = fileContents.replace(rxp, "");
                    fs.writeFileSync(filePath, `"use client";\n${newContents}`);
                  });
              });
            },
          },
        ],
      }),
    ]);

    appendGeneratedCodeBanner(basehubOutputPath, args["--banner"]);

    if (isCustomOutput) {
      // alias react-rich-text and other packages to the generated client for better import experience
      ["react-rich-text", "api-transaction", "react-search", "analytics"].map(
        (pathsToAlias) => {
          // create a file in the output directory that aliases the package to the generated client
          fs.writeFileSync(
            path.join(basehubOutputPath, `${pathsToAlias}.d.ts`),
            `export * from "basehub/${pathsToAlias}";`
          );
          fs.writeFileSync(
            path.join(basehubOutputPath, `${pathsToAlias}.js`),
            `module.exports = require("basehub/${pathsToAlias}");`
          );
        }
      );
    }

    logIfNotSilent(silent, "🪄 Generated `basehub` client");
    return { preventedClientGeneration, schemaHash };
  }

  if (args["--watch"]) {
    let isFirst = true;
    let previousHash = "";
    await scheduleNonOverlappingWork(async () => {
      const result = await generateSDK(!isFirst, previousHash);
      if (isFirst) {
        console.log(" ");
        logInsideBox([
          "👀 `basehub` experimental --watch mode. Tell us about our bugs: https://basehub.com/support",
        ]);
        console.log(" ");
      } else if (!result.preventedClientGeneration) {
        console.log("🔄 Detected changes, `basehub` re-generated");
      }

      previousHash = result.schemaHash;
      isFirst = false;
    }, 3000);
  } else {
    await generateSDK(false, "");
  }
};

const getBaseHubExport = (noStore: boolean) => `
export type * from "@basehub/mutation-api-helpers";
import { createFetcher } from "./runtime";

// we limit options to only the ones we want to expose.
type Options = Omit<ClientOptions, 'url' | 'method' | 'batch' | 'credentials' | 'fetch' | 'fetcher' | 'headers' | 'integrity' | 'keepalive' | 'mode' | 'redirect' | 'referrer' | 'referrerPolicy' | 'window'> & { draft?: boolean, token?: string }

/**
 * Create a basehub client.
 *
 * @param options (optional) Options for the \`fetch\` request; for example in Next.js, you can do \`{ next: { revalidate: 60 } }\` to tweak your app's cache.
 * @returns A basehub client.
 *
 * @example
 * import { basehub } from 'basehub'
 *
 * const firstQuery = await basehub().query({
 *   __typename: true,
 * });
 *
 * console.log(firstQuery.__typename) // => 'Query'
 *
 */
export const basehub = (options?: Options) => {
  const { url, headers } = getStuffFromEnv(options);

  return {
    ...createClient(${
      noStore ? "{ ...options, cache: 'no-store' }" : "options"
    }),
    raw: createFetcher({ ...options, url, headers }) as <Cast = unknown>(
      gql: GraphqlOperation
    ) => Promise<Cast>,
  };
};
`;

function logInsideBox(lines: string[]) {
  // Determine the longest line to set the padding
  const longestLine = lines.reduce(
    (max, line) => Math.max(max, line.length),
    0
  );
  const padLength = longestLine;

  // Top border of the box
  console.log(`┌─${"─".repeat(padLength)}─┐`);

  // Log each line, padded to fit the box
  lines.forEach((line) => {
    console.log(`│ ${line.padEnd(padLength)} │`);
  });

  // Bottom border of the box
  console.log(`└─${"─".repeat(padLength)}─┘`);
}

function logIfNotSilent(silent: boolean | undefined, message: string) {
  if (!silent) {
    console.log(message);
  }
}

const scheduleNonOverlappingWork = async (
  callback: () => Promise<void>,
  t: number
) => {
  await callback();

  await new Promise((resolve) =>
    // Re-schedule after operation completes (recursive!)
    setTimeout(() => {
      scheduleNonOverlappingWork(callback, t).then(resolve);
    }, t)
  );
};
