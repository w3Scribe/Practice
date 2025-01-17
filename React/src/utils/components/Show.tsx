import { type FC, Fragment, ReactNode } from "react";

interface IShow {
  when: unknown;
  children: ReactNode;
}

const Show: FC<IShow> = ({ when, children }) => {
  if (typeof when !== "boolean") {
    console.warn("Prop When should be boolean value.");
  }
  return <Fragment>{when === true && children}</Fragment>;
};

export default Show;
