const Item: TComponentProps = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default Item;
