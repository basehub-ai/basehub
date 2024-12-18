import { Transaction as FullTransaction } from "@basehub/mutation-api-helpers";
export type {
  RichTextNode,
  RichTextTocNode,
} from "@basehub/mutation-api-helpers";

export type Transaction =
  | FullTransaction["operations"]
  | FullTransaction["operations"][number];

export type {
  CreateOp,
  DeleteOp,
  Operation,
  UpdateOp,
} from "@basehub/mutation-api-helpers";
