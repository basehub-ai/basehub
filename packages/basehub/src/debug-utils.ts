const isDebugEnabled = () => {
  try {
    return (
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process?.env?.BASEHUB_DEBUG === "true" ||
      process?.env?.NODE_ENV === "development"
    );
  } catch {
    return false;
  }
};

export const debugLog = (...args: any[]) => {
  if (isDebugEnabled()) {
    console.log(...args);
  }
};

export const getDebugCallStack = () => {
  try {
    const stack = new Error().stack;
    return (
      stack
        ?.split("\n")
        .slice(2, 6)
        .map((line) => line.trim())
        .join(" -> ") || "Unknown"
    );
  } catch {
    return "Unknown";
  }
};
