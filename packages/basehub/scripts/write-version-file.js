import { writeFile } from "fs";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory of this script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json
const packageJsonPath = join(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const version = packageJson.version;

// Write version to src/version.ts
const versionFilePath = join(__dirname, "../src/version.ts");
const versionFileContent = `export const version = "${version}";\n`;

writeFile(versionFilePath, versionFileContent, (err) => {
  if (err) {
    console.error("Error writing version file:", err);
    process.exit(1);
  }
  console.log(`Version file written: ${version}`);
});
