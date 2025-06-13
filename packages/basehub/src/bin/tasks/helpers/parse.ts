export function parseColonSeparatedStrings(array: string[] = []) {
  const obj = {};
  for (const h of array) {
    const key = String(h).substring(0, h.indexOf(":")).trim();
    const value = h.substring(h.indexOf(":") + 1).trim();
    if (!key || !value) {
      console.error(`cannot parse string '${h}' as key:value pair`);
      process.exit(1);
    }
    // @ts-ignore
    obj[key] = value;
  }
  return obj;
}
