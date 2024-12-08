type Fn = (a: number, b: number) => number;

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: unknown[]) => infer R
  ? R
  : never;

type Result = ReturnType<Fn>; // number
