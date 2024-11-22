import type { FC, ReactNode } from "react";
import Item from "./item";
import Header from "./header";

type ComponentChilds = ["Item","Header"];

type IList = {
  children?: ReactNode;
  className?: string;
};

const List: FC<IList> & BaseChildList<ComponentChilds> = ({
  children,
  className,
}) => {
  return <ul className={className}>{children}</ul>;
};

List.Item = Item;
List.Header = Header


export default List;
