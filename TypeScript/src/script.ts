type SLen<T extends string, C extends string[] = []> = T extends `${infer Char}${infer RStr}`
  ? SLen<RStr, [...C, Char]>
  : C['length'];


type Compare<F extends number, S extends number, R extends number[] = []> = F extends S
  ? 'Equal'
  : R['length'] extends F
    ? 'Less'
    : R['length'] extends S
      ? 'Greater'
      : Compare<F, S, [...R, 0]>;

type TMinChar<T extends string, Min extends number> =
  Compare<SLen<T>, Min> extends 'Equal' | 'Greater' ? T : never;

type TMaxChar<T extends string, Max extends number> =
  Compare<SLen<T>, Max> extends 'Equal' | 'Less' ? T : never;

type TMinMaxChar<T extends string, Min extends number, Max extends number> = TMinChar<T, Min> &
  TMaxChar<T, Max>;
