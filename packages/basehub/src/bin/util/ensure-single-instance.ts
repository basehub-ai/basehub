import path from "path";
import fs from "fs";

export function ensureSingleInstance(output: string) {
  const pidFile = path.join(output, ".pid");

  if (fs.existsSync(pidFile)) {
    const pid = Number(fs.readFileSync(pidFile, "utf8"));
    try {
      process.kill(pid, 0); // Check if process exists
      process.kill(pid); // Kill it if it does
    } catch (e) {
      // Process doesn't exist
    }
  }

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  fs.writeFileSync(path.join(output, ".pid"), process.pid.toString());

  return () => {
    // cleanup if needed
    fs.unlinkSync(pidFile);
  };
}
