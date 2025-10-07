export const debugLog = (...args: any[]) => {
  // Always log in this debug version
  console.log(...args);
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
