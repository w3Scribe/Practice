const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type test = MyParameters<typeof bar, [boolean, { a: 'A' }]>;

type MyParameters<T extends (...args: any[]) => any, ParamsType extends any[] = []> = T extends (
  ...args: infer P
) => any
  ? P extends ParamsType
    ? true
    : false
  : false;
