type T1 = ['orange', 'apple', 'banana'];
type T2 = [1, 2, 3];

type Concat<T1 extends Primitive[], T2 extends Primitive[]> = [...T1, ...T2];

type Test = Concat<T1, T2>
