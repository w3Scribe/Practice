// Omit
// Partial
// readOnly , deepReadOnly

type Person = Readonly<{
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
}>


type ReadOnly<T> = {
  readonly [key in keyof T] : T[key] extends object ? ReadOnly<T[key]> : T[key]
}


const PersonOne: ReadOnly<Person> = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
}

PersonOne.address.city = 'ere'

