import { Transaction } from "@basehub/mutation-api-helpers";
export type {
  RichTextNode,
  RichTextTocNode,
} from "@basehub/mutation-api-helpers";

export type Transaction2 =
  | Transaction["operations"]
  | Transaction["operations"][number];

export type { Transaction2 as Transaction };

export type {
  CreateOp,
  DeleteOp,
  Operation,
  UpdateOp,
} from "@basehub/mutation-api-helpers";
