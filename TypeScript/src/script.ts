interface IUserDetails {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

type PropsName<T extends object, Pnames extends string[] = []> = {
  [P in keyof T]: T[P] extends object
    ? [...Pnames, Extract<P, string>] | PropsName<T[P], [...Pnames, Extract<P, string>]>
    : [...Pnames, Extract<P, string>];
}[keyof T];

// Usage
type AllPropertyNames = PropsName<IUserDetails>[number]; // ['name', 'age', 'address', 'address.city', 'address.country']

// Example usage
const propertyName: AllPropertyNames = 'name';
console.log(propertyName);
