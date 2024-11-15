type Fn = () => boolean;

type ReturnDataType<T> = T extends (...args: any[]) => infer Rvalue ? Rvalue : never;

type ReturnTypeOfFn = ReturnDataType<Fn>; // number
