// Tupple to union

type TuppleToUnion<T extends any[]> = T[number]

type Tupple2Union<T extends any[]> = T extends Array<infer AE> ? AE : never

// Do you have a better way to solve this problem?

// TODO: make a function that converts a tuple to a union



// test 
type tupple = ["Hello", "World"]

type test1 = TuppleToUnion<tupple>

type test2 = Tupple2Union<tupple>