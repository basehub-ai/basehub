import fs from "fs";
import path from "path";

export function addToEslintIgnore(line: string) {
  const eslintIgnorePath = path.join(process.cwd(), ".eslintignore");

  if (!fs.existsSync(eslintIgnorePath)) {
    fs.writeFileSync(eslintIgnorePath, line);
  } else {
    const eslintIgnoreContent = fs.readFileSync(eslintIgnorePath, "utf-8");

    // check if line is already present
    if (eslintIgnoreContent.includes(line)) return;
    fs.appendFileSync(eslintIgnorePath, `\n${line}`);
  }
}

export function addToGitIgnore(line: string) {
  const gitIgnorePath = path.join(process.cwd(), ".gitignore");

  if (!fs.existsSync(gitIgnorePath)) {
    fs.writeFileSync(gitIgnorePath, line);
  } else {
    const eslintIgnoreContent = fs.readFileSync(gitIgnorePath, "utf-8");

    // check if line is already present
    if (eslintIgnoreContent.includes(line)) return;
    fs.appendFileSync(gitIgnorePath, `\n${line}`);
  }
}

const LINTERS = `/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */`;

export function appendGeneratedCodeBanner(
  directoryPath: string,
  extraBanner: string | undefined
) {
  fs.readdirSync(directoryPath).forEach((fileOrDirName) => {
    // check if is directory
    if (fs.lstatSync(path.join(directoryPath, fileOrDirName)).isDirectory()) {
      appendGeneratedCodeBanner(
        path.join(directoryPath, fileOrDirName),
        extraBanner
      );
      return;
    }

    const isTs =
      fileOrDirName.endsWith(".ts") || fileOrDirName.endsWith(".tsx");
    const isJs =
      fileOrDirName.endsWith(".js") || fileOrDirName.endsWith(".jsx");

    if (!isTs && !isJs) return;

    const filePath = path.join(directoryPath, fileOrDirName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    let toAppend =
      "// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk\n\n";
    if (extraBanner) {
      toAppend += `${extraBanner}\n`;
    }
    // check if first line of file already has eslint disable
    if (!fileContent.startsWith("/* eslint-disable */")) {
      toAppend += `${LINTERS}\n`;
    }
    if (
      isTs &&
      !fileContent.startsWith("// @ts-nocheck") &&
      !fileContent.startsWith("//@ts-nocheck")
    ) {
      toAppend += `// @ts-nocheck\n`;
    }

    const alreadyHasBanner =
      fileContent.startsWith(toAppend) || fileContent.includes(toAppend);

    if (toAppend && !alreadyHasBanner) {
      fs.writeFileSync(filePath, `${toAppend}\n${fileContent}`);
    }
  });
}
