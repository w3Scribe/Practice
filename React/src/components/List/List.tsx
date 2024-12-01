import { memo } from "react";
import Item from "./Item";

type Childs = "item";

const List: WithSubComponents<Childs> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

List.Item = memo(Item);

export default List;
