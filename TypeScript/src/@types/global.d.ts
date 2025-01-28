type Immutable<T> = T extends Primitive
  ? T
  : {
      readonly [K in keyof T]: Immutable<T[K]>;
    };

type Draft<T extends object> = {
  [K in keyof T]?: T[K] extends object
    ? T[K] extends Array<infer U>
      ? U[]
      : Immutable<T[K]>
    : T[K];
};
