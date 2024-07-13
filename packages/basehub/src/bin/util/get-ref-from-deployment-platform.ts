/* eslint-disable turbo/no-undeclared-env-vars */

export const getRefFromDeploymentPlatform = ({
  ref,
}: {
  ref: string | null;
}) => {
  if (ref) return ref;

  console.log("VERCEL_GIT_COMMIT_REF", process.env.VERCEL_GIT_COMMIT_REF);
  console.log("VERCEL_BRANCH_URL", process.env.VERCEL_BRANCH_URL);
  console.log("VERCEL_URL", process.env.VERCEL_URL);
  console.log("VERCEL_DEPLOYMENT_ID", process.env.VERCEL_DEPLOYMENT_ID);

  const gitBranch =
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.BRANCH ||
    process.env.CF_PAGES_BRANCH;

  if (!gitBranch) return ref;

  return ref;
  // return gitBranch;
};

export const runtime__getRefFromDeploymentPlatform = () => /**JavaScript */ `
export const getRefFromDeploymentPlatform = ({ ref }) => {
  if (ref) return ref;

  console.log('VERCEL_GIT_COMMIT_REF', process.env.VERCEL_GIT_COMMIT_REF);
  console.log('VERCEL_BRANCH_URL', process.env.VERCEL_BRANCH_URL);
  console.log('VERCEL_URL', process.env.VERCEL_URL);
  console.log('VERCEL_DEPLOYMENT_ID', process.env.VERCEL_DEPLOYMENT_ID);

  const gitBranch =
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.BRANCH ||
    process.env.CF_PAGES_BRANCH;

  if (!gitBranch) return ref;

  return ref;
  // return gitBranch;
}
`;
