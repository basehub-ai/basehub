export const ensureCrossPlatformTsImport = (statement: string) => {
  // make sure paths created by powershell, with backslashes, are converted to forward slashes
  return statement.replace(/\\/g, "/");
};
