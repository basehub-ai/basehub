export type ResolvedRef =
  | {
      type: "commit";
      ref: {
        id: string;
        message: string;
      };
    }
  | {
      type: "branch";
      ref: {
        id: string;
        name: string;
        git?: { branch?: string | null };
      };
    };
