/**
 * Calculates the minimum number of increases needed to make an array non-decreasing.
 * @param numbers - The input array of numbers
 * @returns An object containing the count of increases needed and the resulting array
 */
function makeArrayNonDecreasing(numbers: number[]): { increasesNeeded: number; resultArray: number[] } {
  // Error Handling
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array.");
  }
  
  if (numbers.length <= 1) {
    throw new Error("Input array must have at least two elements.");
  }

  const resultArray = [numbers[0]];
  let increasesNeeded = 0;

  for (let i = 1; i < numbers.length; i++) {
    const previousValue = resultArray[i - 1]!;
    const currentValue = numbers[i]!;

    if (currentValue < previousValue) {
      // If current value is less than the previous one,
      // we need to increase it to match the previous value
      increasesNeeded += previousValue - currentValue;
      resultArray.push(previousValue);
    } else {
      resultArray.push(currentValue);
    }
  }

  return { increasesNeeded, resultArray } as { increasesNeeded: number; resultArray: number[] };
}

// Example usage
const input = [3, 2, 5, 1, 7];
const result = makeArrayNonDecreasing(input);
console.log(`Increases needed: ${result.increasesNeeded}`);
console.log(`Resulting array: ${result.resultArray}`);