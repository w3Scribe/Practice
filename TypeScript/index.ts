/**
 * Finds the most frequently occurring character in a string.
 * @param input - The string to analyze
 * @returns An object containing the most frequent character and its count
 */

function findMostRepeatedCharacter(input: string): { char: string; count: number } {
  if (typeof input !== "string" || input.trim().length < 1) {
    throw new Error("Input must be a non-empty string.");
  }

  // Remove all whitespace more efficiently
  const inputWithoutSpaces = input.replace(/\s+/g, '');
  
  if (inputWithoutSpaces.length === 0) {
    throw new Error("Input contains only whitespace characters.");
  }

  const charCounts = new Map<string, number>();
  let maxChar = '';
  let maxCount = 0;

  for (const char of inputWithoutSpaces) {
    const currentCount = (charCounts.get(char) || 0) + 1;
    charCounts.set(char, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = char;
    }
  }

  return { char: maxChar, count: maxCount };
}

// Example usage
try {
  const result = findMostRepeatedCharacter(" sdfsd ");
  console.log(`The most repeated character is "${result.char}" with ${result.count} repetitions.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
}