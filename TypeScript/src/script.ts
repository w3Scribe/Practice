type Brand<T, B> = T & { __brand: B };

type Hex = Brand<string, 'Hex'>;
type RGB = Brand<{ r: number; g: number; b: number }, 'RGB'>;

type TLen<T extends any[]> = T['length'];

type NumToTuple<N extends number, R extends any[] = []> =
  TLen<R> extends N ? R : NumToTuple<N, [...R, R['length']]>;

type StrToTuple<S extends string, R extends any[] = []> =
  TLen<R> extends S['length'] ? R : StrToTuple<S, [...R, S[R['length']]]>;

type Add<F extends number, S extends number> = TLen<[...NumToTuple<F>, ...NumToTuple<S>]>;

type Multiply<F extends number, S extends number, R extends any[] = []> =
  NumToTuple<S> extends [infer N, ...infer SRest]
    ? Multiply<F, TLen<SRest>, [...R, ...NumToTuple<F>]>
    : TLen<R>;

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

type GetHexTuple<T extends string> =
  StrToTuple<T> extends ['#', infer R1, infer R2, infer G1, infer G2, infer B1, infer B2]
    ? [R1, R2, G1, G2, B1, B2]
    : never;

type HexToRGB<T extends Hex> =
  T extends `#${infer R1}${infer R2}${infer G1}${infer G2}${infer B1}${infer B2}`
    ? {
        r: Add<Multiply<16, GetHex<R1>>, GetHex<R2>>;
        g: Add<Multiply<16, GetHex<G1>>, GetHex<G2>>;
        b: Add<Multiply<16, GetHex<B1>>, GetHex<B2>>;
      } & RGB
    : never;

const hexToRGB = <T extends Hex>(hex: T): RGB => {
  return {
    r: 0,
    g: 0,
    b: 0,
    __brand: 'RGB',
  };
};

const rgb = hexToRGB('#ff00ff' as Hex); // OK
