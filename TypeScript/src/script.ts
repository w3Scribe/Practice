type Fruits = ['apple', 'banana', 'cherry'];

type TLen<T extends any[]> = T['length'];

type Len = TLen<Fruits>; // expected 3