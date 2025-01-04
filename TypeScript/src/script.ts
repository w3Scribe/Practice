/**
 * A union type representing non-negative integers up to 20.
 * Extend this as needed, keeping in mind TypeScript's recursion limits.
 */
type NonNegativeInteger =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

/**
 * Computes the length of a string at the type level.
 * @typeParam T - The string whose length is to be computed.
 * @typeParam CharCount - Accumulator for counting characters (internal use).
 * @returns The length of the string as a number.
 */
type Length<
  T extends string,
  CharCount extends number[] = [],
> = T extends `${infer _Char}${infer RestString}`
  ? Length<RestString, [...CharCount, 0]>
  : CharCount['length'];

/**
 * Compares two numbers at the type level.
 * @typeParam First - The first number to compare.
 * @typeParam Second - The second number to compare.
 * @typeParam Result - Accumulator for simulating counting (internal use).
 * @returns 'Equal' | 'Less' | 'Greater' based on the comparison.
 */
type Compare<
  First extends NonNegativeInteger,
  Second extends NonNegativeInteger,
  Result extends number[] = [],
> = First extends Second
  ? 'Equal'
  : Result['length'] extends First
    ? 'Less'
    : Result['length'] extends Second
      ? 'Greater'
      : Compare<First, Second, [...Result, 0]>;

/**
 * Ensures that a string has a minimum number of characters.
 * @typeParam T - The string to validate.
 * @typeParam Min - The minimum number of characters required.
 * @returns The string `T` if it meets the minimum length; otherwise, `never`.
 */
type TMinChar<T extends string, Min extends NonNegativeInteger> =
      Compare<Length<T>, Min> extends 'Equal' | 'Greater' ? T : never;

/**
 * Ensures that a string does not exceed a maximum number of characters.
 * @typeParam T - The string to validate.
 * @typeParam Max - The maximum number of characters allowed.
 * @returns The string `T` if it meets the maximum length; otherwise, `never`.
 */
type TMaxChar<T extends string, Max extends NonNegativeInteger> =
      Compare<Length<T>, Max> extends 'Equal' | 'Less' ? T : never;

/**
 * Combines `TMinChar` and `TMaxChar` to enforce both minimum and maximum character constraints.
 * @typeParam T - The string to validate.
 * @typeParam Min - The minimum number of characters required.
 * @typeParam Max - The maximum number of characters allowed.
 * @returns The string `T` if it meets both constraints; otherwise, `never`.
 */
type TMinMaxChar<T extends string, Min extends NonNegativeInteger, Max extends NonNegativeInteger> = TMinChar<T, Min> &
  TMaxChar<T, Max>;

// Test the type-level functions
type _Test = TMinMaxChar<'hello', 3, 5>; // 'hello'
type _Test2 = TMinMaxChar<'hello', 3, 4>; // never
type _Test3 = TMinMaxChar<'hello', 6, 10>; // never
type _Test4 = TMinMaxChar<'hello', 1, 10>; // 'hello'
type _Test5 = TMinMaxChar<'hello', 1, 5>; // 'hello'
type _Test6 = TMinMaxChar<'hellog', 5, 5>; // 'hello'
