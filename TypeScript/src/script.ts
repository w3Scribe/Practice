type TypeAlchemist<T> = {
  [P in keyof T]: T[P] extends infer Type
    ? Type extends object
      ? Type extends any[]
        ? "array"
        : TypeAlchemist<Type>
      : Type extends string
        ? "string"
        : Type extends number
          ? "number"
          : Type extends boolean
            ? "boolean"
            : Type extends undefined
              ? "undefined"
              : Type extends null
                ? "null"
                : never
    : never;
};

type Original = {
  name: string;
  age?: number;
  isActive: boolean;
  hobbies: string[];
  address: {
    city: string;
    zip: number | undefined;
  };
};

type Result = TypeAlchemist<Original>;
