import { dotenvLoad } from "dotenv-mono";
import { z } from "zod";

/**
 * IMPORTANT: This function's logic needs to be the same as the one further down, which will be injected to the generated code and ran at runtime.
 */

export const basehubAPIOrigin = "https://api.basehub.com";

export const getBaseHubUrlFromEnv = () => {
  dotenvLoad();

  const parsedDebugForcedURL = z
    .string()
    .safeParse(process.env.BASEHUB_DEBUG_FORCED_URL);

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

  if (!basehubUrl.searchParams.get("token")) {
    if (!parsedBasehubTokenEnv.success) {
      console.log(
        "Token not found. Make sure to include the token in the `token` query parameter, or in the BASEHUB_TOKEN env var."
      );
      process.exit(1);
    } else {
      basehubUrl.searchParams.set("token", parsedBasehubTokenEnv.data);
    }
  }

  if (!basehubUrl.searchParams.get("ref")) {
    if (!parsedBasehubRefEnv.success) {
      // ref is not required, so we won't throw an error.
    } else {
      basehubUrl.searchParams.set("ref", parsedBasehubRefEnv.data);
    }
  }

  if (!basehubUrl.searchParams.get("draft")) {
    if (!parsedBasehubDraftEnv.success) {
      // draft is not required, so we won't throw an error.
    } else {
      basehubUrl.searchParams.set("draft", parsedBasehubDraftEnv.data);
    }
  }

  // 2. let's validate the URL

  if (basehubUrl.pathname.split("/")[1] !== "graphql") {
    console.log(
      `Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql`
    );
    process.exit(1);
  }

  // 3. done.

  return basehubUrl;
};

/**
 * Will inject to generated code, so we keep the same logic and don't hardcode the URL in the generated output.
 * doesn't use Zod nor dotenv-flow (so we don't ship extra stuff to the generated bundle). Assumes the env vars are already loaded.
 */
export const runtime__getBaseHubUrlFromEnvString = /**JavaScript */ `
const basehubOrigin = "${basehubAPIOrigin}";

const getBaseHubUrlFromEnv = () => {
    let urlCandidate = "";

    const parsedDebugForcedURL = process.env.BASEHUB_DEBUG_FORCED_URL;

    const basehubUrl = new URL(
      parsedDebugForcedURL
        ? parsedDebugForcedURL
        : \`${basehubAPIOrigin}/graphql\`
    );

    // These params can either come disambiguated, or in the URL.
    // Params that come from the URL take precedence.

    const parsedBasehubTokenEnv = process.env.BASEHUB_TOKEN;
    const parsedBasehubRefEnv = process.env.BASEHUB_REF;
    const parsedBasehubDraftEnv = process.env.BASEHUB_DRAFT;

    if (!basehubUrl.searchParams.get("token")) {
        if (!parsedBasehubTokenEnv) {
            throw new Error("Token not found. Make sure to include the token in the \`token\` query parameter, or in the BASEHUB_TOKEN env var.");
        } else {
            basehubUrl.searchParams.set("token", parsedBasehubTokenEnv);
        }
    }

    if (!basehubUrl.searchParams.get("ref")) {
        if (!parsedBasehubRefEnv) {
            // ref is not required, so we won't throw an error.
        } else {
            basehubUrl.searchParams.set("ref", parsedBasehubRefEnv);
        }
    }

    if (!basehubUrl.searchParams.get("draft")) {
        if (!parsedBasehubDraftEnv) {
            // draft is not required, so we won't throw an error.
        } else {
            basehubUrl.searchParams.set("draft", parsedBasehubDraftEnv);
        }
    }

    // 2. let's validate the URL

    if (basehubUrl.pathname.split("/")[1] !== "graphql") {
        throw new Error(\`Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql\`);
    }

    // 3. done.

    return basehubUrl;
};
`;
