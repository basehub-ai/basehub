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
  console.log("basehub running postinstall script...");
  const basehubModulePath = path.resolve("./dist/bin.js");

  console.log({ basehubModulePath });

  if (fs.existsSync(basehubModulePath)) {
    console.log("HAS BEEN INSTALLED");
    // has been installed, so we run it
    try {
      await run("node", [basehubModulePath]);
      console.log("generated in postinstall ✅");
    } catch (error) {
      console.log("failed", error);
      // ignore error (silent fail)
    }
  }

  console.log("done.");
}

main();
