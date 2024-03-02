import path from "path";
import fs from "fs";

export function writeReactPump({
  modulePath,
  outputPath,
}: {
  modulePath: string;
  outputPath: string;
}) {
  const nextPumpSrcPath = path.resolve(modulePath, "src-react-pump");
  const nextPumpOutputPath = path.resolve(outputPath, "react-pump");

  copyDirSync(nextPumpSrcPath, nextPumpOutputPath);
}

function copyDirSync(src: string, dest: string) {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Get the files and directories in the source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  // Loop through all entries (files and directories)
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Recursively copy directories, or directly copy files
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
