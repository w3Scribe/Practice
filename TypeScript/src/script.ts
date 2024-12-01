type Exclude<T extends unknown, U extends T | PropertyKey | unknown = T> = T extends U ? never : T;

type MixedTypes = 'apple' | 'banana' | 1 | 2 | (() => void) | { key: string } | false;

type Test1 = Exclude<MixedTypes, 'apple' | 'banana'>; // 'apple' | 'orange'
type Test2 = Exclude<MixedTypes, 1 | 2>; // 'apple' | 'banana' | (() => void) | { key: string } | false
type Test3 = Exclude<MixedTypes, false>; // 'apple' | 'banana' | 1 | 2 | (() => void) | { key: string }
type Test4 = Exclude<MixedTypes, (() => void) | { key: string }>; // 'apple' | 'banana' | 1 | 2 | false

type Test5 = Exclude<MixedTypes, string> // false | {key: string;} | 1 | 2 | (() => void)
type Test6 = Exclude<MixedTypes, string | number> // false | {key: string;} | (() => void)
type Test7 = Exclude<MixedTypes, string | number | boolean> // {key: string;} | (() => void)
type Test8 = Exclude<MixedTypes, Function> // {key: string;}