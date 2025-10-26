// Tupple to union

type TuppleToUnion<T extends any[]> = T[number]
type Tupple2Union<T extends any[]> = T extends Array<infer AE> ? AE : never
type Tupple3Union<T extends any[]> = T extends (infer AE)[] ? AE : never
