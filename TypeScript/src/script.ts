type Len<T extends string, CharCount extends number[] = []> = T extends `${string}${infer Rest}`
  ? Len<Rest, [...CharCount, 0]>
  : CharCount['length'];

type Compare<
  First extends number,
  Second extends number,
  Result extends number[] = [],
> = First extends Second
  ? 'Equal'
  : Second extends Result['length']
    ? 'Less'
    : First extends Result['length']
      ? 'Greater'
      : Compare<First, Second, [...Result, 0]>;

type MaxChar<T extends string, Max extends number> =
  Compare<Len<T>, Max> extends 'Equal' | 'Greater' ? T : never;

type MinChar<T extends string, Min extends number> =
  Compare<Len<T>, Min> extends 'Equal' | 'Less' ? T : never;

type MinMaxChar<T extends string, Min extends number, Max extends number> = MinChar<T, Min> &
  MaxChar<T, Max>;

const MaxCharFn = <T extends string, Max extends number>(str: MaxChar<T, Max>, max: Max) => str;
const MinCharFn = <T extends string, Min extends number>(str: MinChar<T, Min>, min: Min) => str;
const MinMaxCharFn = <T extends string, Min extends number, Max extends number>(
  str: MinMaxChar<T, Min, Max>,
  min: Min,
  max: Max,
) => str;

const resMaxCharFn = MaxCharFn('334', 3);
const resMinCharFn = MinCharFn('133', 3);
const resMinMaxCharFn = MinMaxCharFn('12', 2, 3);
