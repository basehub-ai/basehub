const { readdirSync } = require("fs");

function main() {
  const root = process.cwd();
  // recursively log the full tree
  logTree(root);

  function logTree(path) {
    console.log(path);
    const files = readdirSync(path, { withFileTypes: true });
    files.forEach((file) => {
      if (file.isDirectory()) {
        logTree(`${path}/${file.name}`);
      } else {
        console.log(`  ${file.name}`);
      }
    });
  }
}

main();
