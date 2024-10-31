import { spawn } from "child_process";
import path from "path";
import resolvePkg from "resolve-pkg";

/**
 * Credits: Prisma, https://github.com/prisma/prisma/blob/c4d0c6f928a2ccb036073baf5a36fd5320833554/packages/client/scripts/postinstall.js
 */
function run(cmd, params, cwd = process.cwd()) {
  const child = spawn(cmd, params, {
    stdio: ["pipe", "inherit", "inherit"],
    cwd,
  });

  return new Promise((resolve, reject) => {
    child.on("close", () => {
      resolve();
    });
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(code);
      }
    });
    child.on("error", () => {
      reject();
    });
  });
}

async function main() {
  console.log("Running postinstall script...");

  const packagePath = resolvePkg("basehub");
  const binPath = path.join(packagePath, "dist", "bin.cjs");
  console.log("binPath", binPath);

  let generated = false;
  if (binPath) {
    try {
      await run("node", [binPath]);
      generated = true;

      return;
    } catch (error) {
      // ignore error (silent fail)
      console.error(error);
    }
  }

  if (generated) {
    console.log("SDK generated in postinstall ✅");
  } else {
    console.log(
      "Couldn't generate SDK in postinstall. Please run `basehub` to generate manually."
    );
  }
}

main();
