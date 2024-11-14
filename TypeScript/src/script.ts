interface User {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
}

type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

const UserDetail: Optional<User, 'age'> = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
    country: 'United States'
  }
}