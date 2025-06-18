import { Transaction as TxRaw } from "@basehub/mutation-api-helpers";

export type {
  CreateOp,
  DeleteOp,
  Operation,
  UpdateOp,
  RichTextNode,
  RichTextTocNode,
} from "@basehub/mutation-api-helpers";
export type Transaction = TxRaw["operations"] | TxRaw["operations"][number];
