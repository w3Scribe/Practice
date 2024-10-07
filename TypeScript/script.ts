interface IPerson {
  name: string;
  age: number;
}

class Person {
  private _name: string;
  private _age: number;

  constructor({ name, age }: IPerson) {
    this._name = name;
    this._age = age;
  }

  get name() : string {
    return this._name;
  }

  get age() : number {
    return this._age;
  }

  set name(name: string) {
    this._name = name;
  }

  set age(age: number) {
    this._age = age;
  }
}

const person = new Person( {
  age : 20,
  name: 'John'
});

person.age = 21;

console.log(person.age); 
