import { generate } from "@genql/cli";
import path from "path";
import { Args } from ".";
import dotenv from "dotenv";
import { z } from "zod";
import fs from "fs";

const basehubOrigin = "https://basehub.com";

export const main = async (args: Args) => {
  console.log("🪄 Generating...");

  dotenv.config();

  let urlCandidate = "";
  let parsedBasehubUrlEnv = z.string().safeParse(process.env.BASEHUB_URL);
  if (parsedBasehubUrlEnv.success === false) {
    // try disambiguated
    const parsedBasehubTeamEnv = z.string().safeParse(process.env.BASEHUB_TEAM);
    const parsedBasehubRepoEnv = z.string().safeParse(process.env.BASEHUB_REPO);
    const parsedBasehubTokenEnv = z
      .string()
      .safeParse(process.env.BASEHUB_TOKEN);
    const parsedBasehubRefEnv = z.string().safeParse(process.env.BASEHUB_REF);

    if (
      parsedBasehubTeamEnv.success === false ||
      parsedBasehubRepoEnv.success === false ||
      parsedBasehubTokenEnv.success === false ||
      parsedBasehubRefEnv.success === false
    ) {
      console.log("BASEHUB_URL not found.");
      process.exit(0);
    }

    urlCandidate = `${basehubOrigin}/${parsedBasehubTeamEnv.data}/${
      parsedBasehubRepoEnv.data
    }/graphql?token=${parsedBasehubTokenEnv.data}${
      parsedBasehubRefEnv.data ? `&ref=${parsedBasehubRefEnv.data}` : ""
    }`;
  } else {
    urlCandidate = parsedBasehubUrlEnv.data;
  }

  const basehubUrl = new URL(urlCandidate);

  if (basehubUrl.origin !== basehubOrigin) {
    console.log(
      `Origin mismatch. The BASEHUB_URL should point to ${basehubOrigin}`
    );
    process.exit(1);
  }

  if (!basehubUrl.searchParams.get("token")) {
    console.log(
      "Token not found. Make sure to include the token in the `token` query parameter."
    );
    process.exit(1);
  }

  const basehubDistPath = path.resolve(
    process.cwd(),
    "node_modules",
    "basehub",
    "dist"
  );

  await generate({
    endpoint: basehubUrl.toString(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    output: path.join(basehubDistPath, "generated-client"),
    verbose: args["--verbose"] ?? false,
  });

  const generatedMainExportPath = path.join(
    basehubDistPath,
    "generated-client",
    "index.ts"
  );

  // extra generated
  fs.appendFileSync(generatedMainExportPath, basehubExport);

  console.log("🪄 Generated `basehub` client");
  return;
};

const basehubExport = `
type Options = Omit<ClientOptions, 'url' | 'method' | 'batch' | 'credentials' | 'fetch' | 'fetcher' | 'headers' | 'integrity' | 'keepalive' | 'mode' | 'redirect' | 'referrer' | 'referrerPolicy' | 'window'>

export const basehub = (options?: Options) => createClient(options)
`;
