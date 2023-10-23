import { generate } from "@genql/cli";
import path from "path";
import { Args } from ".";
import fs from "fs";
import * as esbuild from "esbuild";
import {
  getStuffFromEnv,
  runtime__getStuffFromEnvString,
} from "./util/get-stuff-from-env";

export const main = async (_args: Args) => {
  console.log("🪄 Generating...");

  const { url, headers } = getStuffFromEnv();

  const basehubModulePath = path.resolve(
    process.cwd(),
    "node_modules",
    "basehub"
  );

  await generate({
    endpoint: url.toString(),
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    output: path.join(basehubModulePath, "dist", "generated-client"),
    verbose: false,
  });

  const generatedMainExportPath = path.join(
    basehubModulePath,
    "dist",
    "generated-client",
    "index.ts"
  );

  // We'll patch some things from the generated code.
  let schemaFileContents = fs.readFileSync(generatedMainExportPath, "utf-8");

  // 1. remove hardcoded URL and replace with our function that infers it from .env
  // on all ocurrances.

  schemaFileContents = schemaFileContents.replace(
    "return createClientOriginal({",
    "const { url, headers } = getStuffFromEnv()\n  return createClientOriginal({" // function injected below
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

  await esbuild.build({
    entryPoints: [generatedMainExportPath],
    bundle: true,
    outfile: path.join(
      basehubModulePath,
      "dist",
      "generated-client",
      "index.js"
    ),
    minify: true,
    format: "cjs",
  });

  console.log("🪄 Generated `basehub` client");
  return;
};

const basehubExport = `
import { createFetcher } from "./runtime";

// we limit options to only the ones we want to expose.
type Options = Omit<ClientOptions, 'url' | 'method' | 'batch' | 'credentials' | 'fetch' | 'fetcher' | 'headers' | 'integrity' | 'keepalive' | 'mode' | 'redirect' | 'referrer' | 'referrerPolicy' | 'window'>

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
  const { url, headers } = getStuffFromEnv();

  return {
    ...createClient(options),
    raw: createFetcher({ ...options, url, headers }) as <Cast = unknown>(
      gql: GraphqlOperation
    ) => Promise<Cast>,
  };
};
`;
