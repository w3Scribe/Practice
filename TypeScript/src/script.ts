// usage of is keyword in typescript
// typeof, instanceof, in, as, satisfies, is, type guards,,

// Min Length
type MinLength<T, L extends number> = T[] & { length: number } extends {
  length: infer N;
}
  ? N extends L
    ? T[]
    : never
  : never;

const greet = 'hello world';
