function Repetition(input: string) {
  const CharCounts = new Map<string, number>();

  for (let char = 0; char <= input.length; char++) {
    const currentChar = input[char]!;
    CharCounts.set(currentChar, (CharCounts.get(currentChar) || 0) + 1)
  }

  let maxCount = 0;
  let maxChar = '';

  for (const [char, count] of CharCounts.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  console.log(`The most repeated character is "${maxChar}" with ${maxCount} occurrences.`);
}


Repetition("hel l owor ld");