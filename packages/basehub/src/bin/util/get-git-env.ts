/* eslint-disable turbo/no-undeclared-env-vars */

function isNode() {
  return (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  );
}

export const getGitEnv = async () => {
  const execSyncSafe = async (command: string): Promise<string> => {
    if (!isNode()) return "";

    try {
      const execSync = await import("child_process").then((m) => m.execSync);
      return execSync(command, { stdio: "pipe" }).toString().trim();
    } catch (error) {
      // If the command fails, return an empty string
      return "";
    }
  };

  const gitBranch =
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.BRANCH ||
    process.env.RENDER_GIT_BRANCH ||
    process.env.GIT_BRANCH ||
    process.env.CF_PAGES_BRANCH ||
    (await execSyncSafe("git symbolic-ref --short HEAD")) ||
    (await execSyncSafe("git rev-parse --abbrev-ref HEAD"));

  const gitCommitSHA =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.COMMIT_REF ||
    process.env.RENDER_GIT_COMMIT ||
    process.env.COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    (await execSyncSafe("git rev-parse HEAD"));

  const gitBranchDeploymentURL =
    process.env.VERCEL_BRANCH_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.CF_PAGES_URL ||
    null;

  const productionDeploymentURL =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.URL ||
    process.env.RENDER_EXTERNAL_URL ||
    null;

  return {
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL,
  };
};
