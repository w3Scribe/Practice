type A = [0,1, 2, 3, 4, 'false'];
type B = {
  0: '0';
  1: '1';
  2: '2';
  3: '3';
  4: '4';
  'false' : 'false'
};

type TupleToObject<T extends any[]> = {
  [P in T[number]]: `${P}`
}


type C = TupleToObject<A>

type TestOne = IsEqual<A,B>
type TestTwo = IsEqual<B,C>