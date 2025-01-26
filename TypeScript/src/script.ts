type Original = {
  name: string;
  age: number;
  isActive: false;
  hobbies: string[];
  address: {
    city: string;
    zip: number;
  };
};

type Transform<T> = T extends string
  ? Uppercase<T>
  : T extends number
    ? `${T}`
    : T extends true
      ? 'true'
      : T extends false
        ? 'false'
        : T extends Array<infer U>
          ? Array<Transform<U>>
          : T extends object
            ? Flipper<T>
            : T;

type Flipper<T> = {
  [K in keyof T]: Transform<T[K]>;
};

type Flipped = Flipper<Original>;
