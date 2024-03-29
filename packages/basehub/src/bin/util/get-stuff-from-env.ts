/* eslint-disable turbo/no-undeclared-env-vars */
import { dotenvLoad } from "dotenv-mono";
import { z } from "zod";

/**
 * IMPORTANT: This function's logic needs to be the same as the one further down, which will be injected to the generated code and ran at runtime.
 */

export const basehubAPIOrigin = "https://api.basehub.com";

export const getStuffFromEnv = (options?: {
  draft?: boolean;
  token?: string;
}): {
  url: URL;
  headers: Record<string, string>;
} => {
  dotenvLoad();

  const parsedDebugForcedURL = z
    .string()
    .safeParse(process.env.BASEHUB_DEBUG_FORCED_URL);

  const parsedBackwardsCompatURL = z
    .string()
    .safeParse(process.env.BASEHUB_URL);

  const backwardsCompatURL = parsedBackwardsCompatURL.success
    ? new URL(parsedBackwardsCompatURL.data)
    : undefined;

  // 1. let's first form the base URL

  const basehubUrl = new URL(
    parsedDebugForcedURL.success
      ? parsedDebugForcedURL.data
      : `${basehubAPIOrigin}/graphql`
  );

  // These params can either come disambiguated, or in the URL.
  // Params that come from the URL take precedence.
  const parsedBasehubTokenEnv = z.string().safeParse(process.env.BASEHUB_TOKEN);
  const parsedBasehubRefEnv = z.string().safeParse(process.env.BASEHUB_REF);
  const parsedBasehubDraftEnv = z.string().safeParse(process.env.BASEHUB_DRAFT);

  const resolveTokenParam = (token: string | null) => {
    if (!token) return null;
    const isRaw = token.startsWith("bshb_");
    if (isRaw) return token;
    const fromEnv = z.string().safeParse(process.env[token]);
    if (fromEnv.success) return fromEnv.data;
    return ""; // empty string to prevent fallback
  };

  const resolvedToken = resolveTokenParam(options?.token ?? null);

  const token =
    resolvedToken ??
    basehubUrl.searchParams.get("token") ??
    (parsedBasehubTokenEnv.success ? parsedBasehubTokenEnv.data : undefined) ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("token")
      : undefined) ??
    null;

  if (!token) {
    console.log(
      `Token not found. Make sure to include the ${
        resolvedToken === "" ? options?.token : "BASEHUB_TOKEN"
      } env var.`
    );
    process.exit(1);
  }

  const ref =
    basehubUrl.searchParams.get("ref") ??
    (parsedBasehubRefEnv.success ? parsedBasehubRefEnv.data : undefined) ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("ref")
      : undefined) ??
    null;

  let draft =
    basehubUrl.searchParams.get("draft") ??
    (parsedBasehubDraftEnv.success ? parsedBasehubDraftEnv.data : undefined) ??
    (backwardsCompatURL
      ? backwardsCompatURL.searchParams.get("draft")
      : undefined) ??
    null;

  if (options?.draft) {
    draft = "true";
  }

  // 2. let's validate the URL

  if (basehubUrl.pathname.split("/")[1] !== "graphql") {
    console.log(
      `Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql`
    );
    process.exit(1);
  }

  // we'll pass these via headers
  basehubUrl.searchParams.delete("token");
  basehubUrl.searchParams.delete("ref");
  basehubUrl.searchParams.delete("draft");

  // 3. done.

  return {
    url: basehubUrl,
    headers: {
      "x-basehub-token": token,
      ...(ref ? { "x-basehub-ref": ref } : {}),
      ...(draft ? { "x-basehub-draft": draft } : {}),
    },
  };
};

/**
 * Will inject to generated code, so we keep the same logic and don't hardcode the URL in the generated output.
 * doesn't use Zod nor dotenv-flow (so we don't ship extra stuff to the generated bundle). Assumes the env vars are already loaded.
 */
export const runtime__getStuffFromEnvString = (
  tokenArg: string | null
) => /**JavaScript */ `
export const getStuffFromEnv = (options) => {
    const parsedDebugForcedURL = process.env.BASEHUB_DEBUG_FORCED_URL;
    const parsedBackwardsCompatURL = process.env.BASEHUB_URL;

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

    const envVarName = "${
      tokenArg && !tokenArg.startsWith("bshb_") ? tokenArg : "BASEHUB_TOKEN"
    }";

    const parsedBasehubTokenEnv = process.env[envVarName];
    const parsedBasehubRefEnv = process.env.BASEHUB_REF;
    const parsedBasehubDraftEnv = process.env.BASEHUB_DRAFT;

    const resolveTokenParam = (token) => {
      if (!token) return null;
      const isRaw = token.startsWith("bshb_");
      if (isRaw) return token;
      return process.env[token] ?? ''; // empty string to prevent fallback
    };

    const resolvedToken = resolveTokenParam(options?.token ?? null);

    const token =
      resolvedToken ?? basehubUrl.searchParams.get("token") ??
      (parsedBasehubTokenEnv ? parsedBasehubTokenEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("token")
        : undefined) ??
      null;

    if (!token) {
      throw new Error(
        \`Token not found. Make sure to include the \${
          resolvedToken === "" ? options?.token : envVarName
        } env var.\`
      );
    }

    const ref =
      basehubUrl.searchParams.get("ref") ??
      (parsedBasehubRefEnv ? parsedBasehubRefEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("ref")
        : undefined) ??
      null;

    let draft =
       basehubUrl.searchParams.get("draft") ??
      (parsedBasehubDraftEnv ? parsedBasehubDraftEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("draft")
        : undefined) ??
      null;

    if (options?.draft) {
      draft = "true";
    }

    // 2. let's validate the URL

    if (basehubUrl.pathname.split("/")[1] !== "graphql") {
        throw new Error(\`Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql\`);
    }

    // we'll pass these via headers
    basehubUrl.searchParams.delete("token");
    basehubUrl.searchParams.delete("ref");
    basehubUrl.searchParams.delete("draft");

    // 3. done.

    return {
      url: basehubUrl,
      headers: {
        "x-basehub-token": token,
        ...(ref ? { "x-basehub-ref": ref } : {}),
        ...(draft ? { "x-basehub-draft": draft } : {}),
      },
    };
};
`;
