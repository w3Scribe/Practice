type Fn = () => number | string;

type ReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;

type Test = ReturnType<Fn>;
