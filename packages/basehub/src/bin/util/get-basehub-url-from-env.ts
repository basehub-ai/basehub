import dotenv from "dotenv-flow";
import { z } from "zod";

/**
 * IMPORTANT: This function's logic needs to be the same as the one further down, which will be injected to the generated code and ran at runtime.
 */

export const basehubOrigin = "https://basehub.com";

export const getBaseHubUrlFromEnv = () => {
  dotenv.config();

  let urlCandidate = "";

  const parsedBasehubUrlEnv = z.string().safeParse(process.env.BASEHUB_URL);
  // or disambiguated
  const parsedBasehubTeamEnv = z.string().safeParse(process.env.BASEHUB_TEAM);
  const parsedBasehubRepoEnv = z.string().safeParse(process.env.BASEHUB_REPO);

  // 1. let's first form the base URL

  if (parsedBasehubUrlEnv.success) {
    urlCandidate = parsedBasehubUrlEnv.data;
  } else {
    if (
      parsedBasehubTeamEnv.success === false ||
      parsedBasehubRepoEnv.success === false
    ) {
      console.log("BASEHUB_URL not found.");
      process.exit(0);
    }

    urlCandidate = `${basehubOrigin}/${parsedBasehubTeamEnv.data}/${parsedBasehubRepoEnv.data}/graphql`;
  }

  const basehubUrl = new URL(urlCandidate);

  if (basehubUrl.origin !== basehubOrigin) {
    console.log(
      `Origin mismatch. The BASEHUB_URL's origin should be: ${basehubOrigin}`
    );
    process.exit(1);
  }

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

  if (basehubUrl.pathname.split("/").length !== 4) {
    console.log(
      `Invalid URL. Make sure to include the team and repo in the BASEHUB_URL, or in the BASEHUB_TEAM and BASEHUB_REPO env vars.
      
      It should look like this: https://basehub.com/<team>/<repo>/graphql?token=bshb_pk_*****
`
    );
    process.exit(1);
  }

  if (basehubUrl.pathname.split("/")[3] !== "graphql") {
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
 * doesn't use Zod nor dotenv-flow. Assumes the env vars are already loaded.
 */
export const runtime__getBaseHubUrlFromEnvString = /**JavaScript */ `
const basehubOrigin = "https://basehub.com";

const getBaseHubUrlFromEnv = () => {
    let urlCandidate = "";

    const parsedBasehubUrlEnv = process.env.BASEHUB_URL;
    // or disambiguated
    const parsedBasehubTeamEnv = process.env.BASEHUB_TEAM;
    const parsedBasehubRepoEnv = process.env.BASEHUB_REPO;

    // 1. let's first form the base URL

    if (parsedBasehubUrlEnv) {
        urlCandidate = parsedBasehubUrlEnv;
    } else {
        if (!parsedBasehubTeamEnv || !parsedBasehubRepoEnv) {
            throw new Error("BASEHUB_URL not found.");
        }
        urlCandidate = \`\${basehubOrigin}/\${parsedBasehubTeamEnv}/\${parsedBasehubRepoEnv}/graphql\`;
    }

    const basehubUrl = new URL(urlCandidate);

    if (basehubUrl.origin !== basehubOrigin) {
        throw new Error(\`Origin mismatch. The BASEHUB_URL's origin should be: \${basehubOrigin}\`);
    }

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

    if (basehubUrl.pathname.split("/").length !== 4) {
        throw new Error(\`Invalid URL. Make sure to include the team and repo in the BASEHUB_URL, or in the BASEHUB_TEAM and BASEHUB_REPO env vars.\`);
    }

    if (basehubUrl.pathname.split("/")[3] !== "graphql") {
        throw new Error(\`Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql\`);
    }

    // 3. done.

    return basehubUrl;
};
`;
