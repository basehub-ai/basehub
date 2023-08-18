const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

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

async function main() {
  console.log("Running postinstall script...");
  const basehubModulePath = path.resolve(
    process.cwd(),
    "node_modules",
    "basehub",
    "dist",
    "bin.js"
  );

  if (fs.existsSync(basehubModulePath)) {
    // has been installed, so we run it
    try {
      await run("node", [basehubModulePath]);
      console.log("SDK generated in postinstall ✅");
    } catch (error) {
      // ignore error (silent fail)
    }
  }
}

main();
