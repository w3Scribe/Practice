declare global {
  /**
   * Fn is a function that doesn't take any arguments and doesn't return anything
   * @example () => void
   **/
  type Fn = () => void;

  /**
   * Primitive returns the specified type if it's a "primitive" type or defaults to the set of primitives
   * @template T - The type to evaluate
   * @example Primitive<string> => string
   * @example Primitive => string | number | boolean | null | undefined | symbol | bigint | Fn | object
   */
  type Primitive<
    T = unknown,
    V = string | number | boolean | null | undefined | symbol | bigint | Fn ,
  > = T extends V ? T : V;

  /**
   * If is a conditional type that selects one of two possible types based on a condition
   * @template C - The condition to check
   * @template T - The type to return if the condition is true
   * @template F - The type to return if the condition is false
   * @example If<true, 'yes', 'no'> => 'yes'
   */
  type If<C extends boolean, T, F> = C extends true ? T : F;

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

  /**
   * ReadonlyProps makes the specified properties of an object readonly
   * @template T - The type to make readonly
   * @template P - The properties to make readonly
   * @example ReadonlyProps<{ a: string, b: number }, 'a'> => { readonly a: string, b: number }
   */
  type ReadonlyProps<T, P extends keyof T = keyof T> = {
    readonly [K in P]: T[K];
  } & Omit<T, P>;

  /**
   * OptionalProps makes the specified properties of an object optional
   * @template T - The type to make optional
   * @template K - The properties to make optional
   * @example OptionalProps<{ a: string, b: number }, 'a'> => { a?: string, b: number }
   */
  type OptionalProps<T, K extends keyof T = keyof T> = {
    [P in K]?: T[P];
  } & Omit<T, K>;
}

export {};
