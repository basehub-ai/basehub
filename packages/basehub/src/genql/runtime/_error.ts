export class GenqlError extends Error {
  errors: Array<GraphqlError> = [];
  errorsStringified?: string;
  extraWarnings?: string;
  /**
   * Partial data returned by the server
   */
  data?: any;
  constructor(errors: any[], data: any, extraWarnings?: string) {
    let message = Array.isArray(errors)
      ? errors.map((x) => x?.message || "").join("\n")
      : "";
    if (!message) {
      message = "GraphQL error";
    }
    super(message);
    this.errors = errors;
    this.data = data;
    this.errorsStringified = JSON.stringify(errors, null, 2).slice(0, 1000);
    this.extraWarnings = extraWarnings;
  }
}

interface GraphqlError {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: string[];
  extensions?: Record<string, any>;
}
