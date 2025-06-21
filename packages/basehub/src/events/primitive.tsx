/* eslint-disable turbo/no-undeclared-env-vars */
import type { Scalars } from "../index.js";
import type { Field } from "../react/form/primitive.js";

/* -------------------------------------------------------------------------------------------------
 * Client
 * -----------------------------------------------------------------------------------------------*/

let EVENTS_V2_ENDPOINT_URL = "https://basehub.com/api/v2/events";
let QUERY_EVENTS_ENDPOINT_URL = "https://basehub.com/api/v2/events/query";
if (typeof process !== "undefined") {
  if (process?.env?.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT) {
    EVENTS_V2_ENDPOINT_URL =
      process.env.NEXT_PUBLIC_BASEHUB_ANALYTICS_V2_ENDPOINT;
  } else if (process?.env?.BASEHUB_ANALYTICS_V2_ENDPOINT) {
    EVENTS_V2_ENDPOINT_URL = process.env.BASEHUB_ANALYTICS_V2_ENDPOINT;
  }

  if (process?.env?.NEXT_PUBLIC_BASEHUB_QUERY_EVENTS_V2_ENDPOINT) {
    QUERY_EVENTS_ENDPOINT_URL =
      process.env.NEXT_PUBLIC_BASEHUB_QUERY_EVENTS_V2_ENDPOINT;
  } else if (process?.env?.BASEHUB_QUERY_EVENTS_V2_ENDPOINT) {
    QUERY_EVENTS_ENDPOINT_URL = process.env.BASEHUB_QUERY_EVENTS_V2_ENDPOINT;
  }
}

type KeysStartingWith<Obj, Prefix extends string> = {
  [K in keyof Obj]: K extends `${Prefix}${string}` ? K : never;
}[keyof Obj];

type ExtractEventKey<T extends string> = T extends `${infer Base}:${string}`
  ? Base
  : T;

// Get all event key types (bshb_event_*)
export type EventKeys = KeysStartingWith<Scalars, "bshb_event"> extends never
  ? `bshb_event_${string}`
  : KeysStartingWith<Scalars, "bshb_event">;
export type EventSchema<Key extends `${EventKeys}:${string}`> =
  // @ts-ignore
  EventSchemaMap[ExtractEventKey<Key>];

// Map from event key to its schema type
type EventSchemaMap = {
  // @ts-ignore
  [K in EventKeys]: Scalars[`schema_${K}`];
};

type NullableEventSchemaMap = {
  // @ts-ignore
  [K in EventKeys]: Scalars[`schema_${K}`] | null;
};

export type EventArgs<Key extends string> =
  // @ts-ignore
  EventSchemaMap[ExtractEventKey<Key>] extends never
    ? [Key]
    : // @ts-ignore
      [Key, EventSchemaMap[ExtractEventKey<Key>]];

export const sendEvent = async <Key extends `${EventKeys}:${string}`>(
  ...args: EventArgs<Key>
) => {
  const [key, data] = args;

  let formDataOrJson: FormData | string;
  if (data && Object.values(data).some((value) => value instanceof File)) {
    formDataOrJson = new FormData();
    formDataOrJson.append("_system_key", key);
    formDataOrJson.append("_system_type", "create");

    if (data) {
      // Append all data fields to FormData
      Object.entries(data).forEach(([field, value]) => {
        if (typeof formDataOrJson === "string") return;
        if (value instanceof File) {
          formDataOrJson.append(field, value);
        } else if (value !== null && value !== undefined) {
          formDataOrJson.append(`${typeof field}__${field}`, String(value));
        }
      });
    }
  } else {
    formDataOrJson = JSON.stringify({
      key,
      data,
      type: "create",
    });
  }

  const response = await fetch(EVENTS_V2_ENDPOINT_URL, {
    method: "POST",
    headers: {
      ...(typeof formDataOrJson === "string"
        ? { "Content-Type": "application/json" }
        : {}),
      Accept: "application/json",
    },
    body: formDataOrJson,
  });

  return (await response.json()) as
    | { success: true; eventId: string }
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

type UnionToIntersection<U> = (
  NonNullable<U> extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type MapScalarTypeToFilters<T extends Record<string, any>> = Partial<{
  [K in keyof T]: NonNullable<T[K]> extends UnionToIntersection<T[K]>
    ? NonNullable<T[K]> extends string
      ?
          | { eq: string }
          | { notEq: string }
          | { regex: string }
          | { contains: string }
          | { exists: boolean }
          | { startsWith: string }
          | { endsWith: string }
      : NonNullable<T[K]> extends number
      ?
          | { gt: number; lt?: number }
          | { lt: number; gt?: number }
          | { eq: number }
          | { exists: boolean }
      : NonNullable<T[K]> extends boolean
      ? { exists: boolean } | { eq: boolean }
      : NonNullable<T[K]> extends Array<string>
      ? { includes: NonNullable<T[K]>[number] } | { exists: boolean }
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
  Select extends // @ts-ignore

      | Partial<Record<keyof Scalars[`schema_${K}`], boolean>>
      | undefined = undefined,
> =
  | {
      type: "table";
      first?: number;
      skip?: number;
      // @ts-ignore
      filter?: MapScalarTypeToFilters<Scalars[`schema_${K}`]>;
      // @ts-ignore
      orderBy?: MapScalarTypeToOrder<Scalars[`schema_${K}`]>;
      select?: Select;
    }
  | {
      type: "time-series";
      range?: "day" | "week" | "month" | "year" | "all-time";
    };

// Type for table-based response
type TableResponse<
  K extends string,
  // @ts-ignore
  T extends Record<keyof Scalars[`schema_${K}`], unknown>,
  // @ts-ignore
  Select extends Partial<Record<keyof Scalars[`schema_${K}`], boolean>>,
> =
  | {
      success: true;
      // @ts-ignore
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
      data: number;
    }
  | {
      success: false;
      error: string;
    };

// Table type overload
export function getEvents<
  Key extends `${EventKeys}:${string}`,
  Select extends Partial<
    // @ts-ignore
    Record<keyof Scalars[`schema_${ExtractEventKey<Key>}`], boolean>
  >,
>(
  key: Key,
  options: Extract<GetOptions<ExtractEventKey<Key>, Select>, { type: "table" }>
  // @ts-ignore
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
  { success: true; data: unknown } | { success: false; error: string }
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
            : "value" in rest && typeof rest.value === "object"
            ? rest.value
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

    return (await response.json()) as TimeSeriesResponse;
  }
}

export async function updateEvent<Key extends `${EventKeys}:${string}`>(
  key: Key,
  id: string,
  // @ts-ignore
  data: Partial<NullableEventSchemaMap[ExtractEventKey<Key>]>
) {
  let formDataOrJson: FormData | string;
  if (data && Object.values(data).some((value) => value instanceof File)) {
    formDataOrJson = new FormData();
    formDataOrJson.append("_system_key", key);
    formDataOrJson.append("_system_type", "update");
    formDataOrJson.append("_system_id", id);

    // Append all data fields to FormData
    Object.entries(data).forEach(([field, value]) => {
      if (typeof formDataOrJson === "string") return;
      if (value instanceof File) {
        formDataOrJson.append(field, value);
      } else if (value !== null && value !== undefined) {
        formDataOrJson.append(`${typeof field}__${field}`, String(value));
      }
    });
  } else {
    formDataOrJson = JSON.stringify({
      key,
      data,
      type: "update",
      id,
    });
  }

  const response = await fetch(EVENTS_V2_ENDPOINT_URL, {
    method: "POST",
    headers: {
      ...(typeof formDataOrJson === "string"
        ? { "Content-Type": "application/json" }
        : {}),
      Accept: "application/json",
    },
    body: formDataOrJson,
  });

  return (await response.json()) as
    | { success: true; eventId: string }
    | { success: false; error: string };
}

export async function deleteEvent<Key extends `${EventKeys}:${string}`>(
  key: Key,
  ids: [string, ...string[]]
) {
  const url = new URL(EVENTS_V2_ENDPOINT_URL);
  url.searchParams.append("key", key);
  url.searchParams.append("ids", JSON.stringify(ids));

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return (await response.json()) as
    | { success: true }
    | { success: false; error: string };
}

// PARSE FORM DATA HELPER ------------------------------------------------------------------------
type SafeReturn<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> };

export function parseFormData<
  Key extends `${EventKeys}:${string}`,
  Schema extends Field[],
>(
  key: Key,
  schema: Schema,
  formData: FormData
  // @ts-ignore
): SafeReturn<EventSchemaMap[ExtractEventKey<Key>]> {
  const formattedData: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  schema.forEach((field) => {
    const key = field.name;

    // Handle multiple values (like multiple select or checkboxes)
    if ((field.type === "select" || field.type === "radio") && field.multiple) {
      const values = formData.getAll(key).filter(Boolean);

      if (field.required && values.length === 0) {
        errors[key] = `${field.label || key} is required`;
      }

      formattedData[key] = values.map(String);
      return;
    }

    const value = formData.get(key);

    // Required field validation
    if (field.required && (value === null || value === "")) {
      errors[key] = `${field.label || key} is required`;
      return;
    }

    // Handle empty optional fields
    if (value === null || value === "") {
      formattedData[key] = field.defaultValue ?? null;
      return;
    }

    try {
      switch (field.type) {
        case "checkbox":
          formattedData[key] = value === "on" || value === "true";
          break;

        case "email": {
          const email = String(value);
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            errors[key] = `${field.label || key} must be a valid email address`;
          }
          formattedData[key] = email;
          break;
        }

        case "select":
        case "radio": {
          const stringValue = String(value);
          if (field.options.length && !field.options.includes(stringValue)) {
            errors[key] = `${
              field.label || key
            } must be one of the available options`;
          }
          formattedData[key] = stringValue;
          break;
        }

        case "date":
        case "datetime": {
          const date = new Date(value as string);
          if (isNaN(date.getTime())) {
            errors[key] = `${field.label || key} must be a valid date`;
            break;
          }
          formattedData[key] = date.toISOString();
          break;
        }

        case "number": {
          const num = Number(value);
          if (isNaN(num)) {
            errors[key] = `${field.label || key} must be a valid number`;
            break;
          }
          formattedData[key] = num;
          break;
        }

        case "file": {
          if (!(value instanceof File)) {
            errors[key] = `${field.label || key} must be a valid file`;
            break;
          }

          if (!value.size && field.required) {
            errors[key] = `${field.label || key} is required`;
          } else if (!value.size) {
            formattedData[key] = null;
          } else {
            formattedData[key] = value;
          }
          break;
        }

        default:
          formattedData[key] = String(value);
      }
    } catch (error) {
      errors[key] = `Invalid value for ${field.label || key}`;
    }
  });

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    // @ts-ignore
    data: formattedData as EventSchemaMap[ExtractEventKey<Key>],
    success: true,
  };
}
