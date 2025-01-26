type SwapType = {
  string: number;
  number: string;
  true: false;
  false: true;
  undefined: null;
  null: undefined;
  'string[]': number[];
  'number[]': string[];
};

type Swap<T extends keyof SwapType> = SwapType[T];

type SwapFn<T> = {
  [K in keyof T]: T[K] extends keyof SwapType ? Swap<T[K]> : T[K];
};

type Original = {
  age: number;
  name: string;
  active: boolean;
  friends: string[];
};

type Swapped = SwapFn<Original>;