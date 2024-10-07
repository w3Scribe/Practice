class Person {
  constructor(private __name: string, private __age: number) {}
  get name() {
    return this.__name;
  }

  set name(name: string) {
    this.__name = name;
  }

  get age() {
    return this.__age;
  }

  set age(age: number) {
    this.__age = age;
  }
}


const person = new Person('John', 30);

const result = person.name;

console.log(result);