// Partial

interface User {
  name: string;
  age: number;
  address : string;
}

type PartialUser = Partial<User>;