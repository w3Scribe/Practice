type Fn = (a: number, b: number) => number;

type Params<T extends Function> = T extends (...args: infer Params) => any ? Params : never;

// type ParamsOfFn = Params<Fn>; // resolves to [number, number]

// // Example usage of ParamsOfFn
// const exampleFunction: (...args: ParamsOfFn) => number = (a, b) => a + b;

type test = Parameters<Fn>