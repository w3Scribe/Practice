interface IUser {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
}

type UserKeys = keyof IUser

// but i want deep key

type DeepKeys<T> = {
  [K in keyof T]: K extends string | number ? (T[K] extends object ? `${DeepKeys<T[K]>}` : K) : never;
}[keyof T];

const UserKey: DeepKeys<IUser> = "city"

