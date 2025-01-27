type Freez<T extends object> = {
  readonly [K in keyof T]: T[K] extends object
    ? Freez<T[K]>
    : T[K] extends Array<infer U>
      ? ReadonlyArray<U>
      : T[K];
};

type Original = {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: {
    city: string;
    zip: number;
  };
};  

type Test = Freez<Original>;
