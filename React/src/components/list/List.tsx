import { FC, ReactNode } from "react";

// Base Component with shared structure
interface BaseComponentProps {
  children?: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
}

const BaseComponent: FC<BaseComponentProps> = ({
  children,
  tag: Tag,
  className,
}) => {
  return <Tag className={className}>{children}</Tag>;
};

// Define List components using BaseComponent
interface ListType {
  children?: ReactNode;
}

const List: FC<ListType> & {
  Item: FC<{ children?: ReactNode }>;
  Header: FC<{ children?: ReactNode }>;
  Footer: FC<{ children?: ReactNode }>;
} = ({ children }) => {
  return <ul>{children}</ul>;
};

List.Item = ({ children }) => (
  <BaseComponent tag="li">{children}</BaseComponent>
);

List.Header = ({ children }) => (
  <BaseComponent tag="h1" className="list-header">
    {children}
  </BaseComponent>
);

List.Footer = ({ children }) => (
  <BaseComponent tag="h1" className="list-footer">
    {children}
  </BaseComponent>
);

export default List;
