import path from "path";
import fs from "fs";

export function writeNextPump({
  modulePath,
  outputPath,
}: {
  modulePath: string;
  outputPath: string;
}) {
  const nextPumpSrcPath = path.resolve(modulePath, "src-next-pump");
  const nextPumpOutputPath = path.resolve(outputPath, "next-pump");

  /**
   * Create next-pump directory if it doesn't exist
   */
  if (!fs.existsSync(nextPumpOutputPath)) {
    fs.mkdirSync(nextPumpOutputPath);
  }

  /**
   * Copy every file from src-next-pump to dist/generated-client/next-pump
   */
  const files = fs.readdirSync(nextPumpSrcPath);
  for (const file of files) {
    const src = path.join(nextPumpSrcPath, file);
    const dest = path.join(nextPumpOutputPath, file);
    fs.copyFileSync(src, dest);
  }
}
