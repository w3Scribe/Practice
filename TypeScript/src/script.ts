type A_FruitsName = ['apple', 'bananas', 'mango']
type B_others = ['pineapple', 'orange'];

type Concat<A extends any[], B extends any[]> = [...A, ...B];

type Test = Concat<A_FruitsName,B_others>