// Creating Class and Structure of the class
// Creating Instance of the class, Ojects , Properties and Methods
// Creating Constructor for Object initiallization and passing values to the object


class Animal {
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }

  makeSound(){
    return this.sound;
  }

  getName(){
    return this.name;
  }
}

const dog = new Animal('Dog', 'Bark');
const result = 'name' in dog;
console.log(result);




// Extending class and inheriting properties and methods
// Access control ( public, private, protected )
// Method overriding and method overloading 
// Hiding Implementation details and showing only essential features



