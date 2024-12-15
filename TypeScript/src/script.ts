type Fruits = ['apple', 'banana', 'cherry'];

type TLen<T extends any[]> = T extends { length: infer L } ? L : never;

type Len = TLen<Fruits>; // expected 3