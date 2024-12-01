import { memo } from "react";
import Item from "./Item";

type TList = WithSubComponents<"item">;

const List: TList = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

List.Item = memo(Item);

export default List;
