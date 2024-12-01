import { type FC } from 'react';
import Base from '../Base';

const Item: FC<BaseProps> = ({ children, className }) => {
  return (
    <Base tag="li" className={className}>
      {children}
    </Base>
  );
};

export default Item;