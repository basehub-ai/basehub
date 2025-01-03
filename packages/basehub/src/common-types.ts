
import { // @ts-ignore
  Scalars,
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
} from "./schema";

export type ResolvedRef = { ref: string; repoHash: string } & (
  | {
      type: "commit";
      id: string;
      message: string;
    }
  | {
      type: "branch";
      id: string;
      name: string;
      git?: { branch?: string | null };
      createSuggestedBranchLink?: string;
      headCommitId?: string | null;
    }
);

// EVENTS -----------------------------------------------------------------------------------------------

type KeysStartingWith<Obj, Prefix extends string> = {
  [K in keyof Obj]: K extends `${Prefix}${string}` ? K : never;
}[keyof Obj];


// Get all event key types (bshb_event_*)
export type EventKeys = KeysStartingWith<Scalars, "bshb_event">;

// Map from event key to its schema type
export type EventSchemaMap = {
  // @ts-ignore
  [K in EventKeys]: Scalars[`schema_${K}`];
};