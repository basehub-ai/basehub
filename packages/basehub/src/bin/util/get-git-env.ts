/* eslint-disable turbo/no-undeclared-env-vars */

import { execSync } from "child_process";

export const getGitEnv = () => {
  const execSyncSafe = (command: string): string => {
    try {
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
    execSyncSafe("git symbolic-ref --short HEAD") ||
    execSyncSafe("git rev-parse --abbrev-ref HEAD");

  const gitCommitSHA =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.COMMIT_REF ||
    process.env.RENDER_GIT_COMMIT ||
    process.env.COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    execSyncSafe("git rev-parse HEAD");

  const gitBranchDeploymentURL =
    process.env.VERCEL_BRANCH_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.CF_PAGES_URL ||
    null;

  return { gitBranch, gitCommitSHA, gitBranchDeploymentURL };
};
