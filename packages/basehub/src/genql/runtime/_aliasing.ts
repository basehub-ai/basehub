export const aliasSeparator = "__alias__";

export function replaceSystemAliases(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => replaceSystemAliases(item));
  }

  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.includes(aliasSeparator)) {
      const [_prefix, ...rest] = key.split(aliasSeparator);
      const newKey = rest.join(aliasSeparator); // In case there are multiple __alias__ in the key
      // @ts-expect-error
      newObj[newKey] = replaceSystemAliases(value);
    } else {
      // @ts-expect-error
      newObj[key] = replaceSystemAliases(value);
    }
  }

  return newObj;
}
