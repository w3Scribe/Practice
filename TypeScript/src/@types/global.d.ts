type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

type Draft<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? Draft<T[K]> : T[K];
};

type Paths<T, P extends string = ''> = T extends Primitive
  ? ''
  : {
      [K in keyof T]: K extends string
        ? Exclude<T[K], []> extends object
          ? Paths<T[K], `${P}${K}.`>
          : `${P}${K}`
        : never;
    }[keyof T];
