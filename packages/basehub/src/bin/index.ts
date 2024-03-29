#!/usr/bin/env node

import arg from "arg";
import { main } from "./main";
import { formatError } from "./util/format-error";
import fs from "fs";

// Get package.json
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
// Get version from package.json
const version = packageJson.version;

// Show usage and exit with code
function help(code: number) {
  console.log(`
  Usage
    $ basehub

  Options
    --output, -o  Output directory, if you don't want the default behavior.
    --token, -t  Pass a token or an environment variable name. Defaults to BASEHUB_TOKEN.
    --banner, -b  Add code at the top of each generated file.
    --version, -v  Version number.
    --help, -h     Display this message.`);
  process.exit(code);
}

// Get CLI arguments
let [, , cmd] = process.argv;

if (!cmd || cmd.startsWith("-")) {
  cmd = "generate";
}

const args = arg(
  {
    // types
    "--output": String,
    "--token": String,
    "--banner": String,
    "--version": Boolean,
    "--help": Boolean,
    // aliases
    "-o": "--output",
    "-t": "--token",
    "-b": "--banner",
    "-v": "--version",
    "-h": "--help",
  },
  { permissive: true }
);

if (args["--version"] || args["-v"]) {
  console.log(`basehub v${version}`);
  process.exit(0);
}

// CLI commands
const cmds: { [key: string]: (args: Args) => Promise<void> } = {
  generate: main,
  help: async () => help(0),
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
