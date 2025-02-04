type Path = string | number | Array<string | number>;

/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned.
 * @param obj The object to query
 * @param path The path of the property to get
 * @param defaultValue The value returned for undefined resolved values
 * @returns The resolved value
 */
export function get(obj: any, path: Path, defaultValue?: any): any {
  // Handle empty/null object
  if (obj == null) return defaultValue;

  // Convert path to array if it's a string
  const segments = Array.isArray(path)
    ? path
    : path
        .toString()
        .replace(/\[(\w+)\]/g, ".$1")
        .split(".");

  // Traverse the object
  let result = obj;
  for (const segment of segments) {
    // Skip empty segments
    if (!segment) continue;

    result = result[segment];

    // Return default value if we hit undefined/null
    if (result == null) return defaultValue;
  }

  return result;
}
