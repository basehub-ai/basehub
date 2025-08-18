import type { FieldsSelection } from "./genql/runtime/_type-selection.js";
import type { FragmentsMap } from "./index.js";
import { GraphQLExact, StripAllArgs } from "./type-helpers.js";

export function fragmentOn<
  TypeName extends keyof FragmentsMap,
  const Selection extends FragmentsMap[TypeName]["selection"],
>(
  name: TypeName,
  fields: Selection &
    GraphQLExact<StripAllArgs<Selection>, FragmentsMap[TypeName]["selection"]>
): Selection & { __fragmentOn: TypeName } {
  // @ts-ignore
  return { __fragmentOn: name, ...fields } as const;
}

// credits: https://stackoverflow.com/a/54487392
type OmitDistributive<T, K extends PropertyKey> = T extends any
  ? T extends object
    ? Id<OmitRecursively<T, K>>
    : T
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
type Id<T> = {} & { [P in keyof T]: T[P] }; // Cosmetic use only makes the tooltips expad the type can be removed
type OmitRecursively<T, K extends PropertyKey> = Omit<
  { [P in keyof T]: OmitDistributive<T[P], K> },
  K
>;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace fragmentOn {
  export type infer<T> = T extends {
    __fragmentOn: infer U extends keyof FragmentsMap;
  }
    ? OmitRecursively<
        FieldsSelection<FragmentsMap[U]["root"], Omit<T, "__fragmentOn">>,
        "__fragmentOn"
      >
    : never;
}

// This is a BaseHub-specific thing:

type RecursiveCollection<T, Key extends keyof T> = T & {
  [key in Key]: { items: RecursiveCollection<T, Key> };
};

export function fragmentOnRecursiveCollection<
  TypeName extends keyof FragmentsMap,
  const Selection extends FragmentsMap[TypeName]["selection"],
  RecursiveKey extends keyof FragmentsMap[TypeName]["selection"],
>(
  name: TypeName,
  fields: Selection &
    GraphQLExact<StripAllArgs<Selection>, FragmentsMap[TypeName]["selection"]>,
  options: {
    recursiveKey: RecursiveKey;
    levels: number;
    getLevelArgs?: (level: number) => unknown;
  }
) {
  const current = {
    // @ts-ignore
    ...fields,
  } as RecursiveCollection<
    { readonly __fragmentOn: TypeName } & Selection,
    RecursiveKey
  >;
  if (options.levels > 0) {
    current[options.recursiveKey] = {
      ...(options.getLevelArgs
        ? { __args: options.getLevelArgs(options.levels) }
        : {}),
      items: fragmentOnRecursiveCollection(name, fields, {
        ...options,
        levels: options.levels - 1,
      }),
    } as any;
  }
  return current;
}
