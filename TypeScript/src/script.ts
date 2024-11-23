type Fruits = ['apple', 'banana', 'orange'];

type TupleTOUnion<T extends any[]> = T[number];

type FruitsUnion = TupleTOUnion<Fruits>; 
