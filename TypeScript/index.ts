function Repetition(input: string) {
  const CharCounts = new Map<string, number | string>();

  CharCounts.set("MaxCounts", 0);
  CharCounts.set("MaxCharCount", "");

  for (let char = 0; char <= input.length; char++) {
    const currentChar = input[char]!;
    const newCharCount = CharCounts.get(currentChar) || 0 ;
    CharCounts.set(currentChar, (newCharCount as number) + 1);

    if (newCharCount > CharCounts.get("MaxCounts")!) {
      CharCounts.set("MaxCounts", newCharCount);
      CharCounts.set("MaxCharCount", currentChar);
    }
  }

 console.log(`The most repeated character is "${CharCounts.get("MaxCharCount")}" with ${CharCounts.get("MaxCounts")} repetitions.`);
}


Repetition("hel l owor ld");