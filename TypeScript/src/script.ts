type arry = ['hello', 'world', 'foo', 'bar'];

// type First<T extends PropertyKey[]> = T extends [infer F, ...infer rest] ? F : never;
// type Test = First<arry>

// type First<T extends PropertyKey[]> = T[number] extends never ? never : T[0];
// type Test = First<arry>

// type First<T extends PropertyKey[]> = T extends [] ? never : T[0];
// type Test = First<arry>