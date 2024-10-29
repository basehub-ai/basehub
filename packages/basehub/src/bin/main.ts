import { generate } from "@basehub/genql";
import resolvePkg from "resolve-pkg";
import path from "path";
import { Args } from ".";
import fs from "fs";
import * as esbuild from "esbuild";
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin";
import {
  getStuffFromEnv,
  runtime__getStuffFromEnvString,
  Options,
} from "./util/get-stuff-from-env";
import { appendGeneratedCodeBanner } from "./util/disable-linters";
import { copyDirSync } from "./util/cp";
import { z } from "zod";
import { createHash } from "crypto";
import { ResolvedRef } from "../common-types";
import { ensureCrossPlatformTsImport } from "./util/cross-platform-ts-imports";

const buildManifestSchema = z.object({
  generatedAt: z.string(),
  sdkVersion: z.string(),
  inputHash: z.string(),
  schemaHash: z.string(),
  resolvedRef: z.any(),
});

const onProcessEndCallbacks: Array<() => void> = [];

export const main = async (
  args: Args,
  opts: { forceDraft?: boolean; version: string }
) => {
  const sdkBuildId = "bshb_sdk_" + Math.random().toString(16).slice(2);
  const now = Date.now();
  let previousResolvedRef: ResolvedRef | null = null;

  async function generateSDK(
    silent: boolean,
    previousSchemaHash: string
  ): Promise<{
    preventedClientGeneration: boolean;
    schemaHash: string;
    newResolvedRef: ResolvedRef;
  }> {
    logIfNotSilent(silent, "🪄 Generating...");

    const options: Options = {
      token: args["--token"],
      prefix: args["--env-prefix"],
      output: args["--output"],
      draft: args["--draft"],
      apiVersion: args["--api-version"],
      ...(opts?.forceDraft && { draft: true }),
    };

    const {
      url,
      headers,
      draft,
      output,
      gitBranch,
      gitCommitSHA,
      gitBranchDeploymentURL,
      resolvedRef,
      newResolvedRefPromise,
      token,
    } = await getStuffFromEnv({ ...options, previousResolvedRef });

    const basehubModulePath = resolvePkg("basehub");

    if (!basehubModulePath) {
      throw new Error(
        "basehub package not found in node_modules. If this issue persists, please raise an issue on the `basehub-ai/basehub` repository."
      );
    }

    let shouldAppendToGitIgnore = "";
    let pathArgs: string[] = [];
    if (output === "node_modules") {
      // old default
      pathArgs = ["node_modules", "basehub", "dist", "generated-client"];
    } else if (output) {
      pathArgs = [output];
    } else {
      // default
      pathArgs = [".basehub"];
      shouldAppendToGitIgnore = ".basehub";
    }

    const basehubOutputPath = path.resolve(process.cwd(), ...pathArgs);

    if (!silent) {
      logInsideBox([
        `🎫 SDK Version: ${opts.version}`,
        `🔗 Endpoint: ${url.toString()}`,
        `${draft ? "🟡" : "🔵"} Draft: ${draft ? "enabled" : "disabled"}`,
        `📦 Output: ${basehubOutputPath}`,
        `🔀 Ref: ${
          resolvedRef.type === "branch" ? resolvedRef.name : resolvedRef.id
        } (basehub ${resolvedRef.type})`,
        resolvedRef.type === "branch"
          ? resolvedRef.git?.branch
            ? `🌳 Linked git branch: ${resolvedRef.git?.branch}`
            : resolvedRef.createSuggestedBranchLink
            ? `🤝 Want to link this git branch to a basehub branch? ${resolvedRef.createSuggestedBranchLink}`
            : null
          : null,
        // `🔑 Git Commit SHA: ${gitCommitSHA}`,
      ]);

      if (args["--debug"]) {
        console.log(`[basehub] using token: ${token}`);
        console.log(
          `[basehub] resolved ref (full): ${JSON.stringify(
            resolvedRef,
            null,
            2
          )}`
        );
      }
    }

    // cleanup the output directory if input hash changes
    const buildManifestPath = path.join(
      basehubOutputPath,
      "build-manifest.json"
    );
    let currentBuildManifest;
    try {
      currentBuildManifest = fs.existsSync(buildManifestPath)
        ? buildManifestSchema.parse(
            JSON.parse(fs.readFileSync(buildManifestPath, "utf-8"))
          )
        : {};
    } catch (error) {
      // ignore
    }

    const inputHash = createHash("sha256")
      .update(
        JSON.stringify({
          url: url.toString(),
          headers,
          draft,
          output,
          version: opts.version,
          apiVersion: options.apiVersion,
        })
      )
      .digest("hex")
      .substring(0, 32);

    if (currentBuildManifest?.inputHash !== inputHash) {
      // remove files and directories recursively under dir but not the dir itself
      if (fs.existsSync(basehubOutputPath)) {
        fs.rmdirSync(basehubOutputPath, { recursive: true });
      }
      // create the directory again
      fs.mkdirSync(basehubOutputPath, { recursive: true });
    }

    const { preventedClientGeneration, schemaHash } = await generate({
      endpoint: url.toString(),
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      output: path.join(basehubOutputPath),
      verbose: silent ? false : args["--debug"],
      sortProperties: true,
      silent,
      previousSchemaHash,
    });

    if (preventedClientGeneration) {
      // done
      return {
        preventedClientGeneration,
        schemaHash,
        newResolvedRef: await newResolvedRefPromise,
      };
    }

    if (args["--debug"]) {
      console.log(`[basehub] generated in: ${basehubOutputPath}`);
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
      "\n    ...options",
      "    ...options,\n    headers: { ...options?.headers, ...headers }"
    );

    // 2. remove export for `createClient`, as it holds options that we don't want to expose.
    schemaFileContents = schemaFileContents.replace(
      "export const createClient = ",
      "const createClient = "
    );

    // this should go at the end so that it doesn't suffer any modifications.
    schemaFileContents = schemaFileContents.concat(
      `\n${runtime__getStuffFromEnvString({
        ...options,
        draft,
        forceDraft: opts?.forceDraft,
        gitBranch,
        gitCommitSHA,
      })}}`
    );

    if (
      schemaFileContents.includes("mutation<R extends MutationGenqlSelection>")
    ) {
      // edit `MutationGenqlSelection` to receive the Transaction directly instead of a string
      schemaFileContents = schemaFileContents.replace(
        "mutation<R extends MutationGenqlSelection>",
        `mutation<
R extends Omit<MutationGenqlSelection, "transaction" | "transactionAwaitable"> & {
      transaction?: {
        __args: Omit<
          NonNullable<MutationGenqlSelection["transaction"]>["__args"],
          "data"
        > & { data: Transaction | string };
      };
      transactionAwaitable?: TransactionStatusGenqlSelection & {
        __args: Omit<
          NonNullable<MutationGenqlSelection["transactionAwaitable"]>["__args"],
          "data"
        > & { data: Transaction | string };
      };
    },
>`
      );

      // add import for Transaction at the start of the file
      schemaFileContents +=
        "\nimport type { Transaction } from './api-transaction';\nimport type { TransactionStatusGenqlSelection } from './schema';\n";
    }

    // 3. append our basehub function to the end of the file.
    const basehubExport = getBaseHubExport({
      noStore: draft,
      sdkBuildId,
      resolvedRef,
      gitBranchDeploymentURL,
    });
    if (!schemaFileContents.includes(basehubExport)) {
      schemaFileContents = schemaFileContents.concat(`\n${basehubExport}`);
    }

    // 4. write the file back.
    fs.writeFileSync(generatedMainExportPath, schemaFileContents);

    // we'll want to externalize react, react-dom, and "../index" in this case is the generated basehub client.
    const peerDependencies = [
      "react",
      "react-dom",
      "../index",
      "@basehub/mutation-api-helpers",
      "next",
      "../runtime/_aliasing.js",
    ];

    const useClientPlugin: esbuild.Plugin = {
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
    };

    logIfNotSilent(silent, "📦 Compiling to JavaScript...");
    const reactPumpOutDir = path.join(basehubOutputPath, "react-pump");
    const nextToolbarOutDir = path.join(basehubOutputPath, "next-toolbar");

    await esbuild.build({
      entryPoints: [generatedMainExportPath],
      bundle: true,
      outdir: basehubOutputPath,
      minify: false,
      treeShaking: true,
      splitting: true,
      format: "esm",
      external: peerDependencies,
    });

    if (args["--debug"]) {
      console.log(
        `[basehub] compiled main export with esbuild in: ${generatedMainExportPath}`
      );
    }

    await esbuild.build({
      entryPoints: [
        path.join(basehubModulePath, "src", "react", "pump", "index.ts"),
      ],
      bundle: true,
      outdir: reactPumpOutDir,
      minify: false,
      treeShaking: true,
      splitting: true,
      format: "esm",
      target: ["es2020", "node18"],
      external: peerDependencies,
      plugins: [useClientPlugin],
    });

    if (args["--debug"]) {
      console.log(
        `[basehub] compiled react pump with esbuild in: ${reactPumpOutDir}`
      );
    }

    await esbuild.build({
      entryPoints: [
        path.join(basehubModulePath, "src", "next", "toolbar", "index.ts"),
      ],
      bundle: true,
      outdir: nextToolbarOutDir,
      minify: false,
      treeShaking: true,
      splitting: true,
      format: "esm",
      target: ["es2020", "node18"],
      external: peerDependencies,
      plugins: [ScssModulesPlugin(), useClientPlugin],
    });

    if (args["--debug"]) {
      console.log(
        `[basehub] compiled next toolbar with esbuild in: ${nextToolbarOutDir}`
      );
    }

    /**
     * DTS stuff.
     */
    copyDirSync(
      path.join(basehubModulePath, "dts", "src", "react", "pump"),
      reactPumpOutDir
    );
    copyDirSync(
      path.join(basehubModulePath, "dts", "src", "next", "toolbar"),
      nextToolbarOutDir
    );

    if (args["--debug"]) {
      console.log(`[basehub] copied dts for react pump to: ${reactPumpOutDir}`);
      console.log(
        `[basehub] copied dts for next toolbar to: ${nextToolbarOutDir}`
      );
    }

    appendGeneratedCodeBanner(basehubOutputPath, args["--banner"]);

    if (output !== "node_modules") {
      // alias react-rich-text and other packages to the generated client for better import experience
      [
        "react-rich-text",
        "react-code-block/index",
        "react-code-block/client",
        "api-transaction",
        "react-search",
        "analytics",
        "search",
        "next-image",
      ].map((pathsToAlias) => {
        // ensure the directory exists
        fs.mkdirSync(
          path.join(basehubOutputPath, ...pathsToAlias.split("/").slice(0, -1)),
          { recursive: true }
        );

        // create a file in the output directory that aliases the package to the generated client
        fs.writeFileSync(
          path.join(
            basehubOutputPath,
            ...pathsToAlias
              .split("/")
              .map((p, i, { length }) => (i + 1 === length ? `${p}.d.ts` : p))
          ),
          `export * from "basehub/${pathsToAlias}";`
        );
        fs.writeFileSync(
          path.join(
            basehubOutputPath,
            ...pathsToAlias
              .split("/")
              .map((p, i, { length }) => (i + 1 === length ? `${p}.js` : p))
          ),
          `export * from "basehub/${pathsToAlias}";`
        );
      });

      // override index.js and index.d.ts to point to the generated client
      const indexJsPath = path.join(basehubModulePath, "index.js");
      const indexDtsPath = path.join(basehubModulePath, "index.d.ts");
      const reactPumpIndexJsPath = path.join(
        basehubModulePath,
        "react-pump.js"
      );
      const reactPumpIndexDtsPath = path.join(
        basehubModulePath,
        "react-pump.d.ts"
      );
      const nextToolbarIndexJsPath = path.join(
        basehubModulePath,
        "next-toolbar.js"
      );
      const nextToolbarIndexDtsPath = path.join(
        basehubModulePath,
        "next-toolbar.d.ts"
      );
      fs.writeFileSync(
        indexJsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            path.join(basehubOutputPath, "index.js")
          )}";`
        )
      );
      fs.writeFileSync(
        indexDtsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            generatedMainExportPath
          )}";`
        )
      );
      fs.writeFileSync(
        reactPumpIndexJsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            path.join(reactPumpOutDir, "index.js")
          )}";`
        )
      );
      fs.writeFileSync(
        reactPumpIndexDtsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            path.join(reactPumpOutDir, "index.d.ts")
          )}";`
        )
      );
      fs.writeFileSync(
        nextToolbarIndexJsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            path.join(nextToolbarOutDir, "index.js")
          )}";`
        )
      );
      fs.writeFileSync(
        nextToolbarIndexDtsPath,
        ensureCrossPlatformTsImport(
          `export * from "${path.relative(
            basehubModulePath,
            path.join(nextToolbarOutDir, "index.d.ts")
          )}";`
        )
      );

      if (args["--debug"]) {
        console.log(
          `[basehub] aliased index.js and index.d.ts to: ${basehubOutputPath}`
        );
        console.log(
          `[basehub] aliased react pump index.js and index.d.ts to: ${reactPumpOutDir}`
        );
        console.log(
          `[basehub] aliased next toolbar index.js and index.d.ts to: ${nextToolbarOutDir}`
        );
      }
    }

    if (shouldAppendToGitIgnore) {
      function findClosestGitignore(startDir: string) {
        let currentDir = startDir;
        let gitignorePath = null;

        while (currentDir !== "/") {
          const potentialGitignore = path.join(currentDir, ".gitignore");
          if (fs.existsSync(potentialGitignore)) {
            gitignorePath = potentialGitignore;
            break;
          }
          currentDir = path.dirname(currentDir);
        }

        return gitignorePath;
      }

      const gitIgnorePath = findClosestGitignore(process.cwd());
      if (gitIgnorePath && fs.existsSync(gitIgnorePath)) {
        const gitIgnoreContents = fs.readFileSync(gitIgnorePath, "utf-8");
        if (!gitIgnoreContents.includes(shouldAppendToGitIgnore)) {
          fs.appendFileSync(
            gitIgnorePath,
            `\n\n# BaseHub\n${shouldAppendToGitIgnore}`
          );
          logIfNotSilent(
            silent,
            `🤫 Added "${shouldAppendToGitIgnore}" .gitignore`
          );
        }
      }
    }

    if (
      currentBuildManifest?.inputHash !== inputHash ||
      currentBuildManifest.schemaHash !== schemaHash
    ) {
      // create new build manifest
      fs.writeFileSync(
        buildManifestPath,
        JSON.stringify(
          {
            generatedAt: new Date().toISOString(),
            sdkVersion: opts.version,
            inputHash,
            schemaHash,
            resolvedRef,
          } satisfies z.infer<typeof buildManifestSchema>,
          null,
          2
        )
      );

      if (args["--debug"]) {
        console.log(`[basehub] wrote build manifest to: ${buildManifestPath}`);
      }
    }

    logIfNotSilent(
      silent,
      `🪄 Generated \`basehub\` client in ${Date.now() - now}ms`
    );

    if (args["--debug"]) {
      console.log(`[basehub] finished in ${Date.now() - now}ms`);
      console.log(
        `[basehub] checking if the generated client exists after 1 second`
      );

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
          console.log(
            `[basehub] generated client exists? ${
              fs.existsSync(path.join(basehubOutputPath, "index.js"))
                ? "YES"
                : "NO"
            }`
          );
        }, 1000);
      });
    }

    return {
      preventedClientGeneration,
      schemaHash,
      newResolvedRef: await newResolvedRefPromise,
    };
  }

  if (args["--watch"]) {
    let isFirst = true;
    let previousHash = "";

    const { watchPromise, stopWatching } = scheduleNonOverlappingWork(
      async () => {
        const result = await generateSDK(!isFirst, previousHash);
        if (isFirst) {
          console.log(" ");
          logInsideBox([
            "👀 `basehub` experimental --watch mode. Bugs: https://github.com/basehub-ai/basehub/issues",
          ]);
          console.log(" ");
        } else {
          if (result.newResolvedRef.ref !== previousResolvedRef?.ref) {
            logInsideBox([
              `🔀 Ref changed, now querying from ${
                result.newResolvedRef.type
              } ${result.newResolvedRef.ref}${
                result.newResolvedRef.type === "branch" &&
                result.newResolvedRef.git?.branch
                  ? ` (linked to Git branch ${result.newResolvedRef.git?.branch})`
                  : ""
              }`,
            ]);
          } else if (!result.preventedClientGeneration) {
            console.log("🔄 Detected changes, `basehub` re-generated");
          }
        }

        previousResolvedRef = result.newResolvedRef;
        previousHash = result.schemaHash;
        isFirst = false;
      },
      2500,
      1000 * 60 * 60 * 24 // 24 hours
    );

    onProcessEndCallbacks.push(() => {
      console.log("\n👋 Stopped `basehub` watcher.");
      stopWatching();
    });

    await watchPromise;
  } else {
    await generateSDK(false, "");
  }
};

// Handle signals
["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
  process.on(signal, () => {
    onProcessEndCallbacks.forEach((cb) => cb());
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  onProcessEndCallbacks.forEach((cb) => cb());
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  onProcessEndCallbacks.forEach((cb) => cb());
  process.exit(1);
});

const getBaseHubExport = ({
  noStore,
  sdkBuildId,
  resolvedRef,
  gitBranchDeploymentURL,
}: {
  noStore: boolean;
  sdkBuildId: string;
  resolvedRef: ResolvedRef;
  gitBranchDeploymentURL: string | null;
}) => `
export type * from "@basehub/mutation-api-helpers";
import { createFetcher } from "./runtime";

export const sdkBuildId = "${sdkBuildId}";
export const resolvedRef = ${JSON.stringify(resolvedRef)};
export const gitBranchDeploymentURL = ${
  gitBranchDeploymentURL ? `"${gitBranchDeploymentURL}"` : "null"
};

/**
 * Returns a hash code from an object
 * @param  {Object} obj The object to hash.
 * @return {String}    A hash string
 */
function hashObject(obj: Record<string, unknown>): string {
    const sortObjectKeys = <O extends Record<string, unknown>>(obj: O): O => {
        if (!isObjectAsWeCommonlyCallIt(obj)) return obj;
        return Object.keys(obj)
            .sort()
            .reduce((acc, key) => {
                acc[key as keyof O] = obj[key as keyof O];
                return acc;
            }, {} as O);
    };

    const recursiveSortObjectKeys = <O extends Record<string, unknown>>(obj: O): O => {
        const sortedObj = sortObjectKeys(obj);

        if (!isObjectAsWeCommonlyCallIt(sortedObj)) return sortedObj;

        Object.keys(sortedObj).forEach((key) => {
            if (isObjectAsWeCommonlyCallIt(sortedObj[key as keyof O])) {
                sortedObj[key as keyof O] = recursiveSortObjectKeys(
                    sortedObj[key as keyof O] as O
                ) as O[keyof O];
            } else if (Array.isArray(sortedObj[key as keyof O])) {
                sortedObj[key as keyof O] = (sortedObj[key as keyof O] as unknown[]).map(
                    (item) => {
                        if (isObjectAsWeCommonlyCallIt(item)) {
                            return recursiveSortObjectKeys(item);
                        } else {
                            return item;
                        }
                    }
                ) as O[keyof O];
            }
        });

        return sortedObj;
    };

    const isObjectAsWeCommonlyCallIt = (
        obj: unknown
    ): obj is Record<string, unknown> => {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    const sortedObj = recursiveSortObjectKeys(obj);
    const str = JSON.stringify(sortedObj);

    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash).toString();
}

// we limit options to only the ones we want to expose.
type Options = Omit<ClientOptions, 'url' | 'method' | 'batch' | 'credentials' | 'fetch' | 'fetcher' | 'headers' | 'integrity' | 'keepalive' | 'mode' | 'redirect' | 'referrer' | 'referrerPolicy' | 'window'> & { draft?: boolean, token?: string }

// we include the resolvedRef.id to make sure the cache tag is unique per basehub ref
// solves a nice problem which we'd otherwise have, being that if the dev wants to hit a different basehub branch, we don't want to respond with the same cache tag as the previous branch
export function cacheTagFromQuery(query: QueryGenqlSelection) {
  const now = performance.now();
  const result = "basehub-" + hashObject({ ...query, refId: resolvedRef.id });
  console.log("cacheTagFromQuery", result, performance.now() - now);
  return result;
}

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

  if (!options) {
    options = {};
  }

  options.getExtraFetchOptions = (op, _body, originalRequest) => {
    if (op !== 'query') return {}

    // don't override if we're in draft mode
    if (${noStore}) return {}

    // don't override if revalidation is already being handled by the user
    if (typeof options?.next !== 'undefined') return {}

    const cacheTag = cacheTagFromQuery(originalRequest)
    return { next: { tags: [cacheTag] }, headers: { 'x-basehub-sdk-build-id': "${sdkBuildId}", 'x-basehub-cache-tag': cacheTag }}
  }

  return {
    ...createClient(${
      noStore
        ? `
// force revalidate to undefined on purpose as it can't coexist with cache: 'no-store'
// we use cache: 'no-store' as we're in draft mode. in prod, we won't touch this.
{ ...options, cache: 'no-store', next: { ...options?.next, revalidate: undefined } }`
        : "options"
    }),
    raw: createFetcher({ ...options, url, headers }) as <Cast = unknown>(
      gql: GraphqlOperation
    ) => Promise<Cast>,
  };
};

basehub.replaceSystemAliases = createClientOriginal.replaceSystemAliases;
`;

function logInsideBox(_lines: (string | null)[]) {
  const lines = _lines.filter((line) => line !== null) as string[];
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

const scheduleNonOverlappingWork = (
  callback: () => Promise<void>,
  interval: number,
  totalTimeout?: number
) => {
  let isWatching = true;
  let timeoutId: NodeJS.Timeout | null = null;

  const stopWatching = () => {
    isWatching = false;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const watchPromise = new Promise<void>((resolve) => {
    const runWatch = async () => {
      while (isWatching) {
        await callback();

        if (isWatching) {
          await new Promise((resolve) => setTimeout(resolve, interval));
        }
      }
      resolve();
    };

    runWatch();

    if (totalTimeout) {
      timeoutId = setTimeout(() => {
        console.log("\n⌛ Watch timeout reached. Stopped `basehub` watcher.");
        stopWatching();
      }, totalTimeout);
    }
  });

  return { watchPromise, stopWatching };
};
