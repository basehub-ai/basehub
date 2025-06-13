import { promises as fs } from "fs";
import { mkdirp } from "mkdirp";
import { resolve } from "path";
import { rimraf } from "rimraf";

export const ensurePath = async (path: string[], clear: boolean = false) => {
  if (clear) {
    await rimraf(resolve(...path));
  }

  await mkdirp(resolve(...path));
};

export const readFileFromPath = (path: string[]) =>
  fs.readFile(resolve(...path)).then((b) => b.toString());

export const writeFileToPath = async (path: string[], content: string) => {
  const filePath = resolve(...path);
  const folder = resolve(filePath, "..");
  const tempFilePath = filePath + ".tmp"; // Temporary file path

  // Ensure the folder exists
  await fs.mkdir(folder, { recursive: true });

  // Write to a temporary file first
  await fs.writeFile(tempFilePath, content);

  /**
   * Rename the temporary file to the actual file path.
   * Renaming is better than writing directly to the file path as it is atomic.
   */
  await fs.rename(tempFilePath, filePath);
};

export const readFilesAndConcat = (files: string[]) =>
  Promise.all(files.map((file) => readFileFromPath([file]))).then((contents) =>
    contents.join("\n")
  );
