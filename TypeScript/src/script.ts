type Original = {
  id: number;
  tags: string[];
  metadata: {
    active: boolean;
    scores: number[];
  };
};


type Partializer<T> = {
  [K in keyof T] ? : T[K] extends object ? Partializer<T[K]> : T[K];
}

type PartialOriginal = Partializer<Original>;