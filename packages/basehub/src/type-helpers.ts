export type StripAllArgs<T> = T extends object
  ? keyof T extends "__args" // If ONLY __args key exists
    ? T // Keep it as-is (it's a field with args)
    : { [K in keyof T as K extends "__args" ? never : K]: StripAllArgs<T[K]> }
  : T;

// replaces type-fest's Exact with a simpler version that's suitable to us.
// helps prevent `Expression produces a union type that is too complex to represent.ts(2590)` errors
export type GraphQLExact<T, Shape> = {
  [K in keyof T]: K extends keyof Shape
    ? T[K] extends { __args: any }
      ? T[K]
      : T[K] extends object
      ? Shape[K] extends object | undefined
        ? GraphQLExact<T[K], Exclude<Shape[K], undefined>>
        : never
      : T[K]
    : never;
};
