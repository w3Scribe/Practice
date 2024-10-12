/**
 * Utility class for mathematical operations.
 */
declare class MathUtilsFn {
  /**
   * Adds two numbers.
   * @param a - The first number.
   * @param b - The second number.
   * @returns The sum of the two numbers.
   */
  static sum(a: number, b: number): number; 

  /**
   * Subtracts the second number from the first number.
   * @param a - The first number.
   * @param b - The second number.
   * @returns The difference of the two numbers.
   */
  static sub(a: number, b: number): number;

  /**
   * Multiplies two numbers.
   * @param a - The first number.
   * @param b - The second number.
   * @returns The product of the two numbers.
   */
  static mul(a: number, b: number): number;

  /**
   * Generates a random number between two numbers (inclusive).
   * @param a - The lower bound.
   * @param b - The upper bound.
   * @returns A random number between a and b.
   */
  static random(a: number, b: number): number;

  /**
   * Calculates the average of an array of numbers.
   * @param arr - The array of numbers.
   * @returns The average of the numbers.
   */
  static avg(arr: number[]): number;

  /**
   * Calculates the percentage of a number.
   * @param totalNumber - The total number.
   * @param percentageNumber - The percentage to calculate.
   * @returns The calculated percentage.
   */
  static percentage(totalNumber: number, percentageNumber: number): number;

  /**
   * Calculates the factorial of a number.
   * @param a - The number.
   * @returns The factorial of the number.
   */
  static factorial(a: number): number;

  /**
   * Checks if a number is prime.
   * @param a - The number.
   * @returns True if the number is prime, false otherwise.
   */
  static isPrime(a: number): boolean;

  /**
   * Checks if a number is even.
   * @param a - The number.
   * @returns True if the number is even, false otherwise.
   */
  static isEven(a: number): boolean;

  /**
   * Checks if a number is odd.
   * @param a - The number.
   * @returns True if the number is odd, false otherwise.
   */
  static isOdd(a: number): boolean;    

  /**
   * Checks if a number is a palindrome.
   * @param a - The number.
   * @returns True if the number is a palindrome, false otherwise.
   */
  static isPalindrome(a: number): boolean;
}

sudhir hello world 