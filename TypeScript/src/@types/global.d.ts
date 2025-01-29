type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type OTypes<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
    ? U extends object
      ? OTypes<U>[]
      : U
    : T extends object
      ? OTypes<T[keyof T]>
      : never;

type Replacer<O, Replace extends Primitive, With extends Primitive> = {
  [K in keyof O]: O[K] extends Replace
    ? With
    : O[K] extends (infer U)[]
      ? U extends Replace
        ? With[]
        : U extends object
          ? Replacer<U, Replace, With>[]
          : O[K]
      : O[K] extends object
        ? Replacer<O[K], Replace, With>
        : O[K];
};
