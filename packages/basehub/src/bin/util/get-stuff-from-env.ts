/* eslint-disable turbo/no-undeclared-env-vars */
import { dotenvLoad } from "dotenv-mono";
import { getGitEnv } from "./get-git-env";
import { ResolvedRef } from "../../common-types";

/**
 * IMPORTANT: This function's logic needs to be the same as the one further down, which will be injected to the generated code and ran at runtime.
 */

export const basehubAPIOrigin = "https://api.basehub.com";
const defaultEnvVarPrefix = "BASEHUB";
const DEFAULT_API_VERSION = "3";

export type Options = {
  forceDraft?: boolean;
  draft?: boolean;
  output: string | undefined;
  prefix: string | undefined;
  /**
   * @deprecated
   */
  token: string | undefined;
  ref: string | undefined;
  apiVersion: string | undefined;
};

export const getStuffFromEnv = async (
  options: Options & {
    previousResolvedRef: ResolvedRef | null;
  }
): Promise<{
  output: string | null;
  draft: boolean;
  url: URL;
  headers: Record<string, string>;
  gitBranch: string | null;
  gitCommitSHA: string | null;
  gitBranchDeploymentURL: string | null;
  productionDeploymentURL: string | null;
  token: string;
  resolvedRef: ResolvedRef;
  newResolvedRefPromise: Promise<ResolvedRef>;
}> => {
  dotenvLoad({ priorities: { ".dev.vars": 1 } });

  type EnvVarName =
    | "TOKEN"
    | "REF"
    | "DRAFT"
    | "DEBUG_FORCED_URL"
    | "URL"
    | "OUTPUT"
    | "API_VERSION";

  const buildEnvVarName = (name: EnvVarName) => {
    let prefix = defaultEnvVarPrefix;
    if (options.prefix) {
      if (options.prefix.endsWith("_")) {
        options.prefix = options.prefix.slice(0, -1); // we remove the trailing _
      }

      if (options.prefix.endsWith(name)) {
        // remove the name from the prefix
        options.prefix = options.prefix.slice(0, -name.length);
      }

      // the user may include BASEHUB in their prefix...
      if (options.prefix.endsWith(defaultEnvVarPrefix)) {
        prefix = options.prefix;
      } else {
        // ... if they don't, we'll add it ourselves.
        prefix = `${options.prefix}_${defaultEnvVarPrefix}`;
      }
    }
    // this should result in something like <prefix>_BASEHUB_{TOKEN,REF,DRAFT} or BASEHUB_{TOKEN,REF,DRAFT}
    return `${prefix}_${name}`;
  };

  const getEnvVar = (name: EnvVarName) => process.env[buildEnvVarName(name)];

  const parsedDebugForcedURL = getEnvVar("DEBUG_FORCED_URL");

  const parsedBackwardsCompatURL = getEnvVar("URL");

  const backwardsCompatURL = parsedBackwardsCompatURL
    ? new URL(parsedBackwardsCompatURL)
    : undefined;

  // 1. let's first form the base URL

  const basehubUrl = new URL(
    parsedDebugForcedURL ? parsedDebugForcedURL : `${basehubAPIOrigin}/graphql`
  );

  let tokenNotFoundErrorMessage = `🔴 Token not found. Make sure to include the ${buildEnvVarName(
    "TOKEN"
  )} env var.`;

  const resolveTokenParam = (token: string | null) => {
    if (!token) return null;
    // console.warn(
    //   `🚧 Warning! The --token parameter will be deprecated in the next major version. You should use --env-prefix instead.`
    // );
    const isRaw = token.startsWith("bshb_");
    if (isRaw) {
      console.warn(
        `🚧 Warning! You're using a raw token. This will be deprecated in the next major version. You should use an environment variable.`
      );
      return token;
    }
    tokenNotFoundErrorMessage = `🔴 Token not found. Make sure to include the ${token} env var.`;
    const fromEnv = process.env[token];
    if (fromEnv) return fromEnv;
    return ""; // empty string to prevent fallback
  };

  const resolvedToken = resolveTokenParam(options?.token ?? null);

  const token =
    resolvedToken ??
    basehubUrl.searchParams.get("token") ??
    getEnvVar("TOKEN") ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("token")
      : undefined) ??
    null;

  if (!token) {
    console.log(tokenNotFoundErrorMessage);
    process.exit(1);
  }

  const ref =
    options.ref ??
    basehubUrl.searchParams.get("ref") ??
    getEnvVar("REF") ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("ref")
      : undefined) ??
    null;

  let draft =
    basehubUrl.searchParams.get("draft") ??
    getEnvVar("DRAFT") ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("draft")
      : undefined) ??
    false;

  if (options?.draft) {
    draft = true;
  }

  let apiVersion =
    basehubUrl.searchParams.get("api-version") ??
    getEnvVar("API_VERSION") ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("api-version")
      : undefined) ??
    DEFAULT_API_VERSION;

  if (options?.apiVersion) {
    apiVersion = options.apiVersion;
  }

  // 2. let's validate the URL

  if (basehubUrl.pathname.split("/")[1] !== "graphql") {
    console.log(
      `🔴 Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql.`
    );
    process.exit(1);
  }

  // we'll pass these via headers
  basehubUrl.searchParams.delete("token");
  basehubUrl.searchParams.delete("ref");
  basehubUrl.searchParams.delete("draft");

  draft = !!draft;

  // 3.
  const {
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL,
  } = getGitEnv();

  const newResolvedRefPromise = resolveRef({
    url: basehubUrl,
    token,
    ref,
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    apiVersion,
  });

  const resolvedRef =
    options.previousResolvedRef ?? (await newResolvedRefPromise);

  return {
    draft,
    output: getEnvVar("OUTPUT") ?? options.output ?? null,
    url: basehubUrl,
    gitBranch,
    gitCommitSHA,
    token,
    resolvedRef,
    newResolvedRefPromise,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    headers: {
      "x-basehub-token": token,
      "x-basehub-ref": resolvedRef.ref,
      ...(gitBranch ? { "x-basehub-git-branch": gitBranch } : {}),
      ...(gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {}),
      ...(draft ? { "x-basehub-draft": "true" } : {}),
      ...(apiVersion ? { "x-basehub-api-version": apiVersion } : {}),
      ...(gitBranchDeploymentURL
        ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL }
        : {}),
      ...(productionDeploymentURL
        ? { "x-basehub-production-deployment-url": productionDeploymentURL }
        : {}),
    },
  };
};

async function resolveRef({
  url,
  token,
  ref,
  gitBranch,
  gitCommitSHA,
  gitBranchDeploymentURL,
  productionDeploymentURL,
  apiVersion,
}: {
  url: URL;
  token: string;
  ref: string | null | undefined;
  gitBranch: string | null;
  gitCommitSHA: string | null;
  gitBranchDeploymentURL: string | null;
  productionDeploymentURL: string | null;
  apiVersion: string | null;
}) {
  const refResolverEndpoint = getBaseHubAppApiEndpoint(
    url,
    "/api/git/resolve-ref"
  );

  const res = await fetch(refResolverEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-basehub-token": token,
      ...(ref ? { "x-basehub-ref": ref } : {}),
      ...(gitBranch ? { "x-basehub-git-branch": gitBranch } : {}),
      ...(gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {}),
      ...(apiVersion ? { "x-basehub-api-version": apiVersion } : {}),
      ...(gitBranchDeploymentURL
        ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL }
        : {}),
      ...(productionDeploymentURL
        ? { "x-basehub-production-deployment-url": productionDeploymentURL }
        : {}),
    },
    cache: "no-store",
    body: JSON.stringify({}),
  });

  if (res.status !== 200) {
    throw new Error(`Failed to resolve ref: ${res.statusText}`);
  }

  const data = await res.json();
  const resolvedRef = data as ResolvedRef;
  return resolvedRef;
}

/**
 * Will inject to generated code, so we keep the same logic and don't hardcode the URL in the generated output.
 * doesn't use Zod nor dotenv-flow (so we don't ship extra stuff to the generated bundle). Assumes the env vars are already loaded.
 */
export const runtime__getStuffFromEnvString = (
  options: Options & {
    gitBranch: string | null;
    gitCommitSHA: string | null;
  }
) => /**JavaScript */ `
export const getStuffFromEnv = (options) => {
    const defaultEnvVarPrefix = "${defaultEnvVarPrefix}";

    options = options || {};
    if (options.token === undefined) {
      options.token = ${
        options.token ? `"${options.token}"` : undefined
      } || null;
    }
    if (options.prefix === undefined) {
      options.prefix = ${
        options.prefix ? `"${options.prefix}"` : undefined
      } || null;
    }
    // we'll use the draft from .env if available
    if (!options.draft && ${options.draft}) {
      options.draft = true;
    }

    const buildEnvVarName = (name) => {
      let prefix = defaultEnvVarPrefix;
      if (options.prefix) {
        if (options.prefix.endsWith("_")) {
          options.prefix = options.prefix.slice(0, -1); // we remove the trailing _
        }
  
        if (options.prefix.endsWith(name)) {
          // remove the name from the prefix
          options.prefix = options.prefix.slice(0, -name.length);
        }
  
        // the user may include BASEHUB in their prefix...
        if (options.prefix.endsWith(defaultEnvVarPrefix)) {
          prefix = options.prefix;
        } else {
          // ... if they don't, we'll add it ourselves.
          prefix = \`\${options.prefix}_\${defaultEnvVarPrefix}\`;
        }
      }
      // this should result in something like <prefix>_BASEHUB_{TOKEN,REF,DRAFT} or BASEHUB_{TOKEN,REF,DRAFT}
      return \`\${prefix}_\${name}\`;
    };

    const getEnvVar = (name: EnvVarName) => process.env[buildEnvVarName(name)];

    const parsedDebugForcedURL = getEnvVar("DEBUG_FORCED_URL");
    const parsedBackwardsCompatURL = getEnvVar("URL");

    const backwardsCompatURL = parsedBackwardsCompatURL
      ? new URL(parsedBackwardsCompatURL)
      : undefined;


    const basehubUrl = new URL(
      parsedDebugForcedURL
        ? parsedDebugForcedURL
        : \`${basehubAPIOrigin}/graphql\`
    );

    // These params can either come disambiguated, or in the URL.
    // Params that come from the URL take precedence.

    const parsedBasehubTokenEnv = getEnvVar("TOKEN");
    const parsedBasehubRefEnv = getEnvVar("REF");
    const parsedBasehubDraftEnv = getEnvVar("DRAFT");
    const parsedBasehubApiVersionEnv = getEnvVar("API_VERSION");

    let tokenNotFoundErrorMessage = \`🔴 Token not found. Make sure to include the \${buildEnvVarName(
      "TOKEN"
    )} env var.\`;

    const resolveTokenParam = (token) => {
      if (!token) return null;
      const isRaw = token.startsWith("bshb_");
      if (isRaw) return token;
      tokenNotFoundErrorMessage = \`🔴 Token not found. Make sure to include the \${token} env var.\`;
      return process.env[token] ?? ''; // empty string to prevent fallback
    };

    const resolvedToken = resolveTokenParam(options?.token ?? null);

    const token =
      resolvedToken ?? basehubUrl.searchParams.get("token") ??
      parsedBasehubTokenEnv ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("token")
        : undefined) ??
      null;

    if (!token) {
      throw new Error(tokenNotFoundErrorMessage);
    }

    let draft =
       basehubUrl.searchParams.get("draft") ??
      parsedBasehubDraftEnv ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("draft")
        : undefined) ??
      false;

    if (options?.draft !== undefined) {
      draft = options.draft;
    }

    let apiVersion =
      basehubUrl.searchParams.get("api-version") ??
      parsedBasehubApiVersionEnv ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("api-version")
        : undefined) ??
      "${DEFAULT_API_VERSION}";

      if (options?.apiVersion !== undefined) {
        apiVersion = options.apiVersion;
      }
  
    // 2. let's validate the URL

    if (basehubUrl.pathname.split("/")[1] !== "graphql") {
        throw new Error(\`🔴 Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql.\`);
    }

    // we'll pass these via headers
    basehubUrl.searchParams.delete("token");
    basehubUrl.searchParams.delete("ref");
    basehubUrl.searchParams.delete("draft");
    basehubUrl.searchParams.delete("api-version");

    // 3.
    const gitBranch = ${options.gitBranch ? `"${options.gitBranch}"` : null};
    const gitCommitSHA = ${
      options.gitCommitSHA ? `"${options.gitCommitSHA}"` : null
    };

    return {
      isForcedDraft: ${!!options.forceDraft},
      draft,
      url: basehubUrl,
      headers: {
        "x-basehub-token": token,
        "x-basehub-ref": options?.ref ?? resolvedRef.ref,
        ...(gitBranch ? { "x-basehub-git-branch": gitBranch } : {}),
        ...(gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {}),
        ...(gitBranchDeploymentURL ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL } : {}),
        ...(productionDeploymentURL ? { "x-basehub-production-deployment-url": productionDeploymentURL } : {}),
        ...(draft ? { "x-basehub-draft": "true" } : {}),
        ...(apiVersion ? { "x-basehub-api-version": apiVersion } : {}),
      },
    };
`;

function getBaseHubAppApiEndpoint(url: URL, pathname: string) {
  let origin: string;
  switch (true) {
    case url.origin.includes("api.basehub.com"):
      origin = "https://basehub.com" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("api.bshb.dev"):
      origin = "https://basehub.dev" + pathname + url.search + url.hash;
      break;
    case url.origin.includes("localhost:3001"):
      origin = "http://localhost:3000" + pathname + url.search + url.hash;
      break;
    default:
      origin = url.origin + pathname + url.search + url.hash;
  }

  return origin;
}
