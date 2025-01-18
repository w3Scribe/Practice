// TLen
type TLen<T extends any[]> = T['length'];

// NumToTupple
type NumToTupple<N extends number, R extends any[] = []> =
  TLen<R> extends N ? R : NumToTupple<N, [...R, R['length']]>;

// StrToTupple
type StrToTupple<S extends string, R extends any[] = []> =
  TLen<R> extends S['length'] ? R : StrToTupple<S, [...R, S[R['length']]]>;

// Add
type Add<F extends number, S extends number> = TLen<[...NumToTupple<F>, ...NumToTupple<S>]>;

// Multiply
type Multiply<F extends number, S extends number, R extends any[] = []> =
  NumToTupple<S> extends [infer N, ...infer SRest]
    ? Multiply<F, TLen<SRest>, [...R, ...NumToTupple<F>]>
    : TLen<R>;

// HexMap
type HexMap = {
  '0': 0;
  '1': 1;
  '2': 2;
  '3': 3;
  '4': 4;
  '5': 5;
  '6': 6;
  '7': 7;
  '8': 8;
  '9': 9;
  A: 10;
  B: 11;
  C: 12;
  D: 13;
  E: 14;
  F: 15;
  a: 10;
  b: 11;
  c: 12;
  d: 13;
  e: 14;
  f: 15;
};

type GetHex<T extends string> = T extends keyof HexMap ? HexMap[T] : never;

type GetHextTupple<T extends string> =
  StrToTupple<T> extends ['#', HexMap, HexMap, HexMap, HexMap, HexMap, HexMap]
    ? T extends `#${infer R1}${infer R2}${infer G1}${infer G2}${infer B1}${infer B2}`
      ? [R1, R2, G1, G2, B1, B2]
      : never
    : never;

