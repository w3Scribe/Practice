import { produce } from 'immer';

type IUserDetails = {
  name: string;
  age: number;
  email: string;
  address: {
    city: string;
    country: string;
  };
};

const userDetails: IUserDetails = {
  name: 'John',
  age: 25,
  email: 'abc@gmail.com',
  address: {
    city: 'New York',     
    country: 'USA',
  },
};

const result = produce<IUserDetails>(userDetails, (draft) => {
  draft.age = 26;
});

console.log(result);
