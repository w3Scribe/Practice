function Repetition(input: string) {

  if (typeof input !== "string" || input.trim().length < 1 ) {
    throw new Error("Input must be a non-empty string.");
  }

  const charCounts = new Map<string, number>();
  let maxChar = '';
  let maxCount = 0;

  // Cache the input length
  const refineInput = input.split(' ').filter(char => char).join('')
  const length = refineInput.length;

  for (let i = 0; i < length; i++) {
    const currentChar = refineInput[i]!;
    const currentCount = (charCounts.get(currentChar) || 0) + 1;
    charCounts.set(currentChar, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
  }

  console.log(`The most repeated character is "${maxChar}" with ${maxCount} repetitions.`);
}

Repetition(" sdfsd ");