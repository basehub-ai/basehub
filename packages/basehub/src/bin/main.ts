import { generate } from "./tasks/main.js";
import path from "path";
import { Args } from "./index.js";
import fs from "fs";
import { getStuffFromEnv, Options } from "./util/get-stuff-from-env.js";
import type { ResolvedRef } from "../common-types.js";

const onProcessEndCallbacks: Array<() => void> = [];

async function updateTsconfigIncludes(outputPath: string, silent: boolean) {
  const tsconfigPath = path.resolve(process.cwd(), "tsconfig.json");

  try {
    if (!fs.existsSync(tsconfigPath)) {
      return;
    }

    const tsconfigContent = fs.readFileSync(tsconfigPath, "utf-8");
    const tsconfig = JSON.parse(tsconfigContent);
    const relativePath = path
      .relative(process.cwd(), outputPath)
      .replace(/\\/g, "/");

    // Check if already included
    if (tsconfig.include && tsconfig.include.includes(relativePath)) {
      return;
    }

    let updatedContent = tsconfigContent;

    if (tsconfig.include) {
      // Find the include array and append to it
      const includeMatch = updatedContent.match(
        /"include"\s*:\s*\[([\s\S]*?)\]/
      );
      if (includeMatch && includeMatch[1] !== undefined) {
        const [fullMatch, arrayContent] = includeMatch;
        const newEntry =
          arrayContent.trim() === ""
            ? `"${relativePath}"`
            : `${arrayContent}, "${relativePath}"`;
        updatedContent = updatedContent.replace(
          fullMatch,
          `"include": [${newEntry}]`
        );
      }
    } else {
      // Add include array at the top level - insert after the opening brace
      updatedContent = updatedContent.replace(
        /^(\s*\{\s*)/m,
        `$1\n  "include": ["${relativePath}"],`
      );
    }

    fs.writeFileSync(tsconfigPath, updatedContent);
    logIfNotSilent(
      silent,
      `📝 Added ${relativePath} to tsconfig.json includes`
    );
  } catch (error) {
    // Silently fail - don't break the build
    if (!silent) {
      console.warn(
        `⚠️  Failed to update tsconfig.json: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}

export const main = async (
  args: Args,
  opts: { forceDraft?: boolean; version: string }
) => {
  const sdkBuildId = "bshb_sdk_" + Math.random().toString(16).slice(2);
  const now = Date.now();
  let previousResolvedRef: ResolvedRef | null = null;

  const options: Options = {
    token: args["--token"],
    prefix: args["--env-prefix"],
    cli: {
      output: args["--output"],
      packageName: args["--package-name"],
    },
    draft: args["--draft"],
    ref: args["--ref"],
    apiVersion: args["--api-version"],
    ...(opts?.forceDraft && { draft: true }),
  };

  const basehubModuleName = args["--package-name"] || "basehub";

  const { output } = await getStuffFromEnv({ ...options });

  let pathArgs: string[] = [];
  if (output) {
    pathArgs = [output];
  } else {
    // default
    pathArgs = [`${basehubModuleName}.d.ts`];
  }

  const basehubOutputPath = path.resolve(process.cwd(), ...pathArgs);

  async function generateSDK(
    silent: boolean,
    prevSchemaHash: string
  ): Promise<{
    preventedClientGeneration: boolean;
    schemaHash: string;
    newResolvedRef: ResolvedRef;
  }> {
    logIfNotSilent(silent, "🪄 Generating...");

    const { url, headers, draft, resolvedRef, token } = await getStuffFromEnv({
      ...options,
      revalidateResolvedRef: true,
    });

    if (!silent) {
      logInsideBox([
        `🎫 SDK Version: ${opts.version} (build id: ${sdkBuildId})`,
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
      packageName: basehubModuleName,
      previousSchemaHash: prevSchemaHash,
    });

    if (preventedClientGeneration) {
      // done
      return {
        preventedClientGeneration,
        schemaHash,
        newResolvedRef: resolvedRef,
      };
    }

    if (args["--debug"]) {
      console.log(`[basehub] generated in: ${basehubOutputPath}`);
    }

    // Update tsconfig.json to include the generated types file
    await updateTsconfigIncludes(basehubOutputPath, silent);

    //     if (
    //       schemaFileContents.includes("mutation<R extends MutationGenqlSelection>")
    //     ) {
    //       // edit `MutationGenqlSelection` to receive the Transaction directly instead of a string
    //       schemaFileContents = schemaFileContents.replace(
    //         "mutation<R extends MutationGenqlSelection>",
    //         `mutation<
    // R extends Omit<MutationGenqlSelection, "transaction" | "transactionAsync"> & {
    //       transaction?: TransactionStatusGenqlSelection & {
    //         __args: Omit<
    //           NonNullable<MutationGenqlSelection["transaction"]>["__args"],
    //           "data"
    //         > & { data: Transaction | string };
    //       };
    //       transactionAsync?: {
    //         __args: Omit<
    //           NonNullable<MutationGenqlSelection["transactionAsync"]>["__args"],
    //           "data"
    //         > & { data: Transaction | string };
    //       };
    //     },
    // >`
    //       );
    //       // add import for Transaction at the start of the file
    //       schemaFileContents +=
    //         "\nimport type { Transaction } from './api-transaction';\nimport type { TransactionStatusGenqlSelection } from './schema';\n";
    //     }

    logIfNotSilent(
      silent,
      `🪄 Generated basehub types in ${Date.now() - now}ms`
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
              fs.existsSync(path.join(basehubOutputPath)) ? "YES" : "NO"
            }`
          );
        }, 1000);
      });
    }

    return {
      preventedClientGeneration,
      schemaHash,
      newResolvedRef: resolvedRef,
    };
  }

  if (args["--watch"]) {
    let isFirst = true;
    let currSchemaHash = "";

    const { watchPromise, stopWatching } = scheduleNonOverlappingWork(
      async () => {
        let retryCount = 0;
        const maxRetries = 5;
        const retryDelay = 1000;

        while (retryCount <= maxRetries) {
          try {
            const result = await generateSDK(!isFirst, currSchemaHash);
            currSchemaHash = result.schemaHash;
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
            isFirst = false;
            break; // Success, exit retry loop
          } catch (error) {
            retryCount++;
            if (retryCount > maxRetries) {
              console.error(
                `❌ Failed to generate SDK after ${maxRetries} retries:`,
                error
              );
              throw error; // Re-throw after all retries exhausted
            }
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
          }
        }
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

    // If we're still alive after process.exit(0), force kill ourselves
    console.log(
      `[${process.pid}] BaseHub process still alive after exit(), forcing SIGKILL...`
    );
    process.kill(process.pid, "SIGKILL");
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
