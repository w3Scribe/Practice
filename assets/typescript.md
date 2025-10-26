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

