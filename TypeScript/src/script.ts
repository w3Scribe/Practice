type Fnc = () => number | string;

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R
  ? R
  : never;

type Test = ReturnType<Fnc>;
