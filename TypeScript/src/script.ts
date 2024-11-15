interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  age: number;
  address : Address;
}

type AddUserDetails<T extends User> = (userDetails : T) => void;


const addUserDetails : AddUserDetails<User> = (userDetails) => {
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


addUserDetails(user);