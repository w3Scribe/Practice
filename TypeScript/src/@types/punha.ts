import { isTupleTypeNode } from 'typescript';

// HELPERS
type NumToTupple<N extends number, R extends any[] = []> = N extends R['length']
  ? R
  : NumToTupple<N, [...R, 0]>;

type TuppleLen<T extends any[]> = T['length'];

type TuppleMerge<T1 extends any[], T2 extends any[]> = [...T1, ...T2];

type TuppleAdd<T1 extends any[], T2 extends any | any[]> = T2 extends []
  ? TuppleMerge<T1, T2>
  : [...T1, T2];

type TuppleRemove<T1 extends any[], T2 extends any[]> = T1 extends [...infer Rest, infer T2]
  ? Rest
  : never;

// MATH
type Add<A extends number, B extends number> = TuppleLen<
  TuppleMerge<NumToTupple<A>, NumToTupple<B>>
>;

type Substract<A extends number, B extends number, R extends number = 0> =
  TuppleLen<NumToTupple<B>> extends TuppleLen<NumToTupple<A>>
    ? R
    : NumToTupple<A> extends [infer F, ...infer Rest]
      ? Substract<TuppleLen<Rest>, B, TuppleLen<TuppleAdd<NumToTupple<R>, F>> & number>
      : never;

// TuppleLen<[...R, F]>

// type Multiply<A extends number, B extends number, R extends any[] = []> =

type R = [1, 2, 2, 3, 4, 5, 6];
type F = 1000;
type Test = Substract<10, 5>;


// NTupple  TuppleLen  TuppleMerge  TuppleAdd  TuppleRemove