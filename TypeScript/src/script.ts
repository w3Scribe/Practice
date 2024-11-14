interface Person {
  name?: string;
  age: number;
  address: {
    street?: string;
    city: string;
  }
}

type RequiredKeys<T> = T extends object ? {
  [K in keyof T]-?: T[K] extends object ? RequiredKeys<T[K]> : T[K]
} : T;

type RequiredPerson = RequiredKeys<Person>;