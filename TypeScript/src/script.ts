interface IUser {
  name: string;
  age: number;
  country: string;
  role?: string;
}

type ReadOnlyProps<T extends object, K extends keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

type Test = ReadOnlyProps<IUser, 'name' | 'age'>;
