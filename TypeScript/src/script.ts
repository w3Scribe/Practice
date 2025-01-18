type NumToTupple<T extends number, Result extends number[] = []> = T extends Result['length']
  ? Result
  : NumToTupple<T, [...Result, 0]>;

type StrToTupple<T extends any, Result extends number[] = []> = T extends `${string}${infer _}`
  ? StrToTupple<_, [...Result, 0]>
  : Result;

type NSTupple<T extends number | string> = T extends string
  ? [...StrToTupple<T>]
  : T extends number
    ? [...NumToTupple<T>]
    : never;

type Add<N1 extends number | string, N2 extends number | string> = [
  ...NSTupple<N1>,
  ...NSTupple<N2>,
];

type Substract<
  T extends number | string,
  S extends number | string,
  Result extends (number | string)[] = NSTupple<T>,
> = Result extends [...NSTupple<S>, ...infer _] ? _ : never;

type Multiply<N1 extends number | string, N2 extends number | string, Result extends any[] = []> =
  NSTupple<N2> extends [infer FArr, ...infer RArr]
    ? Multiply<N1, RArr['length'], [...Result, ...NSTupple<N1>]>
    : Result;

type HexCodeMap = {
  '1': 1
  '2': 2
  '3': 3
  
}

