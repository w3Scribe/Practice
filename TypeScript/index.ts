function repetitionAlgorithm(input: string) {
  const charCounts = new Map<string, number>();
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i]!;
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  let maxChar = '';
  let maxCount = 0;
  
  charCounts.forEach((count, char) => {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  });
  
  console.log(`The most repeated character is "${maxChar}" with a count of ${maxCount}`);
  return maxChar;
}

repetitionAlgorithm('hello world!');