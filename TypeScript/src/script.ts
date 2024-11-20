type Arry = ['a', 'b', 'c'];

// type First<T extends PropertyKey[]> = T[number] extends never ? never : T[0];
// type First<T extends PropertyKey[]> = T extends [infer F, ...infer Rest] ? F : never;
// type First<T extends PropertyKey[]> = T extends [] ? never : T[0];