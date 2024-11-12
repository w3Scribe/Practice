// Partial

interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  age: number;
  address : Address;
}

// type PartialUser = Partial<User>; // This is not deep partial

type DeepPartial<T> = {
  [key in keyof T]? : T[key] extends object ? DeepPartial<T[key]> : T[key];
}


type PartialUser = DeepPartial<User>;

const user: PartialUser = {
  name: 'John',
  address: {
    street: '123 Street',
    city: 'City'
  }
}