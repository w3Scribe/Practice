type Arry = [1, 2, 3, 4, 5];


// type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
type Last<T extends any[]> = T extends [] ? never : T[T['length']];
