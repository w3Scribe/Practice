interface Address {
  street : string;
  city : string;
  country : string;
}

interface Person {
  name : string
  age : number
  address : Address
}

type PersonWithoutAddress = Omit<Person, "address">

const person : Person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
}



