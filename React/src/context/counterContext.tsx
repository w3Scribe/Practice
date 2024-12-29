import { createContext } from "react";

const CounterCxt = createContext<TCounterCtx>({
  count: 0,
  counterFn: () => {},
});

export default CounterCxt;
