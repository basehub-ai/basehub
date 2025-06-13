import type { QueryResults } from "./server-pump.js";

export type ResponseCache = {
  data: QueryResults<[]>[number] | null;
  spaceID: string;
  pusherData: {
    channel_key: string;
    app_key: string;
    cluster: string;
  };
  newPumpToken: string;
  errors: { message: string; path?: string[] }[] | null;
  responseHash: string;
};

export type PumpState = {
  data: QueryResults<[]> | null[];
  responseHashes: string[];
  errors: Array<ResponseCache["errors"]>;
  pusherData: ResponseCache["pusherData"];
  spaceID: string;
};
