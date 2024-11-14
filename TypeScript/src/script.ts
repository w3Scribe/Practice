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


type RequiredKeys<Type> = {
  [Key in keyof Type] -?: Type[Key] extends object ? RequiredKeys<Type[Key]> : Key; 
}[keyof Type];

type RequiredKeysOfPerson = RequiredKeys<Person>;

