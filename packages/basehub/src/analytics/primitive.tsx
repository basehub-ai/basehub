/* eslint-disable turbo/no-undeclared-env-vars */

/* -------------------------------------------------------------------------------------------------
 * Client
 * -----------------------------------------------------------------------------------------------*/

let ANALYTICS_ENDPOINT_URL = "https://basehub.com/api/v1/analytics";
if (process?.env?.NEXT_PUBLIC_BASEHUB_ANALYTICS_ENDPOINT) {
  ANALYTICS_ENDPOINT_URL = process.env.NEXT_PUBLIC_BASEHUB_ANALYTICS_ENDPOINT;
} else if (process?.env?.BASEHUB_ANALYTICS_ENDPOINT) {
  ANALYTICS_ENDPOINT_URL = process.env.BASEHUB_ANALYTICS_ENDPOINT;
}

export type AnalyticsParams = {
  /**
   * The _analyticsKey taken from block of our GraphQL API.
   */
  _analyticsKey: string;
};

export const getEventCount = async <Name extends string | string[]>({
  name,
  _analyticsKey,
}: {
  name: Name;
} & AnalyticsParams): Promise<
  Name extends string ? number : Array<{ name: string; count: number }>
> => {
  if (typeof name === "string" && name.split(",").length > 1) {
    throw new Error(
      "If sending multiple events, pass an array of strings, instead of a single, comma-separated string."
    );
  }

  const url = new URL(ANALYTICS_ENDPOINT_URL);
  url.searchParams.append("key", _analyticsKey);
  url.searchParams.append(
    "event-name",
    typeof name === "string" ? name : name.join(",")
  );

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = (await response.json()) as Array<{
    count: number;
    name: string;
  }>;

  return (
    typeof name === "string" ? data[0]?.count ?? 0 : data
  ) as Name extends string ? number : { name: string; count: number }[];
};

export const sendEvent = async ({
  name,
  metadata,
  _analyticsKey,
}: { name: string; metadata?: Record<string, unknown> } & AnalyticsParams) => {
  const response = await fetch(ANALYTICS_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, metadata, key: _analyticsKey }),
  });

  const data = (await response.json()) as
    | { success: true }
    | { success: false; error: string };

  return data;
};
