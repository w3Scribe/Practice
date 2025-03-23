function Repetition(input: string | string[]): { MaxChar: string; MaxCharCount: number; RepResult: Map<string, number> } {
  if (Array.isArray(input) && input.length < 1) {
    throw new Error("Array must have at least one element.");
  }

  if (typeof input === 'string' && input.trim().length < 3) {
    throw new Error("String must be at least 3 characters.");
  }

  const RefinedUseInput: string[] = (typeof input === 'string' ? input.split('') : input)
    .map(char => char.toLowerCase())
    .filter(char => char.trim().length > 0);

  const RepResult = new Map<string, number>();
  let MaxCharCount = 0;
  let MaxChar = '';

  for (const char of RefinedUseInput) {
    const count = (RepResult.get(char) || 0) + 1;
    RepResult.set(char, count);

    if (count > MaxCharCount) {
      MaxCharCount = count;
      MaxChar = char;
    }
  }

  return { MaxChar, MaxCharCount, RepResult };
}

const result = Repetition('redbluegreenred');
console.log(result);