type FruitTupple = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

type TRemove<T1 extends any[], T2> = T1 extends [...infer Rest, T2]
  ? Rest
  : never;

type Test = TRemove<FruitTupple, 'banana'>; // i am getting never here find the issue and fix it
//  after fixing this you have to explain where made mistake and why it is not working
