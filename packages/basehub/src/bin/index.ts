#!/usr/bin/env node

import arg from "arg";
import { main } from "./main";
import { pack } from "./pack";
import { formatError } from "./util/format-error";
import fs from "fs";
import resolvePkg from "resolve-pkg";

function getVersion() {
  const basehubModulePath = resolvePkg("basehub");

  // Get package.json
  const packageJson = JSON.parse(
    fs.readFileSync(`${basehubModulePath}/package.json`, "utf-8")
  );
  // Get version from package.json
  const version = packageJson.version;

  return version;
}

// Show usage and exit with code
async function help(code: number) {
  console.log(`
  Usage
    $ basehub
    $ basehub dev  # turns on draft and watch mode automatically.
    $ basehub pack # creates a standalone tarball of the generated client.

  Options
    --output, -o  Output directory, if you don't want the default behavior.
    --env-prefix, -ep  Prefix for environment variables.
    --banner, -b  Add code at the top of each generated file.
    --watch, -w  Watch for changes and regenerate.
    --draft, -d  Generate with draft mode enabled.
    --api-version, -av  The version of the API to use.
    --pack-dest, -pd  Directory to place the tarball (pack command only).
    --keep-generated, -kg  Keep the generated client directory after packing.
    --version, -v  Version number.
    --help, -h     Display this message.`);
  process.exit(code);
}

// Get CLI arguments
let [, , cmd] = process.argv;

const systemArgs = ["-h", "--help", "-v", "--version"];

if (!cmd || (cmd.startsWith("-") && systemArgs.includes(cmd) === false)) {
  cmd = "generate";
}

const args = arg(
  {
    // types
    "--output": String,
    "--token": String,
    "--ref": String,
    "--env-prefix": String,
    "--banner": String,
    "--version": Boolean,
    "--draft": Boolean,
    "--help": Boolean,
    "--watch": Boolean,
    "--api-version": String,
    "--debug": Boolean,
    "--pack-dest": String,
    "--keep-generated": Boolean,
    // aliases
    "-o": "--output",
    "-t": "--token",
    "-r": "--ref",
    "-ep": "--env-prefix",
    "-b": "--banner",
    "-v": "--version",
    "-d": "--draft",
    "-h": "--help",
    "-w": "--watch",
    "-av": "--api-version",
    "-pd": "--pack-dest",
    "-kg": "--keep-generated",
  },
  { permissive: true }
);

const version = getVersion();

if (args["--version"] || args["-v"]) {
  console.log(`basehub v${version}`);
  process.exit(0);
}

// CLI commands
const cmds: { [key: string]: (args: Args) => Promise<void> } = {
  generate: () => main(args, { version }),
  build: () => main(args, { version }), // same as "generate"
  dev: () => main({ ...args, "--watch": true }, { forceDraft: true, version }),
  pack: async () => {
    const _tarballPath = await pack(args, { version });
    // Don't print the path again as it's already logged in the pack function
  },
  help: () => help(0),
};

// Run CLI
try {
  // Run command or show usage for unknown command
  cmds[cmd]
    ? cmds[cmd]?.(args)
        .then(() => {
          process.exit(0);
        })
        .catch((error) => {
          console.error(formatError(error));
          process.exit(1);
        })
    : help(0);
} catch (e) {
  console.error(formatError(e).message);
  process.exit(1);
}

export type Args = typeof args;
