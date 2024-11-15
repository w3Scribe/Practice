interface IUser {
  name: string;
  age: number;
  address: {
    city: undefined;
    country: object;
  };
}


// How to infer deeply nested types in object ?
type DeepType<T> = {
  [K in keyof T]: T[K] extends object ? DeepType<T[K]> : T[K];
}[keyof T];

type DeepUser = keyof IUser; // "name" | "age" | "address"