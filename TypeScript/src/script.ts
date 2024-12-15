interface IUserDetails {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
}


type ReadonlyP<T extends object> = {
  readonly [K in keyof T]: T[K];
}


type Test = ReadonlyP<IUserDetails>;