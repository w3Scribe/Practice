type Fruits = ['apple', 'banana', 'cherry'] 

type FirstElement<T extends any[]> = T extends [infer First, ...any[]] ? First : never


type Fruit = FirstElement<Fruits> // expected to be 'apple'
