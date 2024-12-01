import Item from "./Item";

type Childs = "item";

const List: WithSubComponents<Childs> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

List.Item = Item; 

export default List;
