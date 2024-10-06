// class defination

class Person {
   constructor(name, age){
    this.name = name;
    this.age = age;
   }

   getName(){
    return this.name;
   }

   getAge(){
    return this.age;
   }
}


const person = new Person('John', 30);

console.log(person.getName());


