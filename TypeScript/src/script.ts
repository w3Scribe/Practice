type FruitTupple = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

type TRemove<T extends any[], E extends T[number]> = T extends [infer First, ...infer Rest]
  ? First extends E
    ? Rest
    : [First, ...TRemove<Rest, E>]
  : T;


type test = TRemove<FruitTupple, 'elderberry'>;
