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

let EVENTS_V2_ENDPOINT_URL = "https://basehub.com/api/v2/events";
if (process?.env?.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT) {
  EVENTS_V2_ENDPOINT_URL =
    process.env.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT;
} else if (process?.env?.BASEHUB_ANALYTICS_V2_ENDPOINT) {
  EVENTS_V2_ENDPOINT_URL = process.env.BASEHUB_ANALYTICS_V2_ENDPOINT;
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

type NullableEventSchemaMap = {
  [K in EventKeys]: Scalars[`schema_${K}`] | null;
};

type Args<Key extends string> =
  EventSchemaMap[ExtractEventKey<Key>] extends never
    ? [Key]
    : [Key, EventSchemaMap[ExtractEventKey<Key>]];

export const sendEvent = async <Key extends `${EventKeys}:${string}`>(
  ...args: Args<Key>
) => {
  const [key, data] = args;
  const response = await fetch(EVENTS_V2_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, data, type: "create" }),
  });

  return (await response.json()) as
    | { success: true }
    | { success: false; error: string };
};

type EventQueryData =
  | ({
      id: string;
      sys_date: string;
    } & Record<string, unknown>)
  | {
      id: string;
      sys_date: string;
      value: string;
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
  | {
      type: "time-series";
      range?: "day" | "week" | "month" | "year" | "allTime";
    };

// Type for table-based response
type TableResponse<
  K extends string,
  T extends Record<keyof Scalars[`schema_${K}`], unknown>,
  Select extends Partial<Record<keyof Scalars[`schema_${K}`], boolean>>,
> =
  | {
      success: true;
      data: Array<{ date: string; id: string } & Pick<T, keyof Select>>;
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
      const data = parsed.data as EventQueryData[];
      return {
        success: true,
        data: data.map(({ sys_date, id, ...rest }) => ({
          date: sys_date,
          id,
          ...("value" in rest && typeof rest.value === "string"
            ? JSON.parse(rest.value)
            : rest),
        })),
      };
    }

    return parsed;
  } else {
    const url = new URL(QUERY_EVENTS_ENDPOINT_URL);
    url.searchParams.append("key", key);
    options.range && url.searchParams.append("range", options.range);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = (await response.json()) as
      | {
          success: true;
          data: {
            count: number;
            label: string;
          }[];
        }
      | {
          code: number;
          success: false;
          error: string;
        };

    return data;
  }
}

export async function updateEvent<Key extends `${EventKeys}:${string}`>(
  key: Key,
  data: Partial<NullableEventSchemaMap[ExtractEventKey<Key>]>
) {
  const response = await fetch(EVENTS_V2_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, data, type: "update" }),
  });

  return (await response.json()) as
    | { success: true }
    | { success: false; error: string };
}

export async function deleteEvent<Key extends `${EventKeys}:${string}`>(
  key: Key,
  ids: [string, ...string[]]
) {
  const response = await fetch(EVENTS_V2_ENDPOINT_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, ids }),
  });

  return (await response.json()) as
    | { success: true }
    | { success: false; error: string };
}
