interface Details {
  name: string;
  age: number;
  location: string;
  other: {
    email: string;
    phone: string;
    hobbies: {
      name: string;
      duration: number;
    };
  };
}

type DeepReadonly<T> = T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T;


type Test = DeepReadonly<Details>;
