import { FC, ReactNode } from "react";

interface BaseType {
  children?: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
}

const BaseComponent: FC<BaseType> = ({ children, tag: Tag, className }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default BaseComponent;
