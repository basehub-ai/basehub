/* eslint-disable turbo/no-undeclared-env-vars */

import { execSync } from "child_process";

export const getGitEnv = () => {
  try {
    const gitBranch =
      process.env.VERCEL_GIT_COMMIT_REF ||
      process.env.BRANCH ||
      process.env.RENDER_GIT_BRANCH ||
      process.env.GIT_BRANCH ||
      process.env.CF_PAGES_BRANCH ||
      execSync("git symbolic-ref --short HEAD").toString().trim();

    const gitCommitSHA =
      process.env.VERCEL_GIT_COMMIT_SHA ||
      process.env.COMMIT_REF ||
      process.env.RENDER_GIT_COMMIT ||
      process.env.COMMIT_SHA ||
      process.env.CF_PAGES_COMMIT_SHA ||
      execSync("git rev-parse HEAD").toString().trim();

    const gitBranchDeploymentURL =
      process.env.VERCEL_BRANCH_URL ||
      process.env.DEPLOY_PRIME_URL ||
      process.env.CF_PAGES_URL ||
      null;

    return { gitBranch, gitCommitSHA, gitBranchDeploymentURL };
  } catch (error) {
    // ignore error as this should not a blocker
    return { gitBranch: "", gitCommitSHA: "", gitBranchDeploymentURL: "" };
  }
};
