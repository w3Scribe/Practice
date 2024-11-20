type arry = ['hello', 'world', 'foo', 'bar'];

type First<T extends PropertyKey[]> = T extends [infer F, ...infer rest] ? F : never;
type Test = First<arry>