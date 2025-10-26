## `DeepReadOnly<T>`: Recursively Make Objects Immutable

The `DeepReadOnly<T>` utility type recursively traverses an object and makes all of its properties `readonly`. This is useful for creating deeply immutable data structures at compile time, preventing accidental modifications.

### The `IsObject` Helper

To work correctly, `DeepReadOnly` needs to distinguish plain objects from other types like arrays, functions, or built-in objects (e.g., `Date`, `RegExp`). This is handled by the `IsObject` helper type.

```typescript
type IsOject<T extends unknown> =
  [T] extends [object] ?
  [T] extends [
    Function |
    any[] |
    Date |
    RegExp |
    WeakMap<any, any> |
    WeakSet<any> |
    Map<any, any> |
    Set<any> |
    Error
  ] ? false : true
  : false;
```

### The `DeepReadOnly<T>` Implementation

The `DeepReadOnly<T>` type uses `IsObject` to apply the `readonly` modifier conditionally. If the type `T` is a plain object, it maps over its keys (`K in keyof T`) and recursively applies `DeepReadOnly` to each property's type (`T[K]`). Otherwise, it returns the type unchanged.

```typescript
type DeepReadOnly<T> = IsOject<T> extends true
  ? { readonly [K in keyof T]: DeepReadOnly<T[K]> }
  : T;
```

### Usage Example

Here’s an example demonstrating its effect on a nested object structure.

```typescript
// Test cases
type A = DeepReadOnly<{
  a: {
    b: {
      c: string;
    };
    d: number[];
    e: () => void;
    f: Date;
    g: {
      h: {
        i: boolean;
      };
    };
  };
}>;

// Expected:
// type A = {
//   readonly a: {
//     readonly b: {
//       readonly c: string;
//     };
//     readonly d: readonly number[];
//     readonly e: () => void;
//     readonly f: Date;
//     readonly g: {
//       readonly h: {
//         readonly i: boolean;
//       };
//     };
//   };
// }
```

## `IsEq`: A Type for Strict Type Equality

The `IsEq<T1, T2>` utility type determines if two TypeScript types, `T1` and `T2`, are exactly the same. This is particularly useful for advanced type-level programming where you need to enforce strict type constraints.

### How It Works

It uses a clever trick with conditional types and function type assignability. The expression `(<U>() => U extends T ? 1 : 2)` creates a function type whose return type depends on a generic `U`. Two such function types are only assignable to each other if their generic constraints (`T1` and `T2`) are identical.

```typescript
type IsEq<T1, T2> =
  (<U>() => U extends T1 ? 1 : 2) extends
  (<U>() => U extends T2 ? 1 : 2)
    ? true
    : false;
```

### Usage Examples

Here are some examples demonstrating how `IsEq` behaves with different types.

```typescript
// Test cases
type T1 = IsEq<string, string>;      // ✅ true
type T2 = IsEq<string, number>;      // ❌ false
type T3 = IsEq<{ a: 1 }, { a: 1 }>;   // ✅ true
type T4 = IsEq<{ a: 1 }, { a: 2 }>;   // ❌ false
type T5 = IsEq<any, string>;         // ❌ false
type T6 = IsEq<never, never>;        // ✅ true
```

## `TupleToUnion<T>`: Converting Tuples to Union Types

In TypeScript, a tuple is an array with a fixed number of elements whose types are known. A union type, on the other hand, allows a value to be one of several types. Converting a tuple to a union of its element types is a powerful technique for creating more flexible and dynamic types.

### Why Convert a Tuple to a Union?

Imagine you have a tuple representing the allowed states of a component: `['loading', 'success', 'error']`. If you want to create a type that only accepts one of these string literals, you need a union: `'loading' | 'success' | 'error'`. This is where `TupleToUnion` comes in handy.

### Method 1: Indexed Access (`T[number]`)

This is the most direct, common, and idiomatic way to convert a tuple to a union. When you access a tuple type `T` with the `number` index, TypeScript creates a union of all the types of the elements in that tuple.

```typescript
// ✅ Clean, idiomatic, and instantly recognizable.
type TupleToUnion<T extends any[]> = T[number];
```

**How it works:** `T[number]` tells the compiler: "Give me the type of any element at any numeric index in `T`." For a tuple like `[string, number]`, the elements are at indices `0` (type `string`) and `1` (type `number`), so the resulting union is `string | number`.

### Method 2: Conditional Type with `Array<infer E>`

This approach uses a conditional type and the `infer` keyword to "extract" the element type from the `Array<T>` generic structure. It's more explicit and serves as a great example of how `infer` works.

```typescript
// ✅ Explicit and a great learning tool for `infer`.
type TupleToUnion2<T extends any[]> = T extends Array<infer E> ? E : never;
```

**How it works:**
1.  `T extends Array<infer E>` checks if `T` is compatible with the `Array` generic type.
2.  The `infer E` keyword tells TypeScript to automatically create a new type variable `E` and assign it the type of the array's elements.
3.  If the check passes, the conditional type returns `E` (the union of element types).
4.  If it fails, it returns `never`.

### Method 3: Conditional Type with `(infer E)[]`

This method is functionally identical to Method 2 but uses a different, more compact syntax. It's a common pattern for inferring element types from arrays.

```typescript
// ✅ Also idiomatic, a more compact syntax for the same logic.
type TupleToUnion3<T extends any[]> = T extends (infer E)[] ? E : never;
```

**How it works:** The logic is the same as Method 2. The `(infer E)[]` syntax is simply a shorthand for `Array<infer E>`. The choice between them is purely a matter of coding style.

### Usage Example

All three methods yield the exact same result, so the choice often comes down to style and readability. `TupleToUnion` is the most common for its brevity.

```typescript
// Define a sample tuple.
type MyTuple = [string, number, boolean];

// Convert the tuple to a union.
type MyUnion1 = TupleToUnion<MyTuple>;  // Result: string | number | boolean
type MyUnion2 = TupleToUnion2<MyTuple>; // Result: string | number | boolean
type MyUnion3 = TupleToUnion3<MyTuple>; // Result: string | number | boolean

// Example with string literals.
type StatusTuple = ['loading', 'success', 'error'];
type StatusUnion = TupleToUnion<StatusTuple>; // Result: 'loading' | 'success' | 'error'

function setStatus(status: StatusUnion) {
  // ...
}

setStatus('success'); // ✅ Valid
// setStatus('pending'); // ❌ Argument of type '"pending"' is not assignable to parameter of type 'StatusUnion'.
```

