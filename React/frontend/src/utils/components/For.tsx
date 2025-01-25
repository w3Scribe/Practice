import { type FC, Fragment } from "react";

export type TElement = {
  key: string;
  value: unknown;
};

type TFor<T> = {
  DATA: T[];
  Element: FC<TElement>;
};

const For = <T,>({ DATA, Element }: TFor<T>) => {
  return (
    <Fragment>
      {DATA.map((value, index) => (
        <Element key={index.toString()} value={value} />
      ))}
    </Fragment>
  );
};

export default For;
