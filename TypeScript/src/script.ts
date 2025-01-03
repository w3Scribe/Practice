type Lenght<T extends string, CharCount extends number[] = []> = T extends `${string}${infer Rest}`
  ? Lenght<Rest, [...CharCount, 0]>
  : CharCount['length'];


type Compaare<First extends number, Second extends number, Result extends number[] = []> = 
  First extends Second ? 'Equal' : 
  First extends Result['length'] ? 'Less' : 
  Second extends Result['length'] ? 'Greater' :
  Compaare<First, Second, [...Result, 0]>;


type MaxChar<T extends string, Max extends number = 0> = Compaare<Lenght<T>, Max> extends 'Equal' | 'Less' ? T : never;
type MinChar<T extends string, Min extends number = 0> = Compaare<Lenght<T>, Min> extends 'Equal' | 'Greater' ? T : never;


type TestMax = MaxChar<'a' , 5>; // 'ccc'
type TestMin = MinChar<'ar' , 2>; // 'a'