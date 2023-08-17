import { generate } from "@genql/cli";
import path from "path";
import { Args } from ".";
import dotenv from "dotenv";
import { z } from "zod";
import fs from "fs";

export const main = async (args: Args) => {
  console.log("Generating...");

  dotenv.config();

  console.log({ env: process.env });

  const basehubUrl = new URL(z.string().parse(process.env.BASEHUB_URL));

  if (basehubUrl.origin !== "https://basehub.com") {
    throw new Error("Invalid basehub url");
  }

  const token = basehubUrl.searchParams.get("token");

  const basehubDistPath = path.resolve(
    process.cwd(),
    "node_modules",
    "basehub",
    "dist"
  );

  await generate({
    endpoint: basehubUrl.toString(),
    headers: {
      Authorization: `Bearer ${token}`,
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

  console.log("Generated ✨");
  return;
};

const basehubExport = `
export const basehub = createClient()
`;
