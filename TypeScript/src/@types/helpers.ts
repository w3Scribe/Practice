declare global {
  /**
   * `NTuple` - Create a tuple of N elements initialized to 0.
   * Builds a tuple with N elements, each set to 0.
   * Example: NTuple<3> => [0, 0, 0]
   * @public
   */
  type NTupple<N extends number, Result extends unknown[] = []> = Result['length'] extends N
    ? Result
    : NTupple<N, [...Result, 0]>;

  /**
   * @description `TLen` Get the length of a tuple.
   * @typeParam T - The tuple to get the length of.
   * @returns The length of the tuple.
   * @example TLen<[1, 2, 3]> => 3
   * @public
   **/
  type TLen<T extends any[]> = T['length'];

  /**
   * @description `TMerge` Merge two tuples together.
   * @typeParam T1 - The first tuple.
   * @typeParam T2 - The second tuple.
   * @returns The merged tuple.
   * @example TMerge<[1, 2], [3, 4]> => [1, 2, 3, 4]
   * @public
   **/
  type TMerge<T1 extends any[], T2 extends any[]> = [...T1, ...T2]; // Merge two tuples together

  /**
   * @description `TAdd` Add an element to a tuple.
   * @typeParam T1 - The tuple to add to.
   * @typeParam T2 - The element to add.
   * @returns The tuple with the element added.
   * @example TAdd<[1, 2], 3> => [1, 2, 3]
   * @public
   **/
  type TAdd<T extends any[], E extends any> = [...T, E]; // Add an element to a tuple

  /**
   * @description `TRemove` Remove an element from a tuple.
   * @typeParam T1 - The tuple to remove from.
   * @typeParam T2 - The element to remove.
   * @returns The tuple with the element removed.
   * @example TRemove<[1, 2, 3], 2> => [1, 3]
   * @public
   **/
  type TRemove<T1 extends any[], T2 extends any[] | any> = T1 extends [...infer Rest, infer T2]
    ? Rest
    : never;
}

export {};
