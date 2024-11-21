interface User {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

type MyOmit<T, K extends keyof T> = {
  [Props in keyof T as Props extends K ? never : Props]: T[Props];
};

type UserWithoutAddress = MyOmit<User, 'address'>;
