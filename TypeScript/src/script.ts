import { produce } from 'immer';

const userDetails = {
  name: 'John',
  age: 25,
  email: 'abc@gmail.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};



const result = produce(userDetails, (draft) => {
  draft.age = 26
});

console.log(result);

