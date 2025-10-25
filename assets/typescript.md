## DeepReadOnly Utility Type

The following TypeScript code demonstrates a utility type `DeepReadOnly` that recursively makes all properties of an object type `readonly`. It also includes a helper type `IsObject` to determine if a type is an object.

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


type DeepReadOnly<T> = IsOject<T> extends true
  ? { readonly [K in keyof T]: DeepReadOnly<T[K]> }
  : T;

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