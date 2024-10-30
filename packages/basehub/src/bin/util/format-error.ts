export const formatError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === "string") {
    return new Error(error);
  }

  if (typeof error === "object") {
    return new Error(JSON.stringify(error, null, 2));
  }

  if (error) {
    console.error(error);
  }

  return new Error(`Unknown error. See logs above for details.`);
};
