interface Address {
  street: string;
  city: string;
  state: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

type DeepPartial<T> = {
  [k in keyof T]?: T[k] extends object ? DeepPartial<T[k]> : T[k];
}

function updateProfile(Person: DeepPartial<Person>) {

}

updateProfile({
  name: "John",
  address: {
    state: "New York"
  }
})