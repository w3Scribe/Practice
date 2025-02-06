type PipeResult<T, Fns extends Array<(arg: any) => any>> = Fns extends [infer First, ...infer Rest]
  ? First extends (arg: T) => infer R
    ? PipeResult<R, Rest extends Array<(arg: any) => any> ? Rest : []>
    : never
  : T;

function pipe<T, Fns extends Array<(arg: any) => any>>(input: T, ...fns: Fns): PipeResult<T, Fns> {
  return fns.reduce((acc, fn) => fn(acc), input) as PipeResult<T, Fns>;
}

// Example usage:
const add = (n: number) => n + 1;
const double = (n: number) => n * 2;
const toString = (n: number) => n.toString();

const result = pipe(3, add, double, toString); // result inferred as string
