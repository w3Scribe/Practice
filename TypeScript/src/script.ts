type Cloned = {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    city: string;
    zip: number;
  };
};

type SwapType<T> = 
  T extends string ? number : 
  T extends number ? string :
  T extends false ? true :
  T extends true ? false :
  T extends Array<infer U> ? Array<SwapType<U>> :
  T extends object ? { [K in keyof T]: SwapType<T[K]> } : T;


type Flipper<T extends object> = {
  [K in keyof T] : () => SwapType<T[K]>
}

type Flipped = Flipper<Cloned>;