type Tuple = ['orange', 'apple', 'banana'];

type Includes<T extends PropertyKey[], S extends PropertyKey> = S extends T[number] ? true : false;

type Test = Includes<Tuple, 'apple'>