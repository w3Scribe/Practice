type FruitsName = ['apple', 'bananas', 'mango']


type Unshift<T extends any[], U> = T extends [...infer Rest] ? [U, ...Rest] : never

type Test = Unshift<FruitsName, "orange">