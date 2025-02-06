function pipe<T>(input: T): T;
function pipe<T, A>(input: T, fn1: (a: T) => A): A;
function pipe<T, A, B>(input: T, fn1: (a: T) => A, fn2: (a: A) => B): B;
function pipe<T, A, B, C>(input: T, fn1: (a: T) => A, fn2: (a: A) => B, fn3: (a: B) => C): C;
function pipe<T, A, B, C, D>(input: T, fn1: (a: T) => A, fn2: (a: A) => B, fn3: (a: B) => C, fn4: (a: C) => D): D;

function pipe(input: any, ...fns: Function[]): any {
  return fns.reduce((acc, fn) => fn(acc), input);
}

// Example usage:
const add = (n: number) => n + 1;
const double = (n: number) => n * 2;
const toString = (n: number) => n.toString();

const result = pipe(3, add, double, toString); // result inferred as string