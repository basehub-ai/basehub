import type { QueryResults } from "./server-pump";

export type ResponseCache = {
  data: QueryResults<unknown[]>[number] | null;
  spaceID: string;
  pusherData: {
    channel_key: string;
    app_key: string;
    cluster: string;
  };
  newPumpToken: string;
  errors: { message: string; path?: string[] }[] | null;
};

export type PumpState = {
  data: QueryResults<[]> | null[];
  errors: Array<ResponseCache["errors"]>;
  pusherData: ResponseCache["pusherData"];
  spaceID: string;
};
