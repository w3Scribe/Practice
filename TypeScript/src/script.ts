type CamelStr<Str> = Str extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${CamelStr<Rest>}`
  : Str;


