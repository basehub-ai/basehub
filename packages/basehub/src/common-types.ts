export type ResolvedRef = { ref: string } & (
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
    }
);
