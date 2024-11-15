type Fn = (a: number, b: object) => boolean;

type ReturnDataType<T> = T extends (...args: any[]) => infer Rvalue ? Rvalue : never;
type ParamsFn<T> = T extends (...args: infer Params) => any ? Params : never;

type ReturnTypeOfFn = ReturnDataType<Fn>; // number
type ParamsTypeOfFn = ParamsFn<Fn>; // [number, string]

