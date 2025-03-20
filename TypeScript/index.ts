function Repetition(input: string): void {
  const Store = new Map<string, number>();

  for (const char of input.split('')) {
    if (Store.has(char)) {
      Store.set(char, Store.get(char)! + 1);
    } else {
      Store.set(char, 1);
    }
  }

  const max = Math.max(...Array.from(Store.values()));
  const maxChar = Array.from(Store.entries()).find(([_, value]) => value === max)?.[0];

  if (maxChar)
    console.log(`The most repeated character is "${maxChar}" with ${max} repetitions.`);
  else
    console.log("No repeated characters found.");
}

Repetition('Hello World!');