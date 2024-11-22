interface Todo {
  title: string;
  description: string;
  completed: boolean;
  others: {
    a: string;
    b: number;
  };
}

type DeepReadonly<T> = T extends object ? {
  readonly [K in keyof T]: T[K];
} & Omit<T, K> : T extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>> : never;