type FruitsName = ['apple', 'bananas', 'mango']


type Push<T extends any[], V> = [...T, V];


type Test = Push<FruitsName, 'orange'>
