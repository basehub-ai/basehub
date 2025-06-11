/**
 * Returns a hash code from an object
 * @param  {Object} obj The object to hash.
 * @return {String}    A hash string
 */
export function hashObject(obj: Record<string, unknown>): string {
  const sortObjectKeys = <O extends Record<string, unknown>>(obj: O): O => {
    if (!isObjectAsWeCommonlyCallIt(obj)) return obj;
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key as keyof O] = obj[key as keyof O];
        return acc;
      }, {} as O);
  };

  const recursiveSortObjectKeys = <O extends Record<string, unknown>>(
    obj: O
  ): O => {
    const sortedObj = sortObjectKeys(obj);

    if (!isObjectAsWeCommonlyCallIt(sortedObj)) return sortedObj;

    Object.keys(sortedObj).forEach((key) => {
      if (isObjectAsWeCommonlyCallIt(sortedObj[key as keyof O])) {
        sortedObj[key as keyof O] = recursiveSortObjectKeys(
          sortedObj[key as keyof O] as O
        ) as O[keyof O];
      } else if (Array.isArray(sortedObj[key as keyof O])) {
        sortedObj[key as keyof O] = (
          sortedObj[key as keyof O] as unknown[]
        ).map((item) => {
          if (isObjectAsWeCommonlyCallIt(item)) {
            return recursiveSortObjectKeys(item);
          } else {
            return item;
          }
        }) as O[keyof O];
      }
    });

    return sortedObj;
  };

  const isObjectAsWeCommonlyCallIt = (
    obj: unknown
  ): obj is Record<string, unknown> => {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };

  const sortedObj = recursiveSortObjectKeys(obj);
  const str = JSON.stringify(sortedObj);

  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString();
}
