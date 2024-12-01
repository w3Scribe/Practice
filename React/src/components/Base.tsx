import { type FC } from "react";

const Base: FC<BaseProps> = ({ children, className, tag: Tag = "div" }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Base;
