const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;

  return 3;
  return false;
  return undefined
};


type MyReturnType<T> = T extends (...args: any[]) => infer R ? R  : never;

type Widen<T> = T extends number ? number : T;
type a = Widen<MyReturnType<typeof fn>>;
