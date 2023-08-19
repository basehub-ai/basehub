const childProcess = require("child_process");

/**
 * Credits: Prisma, https://github.com/prisma/prisma/blob/c4d0c6f928a2ccb036073baf5a36fd5320833554/packages/client/scripts/postinstall.js
 */
function run(cmd, params, cwd = process.cwd()) {
  const child = childProcess.spawn(cmd, params, {
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

/**
 * Credits: Prisma, https://github.com/prisma/prisma/blob/c4d0c6f928a2ccb036073baf5a36fd5320833554/packages/client/scripts/postinstall.js
 */
function getLocalPackagePath() {
  try {
    const packagePath = require.resolve("basehub/package.json");
    if (packagePath) return require.resolve("basehub");
  } catch (error) {
    // not resolved, ignore
  }

  return null;
}

async function main() {
  console.log("Running postinstall script...");

  const packagePath = getLocalPackagePath();

  let generated = false;
  if (packagePath) {
    try {
      await run("node", [packagePath]);
      generated = true;

      return;
    } catch (error) {
      // ignore error (silent fail)
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
