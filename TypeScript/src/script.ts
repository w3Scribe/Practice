const Fruits = ['apple', 'banana', 'cherry'] as const;

type TuppleToObject<T extends readonly any[]> = {
  [prop in T[number]] : prop
}

type FruitsObject = TuppleToObject<typeof Fruits>