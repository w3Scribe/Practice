/**
 * Represents a person with a name and age.
 */
class Person {
  /**
   * Creates an instance of Person.
   * @param {string} __name - The name of the person.
   * @param {number} __age - The age of the person.
   */
  constructor(private __name: string, private __age: number) {}

  /**
   * Gets the name of the person.
   * @returns {string} The name of the person.
   */
  get name(): string {
    return this.__name;
  }

  /**
   * Sets the name of the person.
   * @param {string} name - The new name of the person.
   */
  set name(name: string) {
    this.__name = name;
  }

  /**
   * Gets the age of the person.
   * @returns {number} The age of the person.
   */
  get age(): number {
    return this.__age;
  }

  /**
   * Sets the age of the person.
   * @param {number} age - The new age of the person.
   */
  set age(age: number) {
    this.__age = age;
  }
}

const person = new Person('Alice', 30);

person.name = 'Bob';