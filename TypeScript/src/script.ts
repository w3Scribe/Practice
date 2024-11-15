interface User {
  id: number;           // Required
  name: string;         // Required
  email?: string;       // Optional
  age?: number;         // Optional
  address: {
    street: string;     // Required
    city?: string;      // Optional
  };
}

type ReqK<T> = {
  [K in keyof T]-?:
    T[K] extends Required<T>[K] ? T[K] extends object ? ReqK<T[K]> extends never ? K
    : K | ReqK<T[K]>
    : K
    : never;
}[keyof T];

type ReqKeys = ReqK<User>

const keys: ReqKeys = "id" 