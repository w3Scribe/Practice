import { FC } from "react";

const Base: FC<BaseComponent> = ({ children, className, tag: Tag = "div" }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Base;
