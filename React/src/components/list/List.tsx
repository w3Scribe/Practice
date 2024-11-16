import { FC, ReactNode } from "react";
import BaseComponent from "../Base";
import Item from "./Item";

interface IList {
  children?: ReactNode;
  className?: string;
}

type ChildComponent = "item" ;

type UnionToRecord<U extends string> = {
  [K in U as `${Capitalize<K>}`]: FC<{
    children?: ReactNode;
    className?: string;
  }>;
};

type ListType = FC<IList> & UnionToRecord<ChildComponent>;

const List: ListType = (props) => {
  return (
    <BaseComponent tag="ul" className={props.className}>
      {props.children}
    </BaseComponent>
  );
};

List.Item = Item;

export default List;
