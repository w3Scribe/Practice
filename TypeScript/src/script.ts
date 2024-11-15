interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  age: number;
  address : Address;
}

interface AnotherDifferntUser {
  name: string;
  age: number;
  address: Address;
  phone: string;
}

type AddUserDetails<T extends User> = (userDetails : T) => void;


const addUserDetails : AddUserDetails<AnotherDifferntUser> = (userDetails) => {
  console.log(userDetails);
}


const user = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
}

const anotherUser = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  },
  phone: '123-456-7890'
}


addUserDetails();