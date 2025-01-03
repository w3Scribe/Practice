type Len<T extends string, CharCount extends number[] = []> = 
  T extends `${string}${infer Rest}`? 
  Len<Rest, [...CharCount, 0]> : CharCount['length'];
    
type Compare<First extends number, Second extends number, Result extends number[] = []> = 
  First extends Second ? 'Equal' :
  First extends Result['length'] ? 'Less' :
  Second extends Result['length'] ? 'Greater' :
  Compare<First, Second, [...Result, 0]>;

type Test = Compare<2, 3>;