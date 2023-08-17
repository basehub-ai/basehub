#!/usr/bin/env node

import arg from "arg";
import { main } from "./main";
import { formatError } from "./util/format-error";

// Show usage and exit with code
function help(code: number) {
  console.log(`
  Usage:
  
  basehub [--dir=<dir>]

  Options:

    --dir, -d  An example option. [default: "example"]
  
  `);
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
    "--dir": String,
    "--verbose": Boolean,
    // aliases
    "-d": "--dir",
  },
  { permissive: true }
);

// CLI commands
const cmds: { [key: string]: (args: Args) => Promise<void> } = {
  generate: main,
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
