type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type OPaths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends Array<infer U>
          ? `${K}` | `${K}[${number}]` | (U extends object ? `${K}[${number}].${OPaths<U>}` : never)
          : `${K}` | (T[K] extends object ? `${K}.${OPaths<T[K]>}` : never)
        : never;
    }[keyof T]
  : never;