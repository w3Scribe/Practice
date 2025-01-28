type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type Paths<T> = T extends object
  ? { [K in keyof T]: `${K & string}` | `${K & string}.${Paths<T[K]> & string}` }[keyof T]
  : never;

