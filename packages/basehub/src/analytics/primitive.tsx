/* -------------------------------------------------------------------------------------------------
 * Client
 * -----------------------------------------------------------------------------------------------*/

const ANALYTICS_ENDPOINT_URL = "https://basehub.com/api/v1/analytics";

export type AnalyticsParams = {
  /**
   * The _analyticsKey taken from block of our GraphQL API.
   */
  _analyticsKey: string;
};

export const getAnalyticsClient = ({ _analyticsKey }: AnalyticsParams) => {
  const getEventCount = async (name: string) => {
    const response = await fetch(ANALYTICS_ENDPOINT_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, _analyticsKey }),
    });

    const data = (await response.json()) as
      | { success: true; count: number }
      | { success: false; error: string };

    return data;
  };

  const sendEvent = async (
    name: string,
    metadata?: Record<string, unknown>
  ) => {
    const response = await fetch(ANALYTICS_ENDPOINT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, metadata, _analyticsKey }),
    });

    const data = (await response.json()) as
      | { success: true }
      | { success: false; error: string };

    return data;
  };

  return { sendEvent, getEventCount };
};
