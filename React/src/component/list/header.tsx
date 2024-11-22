import { FC } from "react";
import Base from "../Base";

const Header: FC<BaseChild> = ({ children, className }) => {
  return (
    <Base tag="h1" className={className}>
      {children}
    </Base>
  );
};

export default Header;
