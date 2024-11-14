interface Person {
  name: string;
  age: number;
  state: string;
  country?: string;
  otherDetails : {
    hobbies?: string[];
    address: string;
  }
}