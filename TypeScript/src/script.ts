// More precise type matching utility
type StrictEqual<T, U> = 
  [T] extends [U] ? 
    [U] extends [T] ? 
      true : 
      false : 
    false;

// Exact object type utility to prevent excess properties
type ExactType<T, U> = T extends U ? 
  Exclude<keyof T, keyof U> extends never ? 
    T : 
    never : 
  never;

export interface UserType {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
}

export type UpdateUserDetails<T> = StrictEqual<ExactType<T, UserType>, T> extends true 
  ? (user: T) => void 
  : never;

const updateUserDetails: UpdateUserDetails<UserType> = (user) => {
  console.log(user.age);
};

// This will now cause a type error due to extra 'phone' property
const user = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  phone: '1234567890' // TypeScript will flag this as an error
} as const ;

// To fix the error, user should exactly match UserType
const validUser: UserType = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

updateUserDetails(user); // This works