type Len<T extends string, CharCount extends number[] = []> = 
  T extends `${string}${infer Rest}`? 
  Len<Rest, [...CharCount, 0]> : CharCount['length'];
    
type Compare<First extends number, Second extends number, Result extends number[] = []> = 
  First extends Second ? 'Equal' :
  Second extends Result['length'] ? 'Less' :
  First extends Result['length'] ? 'Greater' :
  Compare<First, Second, [...Result, 0]>;


type MaxChar<T extends string, Max extends number> = Compare<Len<T>, Max> extends 'Equal' | 'Greater' ? T : never;
