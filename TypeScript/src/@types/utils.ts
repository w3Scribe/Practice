declare global {
  /**
   * Check if two types are equal
   * template: `IsEqual<A, B>`
   * example: `IsEqual<"hello-world", "hello-world">` => `true`
   */
  type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

  /**
   * Constructs a tuple type of length `L` with elements of type `T`.
   * @template L - The length of the tuple
   * @template T - The type of each element in the tuple
   * @template R - Whether the tuple is readonly
   * @example Tuple<3, string> => [string, string, string]
   */
  type Tuple<
    L extends number,
    T,
    R extends boolean = true,
    Acc extends T[] = [],
  > = Acc['length'] extends L
    ? R extends true
      ? Readonly<Acc>
      : Acc
    : Tuple<L, T, R, [...Acc, T]>;
}

export {};
