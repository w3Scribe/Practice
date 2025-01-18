// TLen
type TLen<T extends any[]> = T['length'];

// NumToTupple
type NumToTupple<N extends number, R extends any[] = []> =
  TLen<R> extends N ? R : NumToTupple<N, [...R, R['length']]>;

// Add
type Add<F extends number, S extends number> = TLen<[...NumToTupple<F>, ...NumToTupple<S>]>;

// Multiply
type Multiply<F extends number, S extends number, R extends any[] = []> =
  NumToTupple<S> extends [infer N, ...infer SRest]
    ? Multiply<F, TLen<SRest>, [...R, ...NumToTupple<F>]>
    : TLen<R>;
