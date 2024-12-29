import { type FC } from 'react';

interface IButton {
   type: CounterActionType;
  fn: TCounterFn;
  payload: CounterState;
}

const Button: FC<IButton> = ({ type, fn, payload }) => {
  let data = type === "Reset" ? { type } : { type, payload };
  return <button onClick={() => fn(data)}>{type}</button>;
};

export default Button;