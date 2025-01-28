type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type OPaths<T extends object, R extends string = ''> = 
  T extends object? 
  T extends Array<infer U>?
  U extends object ?
  OPaths<U> : never :
  { [K in keyof T] : K | `${K}.${OPaths<T[K]>}` }[keyof T] : never;