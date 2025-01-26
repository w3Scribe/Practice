type Original = {
  age: number;
  name: string;
  active: true;
  friends: string[];
};

type FlipType<T> = T extends string
  ? number
  : T extends number
    ? string
    : T extends true
      ? false
      : T extends false
        ? true
        : T extends Array<infer U>
          ? Array<FlipType<U>>
          : T;

type Flipper<T extends Record<string, any>> = {
  [K in keyof T]: () => FlipType<T[K]>;
};

type Flipped = Flipper<Original>;
