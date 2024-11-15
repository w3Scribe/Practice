interface Dog {
    bark(): void;
}
interface Cat {
    meow(): void;
}
type AnimalType = Dog | Cat;
declare function isDog(animal: AnimalType): animal is Dog;
declare function isCat(animal: AnimalType): animal is Cat;
declare function handleAnimal(animal: AnimalType): void;
