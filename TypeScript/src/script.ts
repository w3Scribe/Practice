type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type Unshift<A1 extends Primitive[], A2 extends Primitive> = A2 extends Primitive[]
  ? [...A2, ...A1]
  : [A2, ...A1];
