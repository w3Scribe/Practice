type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

