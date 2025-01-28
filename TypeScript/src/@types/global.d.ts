type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type Paths<T> = T extends object
  ? T extends any[]
    ? never
    : { [K in keyof T]: `${K & string}` | `${K & string}.${Paths<T[K]> & string}` }[keyof T]
  : never;

type MatchPath<O extends object, P extends string> = P extends `${infer K}.${infer R}`
  ? K extends keyof O
    ? R extends Paths<O[K]>
      ? MatchPath<O[K], R>
      : never
    : never
  : P extends keyof O
    ? P
    : never;
