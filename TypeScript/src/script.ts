type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];


type Push<A1 extends Primitive[], A2 extends Primitive[]> = [...A1, ...A2];

type Test = Push<arr1, arr2>