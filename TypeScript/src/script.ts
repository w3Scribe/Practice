// usage of is keyword in typescript
// typeof, instanceof, in, as, satisfies, is, type guards,, 

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type AnimalType = Dog | Cat;


function Animal<T extends AnimalType>(animal: T){
  if ('bark' in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}






