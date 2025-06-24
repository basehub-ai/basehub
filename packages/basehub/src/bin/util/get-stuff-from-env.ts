/* eslint-disable turbo/no-undeclared-env-vars */
import { getGitEnv } from "./get-git-env.js";
import type { ResolvedRef } from "../../common-types.js";
import { hashObject } from "./hash.js";
import { isV0OrBolt } from "../../vibe.js";
import { getGlobalConfig } from "../../index.js";
import { version } from "../../version.js";

export const basehubAPIOrigin = "https://api.basehub.com";
const defaultEnvVarPrefix = "BASEHUB";
const DEFAULT_API_VERSION = "4";

export type FallbackPlayground = {
  /**
   * team/repo
   */
  target: `${string}/${string}`;
  /**
   * The playground id
   */
  id: string;
};

export type Options = {
  draft?: boolean;
  prefix?: string | undefined;
  token?: string | undefined;
  ref?: string | undefined;
  apiVersion?: string | undefined;
  revalidateResolvedRef?: boolean;
  fallbackPlayground?: FallbackPlayground | undefined;
  /**
   * In case this is being called from the CLI and not the user's app runtime
   */
  cli?: {
    /**
     * in case of a type generation
     */
    output?: string | undefined;
    packageName?: string | undefined;
  };
};

export const getStuffFromEnv = async (options?: Options) => {
  if (!options) {
    options = {};
  }

  if (options.cli) {
    await import("dotenv-mono").then(({ dotenvLoad }) => {
      dotenvLoad({ priorities: { ".dev.vars": 1 } });
    });
  }

  const globalConfig = getGlobalConfig();

  let isForcedDraft = false;
  try {
    isForcedDraft = process.env.NODE_ENV === "development" || isV0OrBolt();
  } catch (err) {
    // noop
  }

  type EnvVarName =
    | "TOKEN"
    | "REF"
    | "DRAFT"
    | "DEBUG_FORCED_URL"
    | "URL"
    | "OUTPUT"
    | "FALLBACK_PLAYGROUND_TARGET"
    | "FALLBACK_PLAYGROUND_ID"
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

  const getEnvVar = (name: EnvVarName) => process?.env?.[buildEnvVarName(name)];

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
    const fromEnv = process?.env?.[token];
    if (fromEnv) return fromEnv;
    return ""; // empty string to prevent fallback
  };

  const resolvedToken = resolveTokenParam(options?.token ?? null);

  const token =
    resolvedToken ??
    basehubUrl.searchParams.get("token") ??
    getEnvVar("TOKEN") ??
    globalConfig?.token ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("token")
      : undefined) ??
    null;

  let fallbackPlayground: Options["fallbackPlayground"]; // only if token is not provided

  if (!token) {
    // Get fallback playground config early so we can use it in token validation
    const fallbackPlaygroundTarget =
      options.fallbackPlayground?.target ??
      getEnvVar("FALLBACK_PLAYGROUND_TARGET") ??
      globalConfig?.fallbackPlayground?.target;
    const fallbackPlaygroundId =
      options.fallbackPlayground?.id ??
      getEnvVar("FALLBACK_PLAYGROUND_ID") ??
      globalConfig?.fallbackPlayground?.id;

    fallbackPlayground =
      options.fallbackPlayground ??
      (fallbackPlaygroundId && fallbackPlaygroundTarget
        ? {
            target: fallbackPlaygroundTarget as `${string}/${string}`,
            id: fallbackPlaygroundId,
          }
        : undefined);

    if (fallbackPlayground) {
      // Token not found, falling back to playground
    } else {
      if (options.cli) {
        console.error(tokenNotFoundErrorMessage);
        process.exit(1);
      } else {
        throw new Error(tokenNotFoundErrorMessage);
      }
    }
  }

  const ref =
    options.ref ??
    basehubUrl.searchParams.get("ref") ??
    getEnvVar("REF") ??
    globalConfig?.ref ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("ref")
      : undefined) ??
    null;

  let draft =
    basehubUrl.searchParams.get("draft") ??
    getEnvVar("DRAFT") ??
    globalConfig?.draft ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("draft")
      : undefined) ??
    false;

  if (isForcedDraft) {
    draft = true;
  }

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
    const err = `🔴 Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql.`;
    if (options.cli) {
      console.error(err);
      process.exit(1);
    } else {
      throw new Error(err);
    }
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
  } = await getGitEnv(options);

  const resolvedRef = await resolveRef({
    url: basehubUrl,
    token,
    ref,
    gitBranch,
    gitCommitSHA,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    apiVersion,
    revalidate: options.revalidateResolvedRef,
    fallbackPlayground,
  });

  let isNextjsDraftMode = false;
  if (!isV0OrBolt() && !draft) {
    // try to auto-detect (only if draft is not explicitly set by the user)
    try {
      // @ts-ignore
      const { draftMode } = await import("next/headers");
      isNextjsDraftMode = (await draftMode()).isEnabled;
    } catch (error) {
      // noop, not using nextjs
    }
  }

  if (isNextjsDraftMode) {
    draft = true;
  }

  let previewRef: string | undefined;
  if (draft && !isV0OrBolt()) {
    // try to get ref from cookies
    try {
      // @ts-ignore
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const ref = cookieStore.get("bshb-preview-ref-" + resolvedRef.repoHash)
        ?.value as string | undefined;
      if (ref) {
        previewRef = ref;
      }
    } catch (error) {
      // noop
    }
  }

  return {
    draft,
    previewRef,
    isForcedDraft,
    isNextjsDraftMode,
    output: getEnvVar("OUTPUT") ?? options.cli?.output ?? null,
    resolvedRef,
    url: basehubUrl.toString(),
    gitBranch,
    gitCommitSHA,
    token,
    fallbackPlayground,
    gitBranchDeploymentURL,
    productionDeploymentURL,
    headers: {
      "x-basehub-api-version": apiVersion,
      "x-basehub-sdk-build-id": `bshb_sdk__${version}__${resolvedRef.id}`,
      ...(token ? { "x-basehub-token": token } : {}),
      ...(ref ? { "x-basehub-ref": ref } : {}),
      // override if present
      ...(previewRef ? { "x-basehub-ref": previewRef } : {}),
      ...(gitBranch ? { "x-basehub-git-branch": gitBranch } : {}),
      ...(gitCommitSHA ? { "x-basehub-git-commit-sha": gitCommitSHA } : {}),
      ...(draft ? { "x-basehub-draft": "true" } : {}),
      ...(gitBranchDeploymentURL
        ? { "x-basehub-git-branch-deployment-url": gitBranchDeploymentURL }
        : {}),
      ...(productionDeploymentURL
        ? { "x-basehub-production-deployment-url": productionDeploymentURL }
        : {}),
      ...(fallbackPlayground
        ? {
            "x-basehub-fallback-playground-target": fallbackPlayground.target,
            "x-basehub-fallback-playground-id": fallbackPlayground.id,
          }
        : {}),
    },
  };
};

const resolvedRefCache = new Map<string, ResolvedRef>();

export async function resolveRef({
  url,
  token,
  ref,
  gitBranch,
  gitCommitSHA,
  gitBranchDeploymentURL,
  productionDeploymentURL,
  apiVersion,
  revalidate,
  fallbackPlayground,
}: {
  url: URL;
  token: string | null;
  ref: string | null | undefined;
  gitBranch: string | null;
  gitCommitSHA: string | null;
  gitBranchDeploymentURL: string | null;
  productionDeploymentURL: string | null;
  apiVersion: string | null;
  revalidate?: boolean;
  fallbackPlayground?: FallbackPlayground | undefined;
}) {
  const headers = {
    ...(token ? { "x-basehub-token": token } : {}),
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
    ...(fallbackPlayground
      ? {
          "x-basehub-fallback-playground-target": fallbackPlayground.target,
          "x-basehub-fallback-playground-id": fallbackPlayground.id,
        }
      : {}),
  };

  const cacheKey = hashObject({ headers });
  if (!revalidate) {
    const cachedResolvedRef = resolvedRefCache.get(cacheKey);
    if (cachedResolvedRef) {
      return cachedResolvedRef;
    }
  }

  const refResolverEndpoint = getBaseHubAppApiEndpoint(
    url,
    "/api/git/resolve-ref"
  );

  const res = await fetch(refResolverEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    cache: "no-store",
    body: JSON.stringify({}),
  });

  if (res.status !== 200) {
    throw new Error(`Failed to resolve ref: ${res.statusText}`);
  }

  const data = await res.json();
  const resolvedRef = data as ResolvedRef;
  resolvedRefCache.set(cacheKey, resolvedRef);
  return resolvedRef;
}

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
