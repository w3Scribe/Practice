type NumToTupple<T extends number, Result extends number[] = []> = T extends Result['length']
  ? Result
  : NumToTupple<T, [...Result, 0]>;

type StrToTupple<T extends any, Result extends string[] = []> = T extends `${infer F}${infer _}`
  ? StrToTupple<_, [...Result, F]>
  : Result;

type BothEx<T extends any, N extends any> = T extends N ? T : never;

type Add<N1 extends number | string, N2 extends number | string> =
  BothEx<N1, N2> extends number
    ? [...NumToTupple<N1>, ...NumToTupple<N2>]
    : [...StrToTupple<N1>, ...StrToTupple<N2>];


