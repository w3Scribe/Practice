# Type Challenges Documentation

Welcome to the **Type Challenges** documentation! This repository organizes a list of TypeScript challenges categorized by difficulty levels. Each challenge focuses on improving your understanding and mastery of TypeScript's type system. Dive in and start enhancing your skills!

---

## Table of Contents

- [Challenges Overview](#challenges-overview)
  - [Easy Challenges](#easy-challenges)
  - [Medium Challenges](#medium-challenges)
  - [Hard Challenges](#hard-challenges)
  - [Extreme Challenges](#extreme-challenges)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Resources](#resources)

---

## Challenges Overview

This repository contains TypeScript challenges classified into the following levels:

- **Easy:** 40 challenges
- **Medium:** 130 challenges
- **Hard:** 50 challenges
- **Extreme:** 20 challenges

### Easy Challenges

| ID   | Challenge             | Description                                           | Hint                                                |
|------|-----------------------|-------------------------------------------------------|----------------------------------------------------|
| 4    | **Pick**              | Create a type that picks specific properties.         | Use `keyof` and index access types.               |
| 7    | **Readonly**          | Make properties of an object immutable.               | Use `Readonly<T>` built-in utility type.          |
| 11   | **Tuple to Object**   | Convert a tuple into an object with keys.             | Iterate over the tuple with `as` and `keyof`.     |
| 14   | **First of Array**    | Extract the first element from an array type.         | Use indexed access like `T[0]`.                   |
| 18   | **Length of Tuple**   | Get the length of a tuple.                            | Use the `length` property of arrays.              |
| 43   | **Exclude**           | Exclude specific types from a union.                  | Use TypeScript’s `Exclude` utility type.          |
| 189  | **Awaited**           | Unwrap the type of a `Promise`.                       | Use conditional types with `infer`.               |
| 268  | **If**                | Create a conditional type.                            | Use `extends` to check conditions in types.       |
| 533  | **Concat**            | Concatenate two arrays.                               | Use tuple spread syntax `[...A, ...B]`.           |
| 898  | **Includes**          | Check if a type exists in a tuple.                    | Use recursive conditional types.                  |
| 3057 | **Push**              | Append a type to the end of a tuple.                  | Use tuple spread syntax.                          |
| 3060 | **Unshift**           | Add a type to the beginning of a tuple.               | Use tuple spread syntax at the start.             |
| 3312 | **Parameters**        | Extract the parameters of a function type.            | Use `Parameters<T>` utility type.                 |

---

### Medium Challenges

| ID   | Challenge              | Description                                           | Hint                                                |
|------|------------------------|-------------------------------------------------------|----------------------------------------------------|
| 2    | **Get Return Type**    | Extract the return type of a function.                | Use `ReturnType<T>` utility type.                 |
| 3    | **Omit**               | Remove specific properties from an object.            | Use `Pick` and `keyof` along with 
| 8    | **Readonly 2**         | Make nested properties of an object immutable.        | Use recursive conditional types.                  |
| 9    | **Deep Readonly**      | Make all properties of an object immutable.           | Use recursive conditional types.                  |
| 10   | **Tuple to Union**     | Convert a tuple to a union type.                      | Use indexed access types and `keyof`.             |
| 12   | **Chainable Options**  | Create a chainable options type.                      | Use recursive conditional types.                  |
| 15   | **Last of Array**      | Extract the last element from an array type.          | Use tuple rest syntax `[...T]`.                   |
| 16   | **Pop**                | Remove the last element from a tuple.                 | Use tuple rest syntax `[...T]`.                   |
| 20   | **Promise.all**        | Create a type for `Promise.all`.                      | Use mapped types and conditional logic.           |
| 62   | **Type Lookup**        | Get the type of a property from an object.            | Use indexed access types and `keyof`.             |
| 106  | **Trim Left**          | Trim whitespace from the left side of a string.       | Use template literal types and conditional logic.  |
| 108  | **Trim**               | Trim whitespace from both sides of a string.          | Use template literal types and conditional logic.  |
| 110  | **Capitalize**         | Capitalize the first letter of a string.              | Use template literal types and conditional logic.  |
| 116  | **Replace**            | Replace a substring in a string.                      | Use template literal types and conditional logic.  |
| 119  | **ReplaceAll**         | Replace all occurrences of a substring in a string.   | Use template literal types and conditional logic.  |
| 191  | **Append Argument**    | Append an argument to a function.                     | Use rest parameters and tuple types.              |
| 296  | **Permutation**        | Generate all permutations of a string.                | Use recursion and tuple manipulation.             |
| 298  | **Length of String**   | Get the length of a string type.                      | Use template literal types and conditional logic.  |
| 459  | **Flatten**            | Flatten a nested array type.                          | Use recursive conditional types.                  |
| 527  | **Append to Object**   | Append a property to an object type.                  | Use mapped types and conditional logic.           |
| 529  | **Absolute**           | Get the absolute value of a number type.              | Use conditional types and type guards.            |
| 531  | **String to Union**    | Convert a string to a union type.                     | Use indexed access types and `keyof`.             |
| 599  | **Merge**              | Merge two types into a new type.                      | Use mapped types and conditional logic.           |
| 612  | **KebabCase**          | Convert a camel case string to kebab case.            | Use template literal types and conditional logic.  |
| 645  | **Diff**               | Get the difference between two types.                 | Use conditional types and `Exclude`.              |
| 949  | **AnyOf**              | Check if a type is part of a union.                   | Use conditional types and type guards.            |
| 1042 | **IsNever**            | Check if a type is `never`.                           | Use conditional types and type guards.            |
| 1097 | **IsUnion**            | Check if a type is a union.                           | Use conditional types and type guards.            |
| 1130 | **ReplaceKeys**        | Replace keys in an object type.                       | Use mapped types and conditional logic.           |
| 1367 | **Remove Index Signature** | Remove the index signature from an object type.   | Use mapped types and conditional logic.           |
| 1978 | **Percentage Parser**  | Parse a percentage string to a number.               | Use template literal types and conditional logic.  |
| 2070 | **Drop Char**          | Drop a character from a string.                      | Use template literal types and conditional logic.  |
| 2257 | **MinusOne**           | Subtract one from a number type.                     | Use conditional types and type guards.            |
| 2595 | **PickByType**         | Pick properties of a specific type.                  | Use mapped types and conditional logic.           |
| 2688 | **StartsWith**         | Check if a string starts with a specific substring.   | Use template literal types and conditional logic.  |
| 2693 | **EndsWith**           | Check if a string ends with a specific substring.     | Use template literal types and conditional logic.  |
| 2757 | **PartialByKeys**      | Make specific properties of an object optional.      | Use mapped types and conditional logic.           |
| 2759 | **RequiredByKeys**     | Make specific properties of an object required.      | Use mapped types and conditional logic.           |
| 2793 | **Mutable**            | Make all properties of an object mutable.            | Use mapped types and conditional logic.           |
| 2852 | **OmitByType**         | Omit properties of a specific type.                  | Use mapped types and conditional logic.           |
| 2946 | **ObjectEntries**      | Get the entries of an object type.                   | Use mapped types and conditional logic.           |
| 3062 | **Shift**              | Remove the first element from a tuple.               | Use tuple rest syntax `[...T]`.                   |
| 3188 | **Tuple to Nested Object** | Convert a tuple to a nested object.               | Use recursive conditional types.                  |
| 3192 | **Reverse**            | Reverse a string or array type.                      | Use template literal types and conditional logic.  |
| 3196 | **Flip Arguments**     | Flip the order of arguments in a function type.      | Use tuple manipulation and conditional logic.     |
| 3243 | **FlattenDepth**       | Flatten a nested array type to a specific depth.     | Use recursive conditional types.                  |
| 3326 | **BEM Style String**   | Convert a string to BEM style.                       | Use template literal types and conditional logic.  |
| 3376 | **InorderTraversal**   | Perform an inorder traversal of a binary tree.       | Use recursive conditional types.                  |
| 4179 | **Flip**               | Flip the order of arguments in a function type.      | Use tuple manipulation and conditional logic.     |
| 4182 | **Fibonacci Sequence** | Generate the Fibonacci sequence.                     | Use recursion and conditional logic.              |
| 4260 | **AllCombinations**    | Generate all combinations of a string.               | Use recursion and tuple manipulation.             |
| 4425 | **Greater Than**       | Check if a number type is greater than another.      | Use conditional types and type guards.            |
| 4471 | **Zip**                | Zip two arrays into a single array.                  | Use tuple manipulation and conditional logic.     |
| 4484 | **IsTuple**            | Check if a type is a tuple.                          | Use conditional types and type guards.            |
| 4499 | **Chunk**              | Split an array into chunks of a specific size.       | Use recursion and tuple manipulation.             |
| 4518 | **Fill**               | Fill an array with a specific value.                 | Use recursion and tuple manipulation.             |
| 4803 | **Trim Right**         | Trim whitespace from the right side of a string.     | Use template literal types and conditional logic.  |
| 5117 | **Without**            | Remove properties from an object type.               | Use mapped types and conditional logic.           |
| 5140 | **Trunc**              | Truncate a string to a specific length.              | Use template literal types and conditional logic.  |
| 5153 | **IndexOf**            | Get the index of a specific element in an array.     | Use conditional types and type guards.            |
| 5310 | **Join**               | Join elements of an array into a string.             | Use template literal types and conditional logic.  |
| 5317 | **LastIndexOf**        | Get the last index of a specific element in an array.| Use conditional types and type guards.            |
| 5360 | **Unique**             | Remove duplicate elements from an array.             | Use conditional types and type guards.            |
| 5821 | **MapTypes**           | Map properties of an object type.                    | Use mapped types and conditional logic.           |
| 7544 | **Construct Tuple**    | Construct a tuple from a union type.                 | Use conditional types and type guards.            |
| 8640 | **Number Range**       | Create a range of numbers as a tuple.                | Use recursion and tuple manipulation.             |
| 8767 | **Combination**        | Generate all combinations of a tuple.                | Use recursion and tuple manipulation.             |
| 8987 | **Subsequence**        | Check if a string is a subsequence of another.       | Use conditional types and type guards.            |
| 9142 | **CheckRepeatedChars** | Check if a string has repeated characters.           | Use conditional types and type guards.            |
| 9286 | **FirstUniqueCharIndex** | Get the index of the first unique character.      | Use conditional types and type guards.            |
| 9616 | **Parse URL Params**   | Parse URL parameters into an object.                 | Use template literal types and conditional logic.  |
| 9896 | **GetMiddleElement**   | Get the middle element of an array.                  | Use conditional types and type guards.            |
| 9898 | **Appear Only Once**   | Get elements that appear only once in an array.      | Use conditional types and type guards.            |
| 9989 | **Count Element Number To Object** | Count elements in an array and create an object. | Use conditional types and type guards.            |
| 10969 | **Integer**           | Check if a number type is an integer.                | Use conditional types and type guards.            |
| 16259 | **ToPrimitive**       | Convert a type to a primitive type.                  | Use conditional types and type guards.            |
| 17973 | **DeepMutable**       | Make all properties of an object mutable.            | Use recursive conditional types.                  |
| 18142 | **All**               | Check if all elements of an array are true.          | Use conditional types and type guards.            |
| 18220 | **Filter**            | Filter elements of an array based on a condition.    | Use conditional types and type guards.            |
| 21104 | **FindAll**           | Find all elements of an array based on a condition.  | Use conditional types and type guards.            |
| 21106 | **Combination Key Type** | Create a combination key type.                    | Use conditional types and type guards.            |
| 21220 | **Permutations of Tuple** | Generate permutations of a tuple.                | Use recursion and tuple manipulation.             |
| 25170 | **Replace First**      | Replace the first occurrence of a substring.         | Use template literal types and conditional logic.  |
| 25270 | **
Transpose**         | Transpose a matrix represented as a tuple.           | Use recursion and tuple manipulation.             |
| 26401 | **JSON Schema to TypeScript** | Convert JSON schema to TypeScript.              | Use recursive conditional types.                  |
| 27133 | **Square**             | Square a number type.                                | Use conditional types and type guards.            |
| 27152 | **Triangular Number**  | Check if a number type is a triangular number.       | Use conditional types and type guards.            |
| 27862 | **CartesianProduct**   | Generate the Cartesian product of two arrays.        | Use recursion and tuple manipulation.             |
| 27932 | **MergeAll**           | Merge all elements of an array into a single type.   | Use conditional types and type guards.            |
| 27958 | **CheckRepeatedTuple** | Check if a tuple has repeated elements.              | Use conditional types and type guards.            |
| 28333 | **Public Type**        | Extract public properties of an object type.         | Use mapped types and conditional logic.           |
| 29650 | **ExtractToObject**    | Extract properties of an object type to an object.   | Use mapped types and conditional logic.           |
| 29785 | **Deep Omit**          | Omit properties deeply from an object type.          | Use recursive conditional types.                  |
| 30301 | **IsOdd**              | Determine if a number type is odd.                   | Use template literal types and modulo logic.      |
| 30430 | **Tower of Hanoi**     | Solve the Tower of Hanoi problem.                    | Use recursion and conditional logic.              |
| 30958 | **Pascal's Triangle**  | Generate Pascal's Triangle as a type.                | Use recursion and tuple manipulation.             |
| 30970 | **IsFixedStringLiteralType** | Check if a type is a fixed string literal.       | Use conditional types and type guards.            |
| 34007 | **Compare Array Length** | Compare the lengths of two arrays.                | Use conditional types and type guards.            |




---

### Hard Challenges

| ID   | Challenge              | Description                                           | Hint                                                |
|------|------------------------|-------------------------------------------------------|----------------------------------------------------|
| 518  | **HardPick**           | Extend the Pick utility type with additional features.| Use mapped types and conditional logic.           |
| 545  | **printf**             | Implement a printf function type.                     | Use template literal types and conditional logic.  |
| 553  | **Deep object to unique** | Convert a deeply nested object to a unique object.| Use recursive conditional types.                  |
| 651  | **Length of String 2** | Get the length of a string type.                      | Use template literal types and conditional logic.  |
| 730  | **Union to Tuple**     | Convert a union to a tuple type.                      | Use conditional types and type guards.            |
| 847  | **String Join**        | Join elements of an array into a string.              | Use template literal types and conditional logic.  |
| 915  | **UnionToIntersection** | Convert a union to an intersection type.            | Use conditional types and type guards.            |
| 956  | **DeepPick**           | Pick nested properties of an object type.             | Use recursive conditional types.                  |
| 1248 | **Currying**           | Implement a currying function type.                   | Use conditional types and type guards.            |
| 1290 | **Pinia**              | Create a Pinia store type.                            | Use mapped types and conditional logic.           |
| 1383 | **Camelize**           | Convert a kebab case string to camel case.            | Use template literal types and conditional logic.  |
| 1558 | **Partial Application** | Implement partial application.                      | Use conditional types and type guards.            |
| 2059 | **Drop String**        | Drop a string from another string.                    | Use template literal types and conditional logic.  |
| 2590 | **GroupBy**            | Group elements of an array by a key.                  | Use mapped types and conditional logic.           |
| 2759 | **RequiredByKeys**     | Make specific properties of an object required.      | Use mapped types and conditional logic.           |
| 2822 | **Split**              | Split a string into an array.                         | Use template literal types and conditional logic.  |
| 2828 | **ClassPublicKeys**    | Get public keys of a class type.                      | Use mapped types and conditional logic.           |
| 2857 | **IsRequiredKey**      | Check if a key is required in an object type.         | Use mapped types and conditional logic.           |
| 2949 | **ObjectFromEntries**  | Create an object from an array of key-value pairs.   | Use mapped types and conditional logic.           |
| 3000 | **ShiftTuple**         | Shift elements of a tuple to the left.                | Use tuple manipulation and conditional logic.     |
| 3104 | **TupleFilter**        | Filter elements of a tuple based on a condition.      | Use conditional types and type guards.            |
| 3760 | **ChainableValidation** | Create a chainable validation type.                 | Use conditional types and type guards.            |
| 4037 | **IsPalindrome**       | Check if a string is a palindrome.                   | Use template literal types and conditional logic.  |
| 4400 | **FlipMap**            | Flip the keys and values of an object type.           | Use mapped types and conditional logic.           |
| 4926 | **ValidateTuple**      | Validate elements of a tuple based on a condition.    | Use conditional types and type guards.            |
| 5181 | **Mutable Keys**       | Make specific properties of an object mutable.       | Use mapped types and conditional logic.           |
| 5202 | **MatchLength**        | Match the lengths of two arrays.                     | Use conditional types and type guards.            |
| 5423 | **Intersection**       | Create an intersection type.                         | Use conditional types and type guards.            |
| 5804 | **RecursiveTypes**     | Create recursive types.                              | Use conditional types and type guards.            |
| 6000 | **SubTypeInference**   | Infer the subtype of a supertype.                    | Use conditional types and type guards.            |
| 6141 | **Binary to Decimal**  | Convert a binary number to a decimal number.         | Use template literal types and conditional logic.  |
| 6600 | **ValidateArguments**  | Validate arguments of a function type.               | Use conditional types and type guards.            |
| 6900 | **ExtractType**        | Extract a specific type from a union.                | Use conditional types and type guards.            |
| 7200 | **IntersectionInference** | Infer the intersection of two types.               | Use conditional types and type guards.            |
| 7258 | **Object Key Paths**   | Get all possible paths in an object type.            | Use recursive conditional types.                  |
| 7500 | **CircularTypes**      | Create circular types.                               | Use conditional types and type guards.            |
| 8000 | **RecursiveFunction**  | Create a recursive function type.                    | Use conditional types and type guards.            |
| 8600 | **DeepEqualityCheck**  | Check if two types are deeply equal.                 | Use conditional types and type guards.            |
| 8804 | **Two Sum**            | Find two numbers that sum to a specific value.       | Use conditional types and type guards.            |
| 9155 | **ValidDate**          | Check if a string is a valid date.                   | Use template literal types and conditional logic.  |
| 9160 | **Assign**             | Assign properties of one object to another.          | Use mapped types and conditional logic.           |
| 9384 | **Maximum**            | Get the maximum value of an array.                   | Use conditional types and type guards.            |
| 9775 | **Capitalize Nest Object Keys** | Capitalize nested object keys.                  | Use recursive conditional types.                  |
| 13580 | **Replace Union**      | Replace a union with another type.                   | Use conditional types and type guards.            |
| 14080 | **FizzBuzz**           | Implement the FizzBuzz game.                         | Use conditional types and type guards.            |
| 14188 | **Run-length encoding** | Encode a string using run-length encoding.         | Use template literal types and conditional logic.  |
| 15260 | **Tree path array**    | Generate an array of paths in a tree.                | Use recursive conditional types.                  |
| 19458 | **SnakeCase**          | Convert a camel case string to snake case.           | Use template literal types and conditional logic.  |
| 25747 | **IsNegativeNumber**   | Check if a number type is negative.                  | Use conditional types and type guards.            |
| 28143 | **OptionalUndefined**  | Convert optional properties to undefined.            | Use mapped types and conditional logic.           |
| 30178 | **Unique Items**       | Get unique items from an array.                      | Use conditional types and type guards.            |
| 30575 | **BitwiseXOR**         | Perform a bitwise XOR operation.                     | Use conditional types and type guards.            |
| 31797 | **Sudoku**             | Solve a Sudoku puzzle.                               | Use recursion and conditional logic.              |
| 31824 | **Length of String 3** | Get the length of a string type.                      | Use template literal types and conditional logic.  |
| 32427 | **Unbox**              | Unbox a value from a box type.                        | Use conditional types and type guards.            |
| 32532 | **Binary Addition**    | Add two binary numbers.                              | Use recursion and conditional logic.              |
| 33763 | **Union to Object from key** | Convert a union to an object from a key.         | Use conditional types and type guards.            |
| 34286 | **Take Elements**      | Take elements from an array based on a condition.    | Use conditional types and type guards.            |



---

### Extreme Challenges

### Extreme Challenges

| ID    | Challenge                  | Description                                          | Hint                                               |
|-------|----------------------------|------------------------------------------------------|----------------------------------------------------|
| 17    | **Currying 1**             | Transform a function into a curried version.         | Use recursive types and function overloading.      |
| 5     | **Get Readonly Keys**      | Extract readonly keys from an object.                | Use conditional types and `Readonly` utility.      |
| 151   | **Query String Parser**    | Parse a query string into an object.                 | Use template literal types and recursion.          |
| 216   | **Slice**                  | Get a slice of an array type.                        | Use tuple manipulation and conditional types.      |
| 274   | **Integers Comparator**    | Compare two integer types.                           | Use conditional types and `extends`.               |
| 462   | **Currying 2**             | Advanced function currying.                          | Use conditional types and recursion.               |
| 476   | **Sum**                    | Compute the sum of two number types.                 | Use recursion and conditional types.               |
| 517   | **Multiply**               | Compute the product of two number types.             | Use recursion and addition types.                  |
| 697   | **Tag**                    | Create tagged types.                                 | Use intersection types and branding.               |
| 734   | **Inclusive Range**        | Generate inclusive range of numbers.                 | Use recursion and tuple manipulation.              |
| 741   | **Sort**                   | Sort a tuple of numbers.                             | Use recursion and comparison types.                |
| 869   | **DistributeUnions**       | Distribute union types over tuples.                  | Use distributive conditional types.                |
| 925   | **Assert Array Index**     | Ensure an index is valid for an array.               | Use conditional types and tuple length.            |
| 6228  | **JSON Parser**            | Parse JSON strings into types.                       | Use template literal types and recursion.          |
| 7561  | **Subtract**               | Subtract one number type from another.               | Use recursion and conditional types.               |
| 31447 | **CountReversePairs**      | Count reverse pairs in an array.                     | Use recursion and comparison types.                |
| 31997 | **Parameter Intersection** | Intersect parameters of multiple functions.          | Use intersection types and `Parameters` utility.   |
| 33345 | **Dynamic Route**          | Match dynamic routes in strings.                     | Use template literal types and pattern matching.   |


---

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/type-challenges/type-challenges.git
   cd type-challenges
   ```

2. **Choose a Challenge:** Select a challenge based on your preferred difficulty.

3. **Start Solving:** Write your solutions using TypeScript and test them thoroughly.

---

## Contributing

Contributions are welcome! If you have new ideas for challenges or improvements to existing ones, feel free to submit a pull request.

1. Fork the repository.
2. Create a branch for your contribution.
3. Submit a pull request with your changes.

---

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Type Challenges Repository](https://github.com/type-challenges/type-challenges)

---

Happy Coding! 🚀

