type Fruits = ['apple', 'banana', 'cherry', 'date'];

type TupleToObject<T extends any[], prefix extends string = ''> = {
  [K in T[number] as `${prefix}${K}`] : K
}

type FruitObject = TupleToObject<Fruits, 'fruit_'>;