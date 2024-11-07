/* eslint-disable turbo/no-undeclared-env-vars */
import {
  // @ts-ignore
  Scalars,
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
} from "../schema";
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

/** @deprecated Analytics is deprecated, you should use `getEvents` and consume from an Event Block. */
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

/** @deprecated Analytics is deprecated, you should use the Event block with the `sendEventV2` function. */
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

/* -------------------------------------------------------------------------------------------------
 * Events V2
 * -----------------------------------------------------------------------------------------------*/

let ANALYTICS_V2_ENDPOINT_URL = "https://basehub.com/api/v2/events";
if (process?.env?.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT) {
  ANALYTICS_V2_ENDPOINT_URL =
    process.env.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT;
} else if (process?.env?.BASEHUB_ANALYTICS_V2_ENDPOINT) {
  ANALYTICS_V2_ENDPOINT_URL = process.env.BASEHUB_ANALYTICS_V2_ENDPOINT;
}

let QUERY_EVENTS_ENDPOINT_URL = "https://basehub.com/api/v2/events/query";
if (process?.env?.NEXT_PUBLIC_BASEHUB_QUERY_EVENTS_V2_ENDPOINT) {
  QUERY_EVENTS_ENDPOINT_URL =
    process.env.NEXT_PUBLIC_BASEHUB_QUERY_EVENTS_V2_ENDPOINT;
} else if (process?.env?.BASEHUB_QUERY_EVENTS_V2_ENDPOINT) {
  QUERY_EVENTS_ENDPOINT_URL = process.env.BASEHUB_QUERY_EVENTS_V2_ENDPOINT;
}

type KeysStartingWith<Obj, Prefix extends string> = {
  [K in keyof Obj]: K extends `${Prefix}${string}` ? K : never;
}[keyof Obj];

type ExtractEventKey<T extends string> = T extends `${infer Base}:${string}`
  ? Base
  : T;

// Get all event key types (bshb_event_*)
type EventKeys = KeysStartingWith<Scalars, "bshb_event">;

// Map from event key to its schema type
type EventSchemaMap = {
  // @ts-ignore
  [K in EventKeys]: Scalars[`schema_${K}`];
};

type Args<Key extends string> =
  EventSchemaMap[ExtractEventKey<Key>] extends never
    ? [Key]
    : [Key, EventSchemaMap[ExtractEventKey<Key>]];

export const sendEventV2 = async <Key extends `${EventKeys}:${string}`>(
  ...args: Args<Key>
) => {
  const [key, data] = args;
  const response = await fetch(ANALYTICS_V2_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, data }),
  });

  return (await response.json()) as
    | { success: true }
    | { success: false; error: string };
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type MapScalarTypeToFilters<T extends Record<string, any>> = Partial<{
  [K in keyof T]: T[K] extends UnionToIntersection<T[K]>
    ? T[K] extends string
      ?
          | { eq: string }
          | { notEq: string }
          | { regex: string }
          | { contains: string }
          | { exists: boolean }
          | { startsWith: string }
          | { endsWith: string }
      : T[K] extends number
      ?
          | { gt: number; lt?: number }
          | { lt: number; gt?: number }
          | { eq: number }
          | { exists: boolean }
      : T[K] extends boolean
      ? { exists: boolean } | { eq: boolean }
      : // else case: literals
        | { eq: NonNullable<T[K]> }
          | { notEq: NonNullable<T[K]> }
          | { exists: boolean }
    : // unions (same as literals)
      | { eq: NonNullable<T[K]> }
        | { notEq: NonNullable<T[K]> }
        | { exists: boolean };
}>;

type MapScalarTypeToOrder<T extends Record<string, any>> = {
  [K in keyof T & string]: `${K}__ASC` | `${K}__DESC`;
}[keyof T & string];

type GetOptions<
  K extends string,
  Select extends
    | Partial<Record<keyof Scalars[`schema_${K}`], boolean>>
    | undefined = undefined,
> =
  | {
      type: "table";
      first: number;
      skip: number;
      filter?: MapScalarTypeToFilters<Scalars[`schema_${K}`]>;
      orderBy?: MapScalarTypeToOrder<Scalars[`schema_${K}`]>;
      select?: Select;
    }
  | { type: "time-series" };

// Type for table-based response
type TableResponse<
  K extends string,
  T extends Record<keyof Scalars[`schema_${K}`], unknown>,
  Select extends Partial<Record<keyof Scalars[`schema_${K}`], boolean>>,
> =
  | {
      success: true;
      data: Array<{ date: string } & Pick<T, keyof Select>>;
    }
  | {
      success: false;
      error: string;
    };

// Type for time-series response
type TimeSeriesResponse =
  | {
      success: true;
      data: Array<{ count: number; date: string }>;
    }
  | {
      success: false;
      error: string;
    };

// Table type overload
export function getEvents<
  Key extends `${EventKeys}:${string}`,
  Select extends Partial<
    Record<keyof Scalars[`schema_${ExtractEventKey<Key>}`], boolean>
  >,
>(
  key: Key,
  options: Extract<GetOptions<ExtractEventKey<Key>, Select>, { type: "table" }>
): Promise<TableResponse<Key, EventSchemaMap[ExtractEventKey<Key>], Select>>;

// Time-series type overload
export function getEvents<Key extends `${EventKeys}:${string}`>(
  key: Key,
  options: Extract<GetOptions<ExtractEventKey<Key>>, { type: "time-series" }>
): Promise<TimeSeriesResponse>;

export async function getEvents<Key extends `${EventKeys}:${string}`>(
  key: Key,
  options: GetOptions<ExtractEventKey<Key>>
): Promise<
  { success: true; data: Array<unknown> } | { success: false; error: string }
> {
  if (options.type === "table") {
    const response = await fetch(QUERY_EVENTS_ENDPOINT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, ...options }),
    });

    const parsed = await response.json();
    if (parsed.success) {
      const data = parsed.data as Array<
        | { sys_date: string; value: string }
        | ({ sys_date: string } & Record<string, unknown>)
      >;
      return {
        success: true,
        data: data.map(({ sys_date, ...rest }) => ({
          date: sys_date,
          ...("value" in rest && typeof rest.value === "string"
            ? JSON.parse(rest.value)
            : rest),
        })),
      };
    }

    return parsed;
  } else {
    return { success: false, error: "Time-series not implemented yet" };
  }
}
