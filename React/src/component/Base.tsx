import { FC } from "react";

const Base: FC<TBaseCoponent> = ({ children, className, tag: Tag = "div" }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Base;
