/**
 * @name NTupple - Create a tuple of N elements with the value of 0 in each element
 * @description Create a tuple of `N` elements with the value of 0 in each element
 * @example NTupple<3> => [0, 0, 0]
 * @public
 */

type NTupple<N extends number, R extends unknown[] = []> = N extends R['length']
  ? R
  : NTupple<N, [...R, 0]>;
