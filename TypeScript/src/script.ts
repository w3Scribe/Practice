type Promisifier<T extends any> = T extends () => Promise<infer U>
  ? () => Promise<U>
  : T extends (...args: infer A) => Promise<infer U>
    ? (...args: A) => Promise<U>
    : T extends Array<infer U>
      ? Promise<U[]>
      : T extends object
        ? { [K in keyof T]: Promisifier<T[K]> }
        : Promise<T>;

type Original = {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    city: string;
    zip: number;
  };
};

type Test = Promisifier<Original>;
