type HexCharMap = {
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
};

type HexMapKeys = keyof HexCharMap;

type GetDec<T extends HexMapKeys | (string & {})> = T extends HexMapKeys ? HexCharMap[T] : never;

// type T1 = GetDec<'F'>;
type Len<T extends any[]> = T['length'] & number;

// type T2 = Len<[1,]>

type Push<T extends HexMapKeys, Store extends any[] = []> = [...Store, GetDec<T>];

type T3 = Push<'E'>;
type T4 = Push<'A', T3>
