// TLen
type TLen<T extends any[]> = T['length'];

// NumToTupple
type NumToTupple<N extends number, R extends any[] = []> = R['length'] extends N
  ? R
  : NumToTupple<N, [...R, R['length']]>;

