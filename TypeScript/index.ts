function MissingNumber(input: number[]): number {
  const n = input.length + 1; // Length of complete sequence
  const perfectSum = n * (n + 1) / 2; // Sum of numbers from 1 to n
  const actualSum = input.reduce((acc, num) => acc + num, 0);
  return perfectSum - actualSum;
}

// Example usage:
const inputArray = [1, 2, 3, 5]; // Missing number is 4
console.log(MissingNumber(inputArray)); // Output: 4