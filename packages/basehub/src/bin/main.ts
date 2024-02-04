import { generate } from "@genql/cli";
import path from "path";
import { Args } from ".";
import fs from "fs";
import * as esbuild from "esbuild";
import {
  getStuffFromEnv,
  runtime__getStuffFromEnvString,
} from "./util/get-stuff-from-env";
import { appendEslintDisableToEachFileInDirectory } from "./util/disable-linters";
import { writeNextPump } from "./util/write-next-pump";

export const main = async (args: Args) => {
  console.log("🪄 Generating...");

  const { url, headers } = getStuffFromEnv();

  const basehubModulePath = path.resolve(
    process.cwd(),
    "node_modules",
    "basehub"
  );

  const pathArgs = args["--output"]
    ? [args["--output"]]
    : ["node_modules", "basehub", "dist", "generated-client"]; // default output path

  const basehubOutputPath = path.resolve(process.cwd(), ...pathArgs);

  await generate({
    endpoint: url.toString(),
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    output: path.join(basehubOutputPath),
    verbose: false,
  });

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
    `\n${runtime__getStuffFromEnvString}`
  );

  // 3. append our basehub function to the end of the file.
  schemaFileContents = schemaFileContents.concat(`\n${basehubExport}`);

  // 4. write the file back.
  fs.writeFileSync(generatedMainExportPath, schemaFileContents);

  // 5. patch error file
  const generatedErrorExportPath = path.join(
    basehubOutputPath,
    "runtime",
    "error.ts"
  );

  const errorFileContents = fs
    .readFileSync(generatedErrorExportPath, "utf-8")
    .split("\n");
  // mutate it
  errorFileContents.splice(
    16,
    0,
    `        this.stringified = JSON.stringify(this)`
  );
  // write it back
  fs.writeFileSync(generatedErrorExportPath, errorFileContents.join("\n"));

  appendEslintDisableToEachFileInDirectory(basehubOutputPath);

  /**
   * Next Pump stuff.
   */
  writeNextPump({
    modulePath: basehubModulePath,
    outputPath: basehubOutputPath,
  });

  if (!args["--ts-only"]) {
    // we'll want to externalize react, react-dom, and "../index" in this case is the generated basehub client.
    const peerDependencies = ["react", "react-dom", "../index"];

    console.log("📦 Compiling to JavaScript...");
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
        banner: {
          js: "/* eslint-disable */",
        },
      }),
      esbuild.build({
        entryPoints: [path.join(basehubOutputPath, "next-pump", "index.ts")],
        bundle: true,
        outdir: path.join(basehubOutputPath, "next-pump"),
        minify: false,
        treeShaking: true,
        splitting: true,
        format: "esm",
        external: peerDependencies,
        banner: {
          js: "/* eslint-disable */",
        },
      }),
    ]);
  }

  console.log("🪄 Generated `basehub` client");
  return;
};

const basehubExport = `
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
    ...createClient(options),
    raw: createFetcher({ ...options, url, headers }) as <Cast = unknown>(
      gql: GraphqlOperation
    ) => Promise<Cast>,
  };
};
`;
