"use strict";
// usage of is keyword in typescript
// typeof, instanceof, in, as, satisfies, is, type guards,, 
// function isDog(Animal: AnimalType): Animal is Dog {
//   return (Animal as Dog).bark !== undefined;
// }
// function heyIam(Animal: AnimalType) {
//   if (isDog(Animal)) {
//     Animal.bark()
//   }
//   else {
//     Animal.meow()
//   }
// }
function isDog(animal) {
    return 'bark' in animal;
}
function isCat(animal) {
    return 'meow' in animal;
}
// Example usage
function handleAnimal(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else if (isCat(animal)) {
        animal.meow();
    }
}
