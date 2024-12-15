type Fruits = ['apple', 'banana', 'cherry'];

type TuppleToObject<T extends any[]> = {
  [K in T[number]]: K;
};

type Test = TuppleToObject<Fruits>;

const test: Test = {
  apple: 'apple',
  banana: 'banana',
  cherry: 'cherry',
};
