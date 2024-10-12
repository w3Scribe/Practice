
export class MathUtilsFn {
  /**
   * Adds two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of the two numbers.
   */
  static sum(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts the second number from the first number.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The difference of the two numbers.
   */
  static sub(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The product of the two numbers.
   */
  static mul(a: number, b: number): number {
    return a * b;
  }

  /**
   * Generates a random number between two numbers (inclusive).
   * @param {number} a - The lower bound.
   * @param {number} b - The upper bound.
   * @returns {number} A random number between a and b.
   */
  static random(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  /**
   * Calculates the average of an array of numbers.
   * @param {number[]} arr - The array of numbers.
   * @returns {number} The average of the numbers.
   */
  static avg(arr: number[]): number {
    if (arr.length === 0) throw new Error("Array cannot be empty");
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  /**
   * Calculates the percentage of a number.
   * @param {number} totalNumber - The total number.
   * @param {number} percentageNumber - The percentage to calculate.
   * @returns {number} The calculated percentage.
   */
  static percentage(totalNumber: number, percentageNumber: number): number {
    return (percentageNumber / 100) * totalNumber;
  }

  /**
   * Calculates the factorial of a number.
   * @param {number} a - The number.
   * @returns {number} The factorial of the number.
   */
  static factorial(a: number): number {
    if (a < 0) throw new Error("Number must be non-negative");
    return a === 0 ? 1 : a * MathUtilsFn.factorial(a - 1);
  }

  /**
   * Checks if a number is prime.
   * @param {number} a - The number.
   * @returns {boolean} True if the number is prime, false otherwise.
   */
  static isPrime(a: number): boolean {
    if (a <= 1) return false;
    if (a <= 3) return true;
    if (a % 2 === 0 || a % 3 === 0) return false;
    for (let i = 5; i * i <= a; i += 6) {
      if (a % i === 0 || a % (i + 2) === 0) return false;
    }
    return true;
  }

  /**
   * Checks if a number is even.
   * @param {number} a - The number.
   * @returns {boolean} True if the number is even, false otherwise.
   */
  static isEven(a: number): boolean {
    return a % 2 === 0;
  }

  /**
   * Checks if a number is odd.
   * @param {number} a - The number.
   * @returns {boolean} True if the number is odd, false otherwise.
   */
  static isOdd(a: number): boolean {
    return a % 2 !== 0;
  }

  /**
   * Checks if a number is a palindrome.
   * @param {number} a - The number.
   * @returns {boolean} True if the number is a palindrome, false otherwise.
   */
  static isPalindrome(a: number): boolean {
    const str = a.toString();
    return str === str.split("").reverse().join("");
  }
}


