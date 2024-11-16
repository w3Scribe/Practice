import { FC, ReactNode } from "react";
import BaseComponent from "../Base";

interface IItem {
  children?: ReactNode;
  className?: string;
}

const Item: FC<IItem> = (props) => {
  return (
    <BaseComponent tag="li" className={props.className}>
      {props.children}
    </BaseComponent>
  );
};

export default Item;
