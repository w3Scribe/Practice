import { createContext, FC, ReactNode, useState } from "react";

interface ICounterCxtProvider {
  children: ReactNode;
}

interface CounterCtxType {
  count: number;
  setCount: (payload: number) => void;
}

export const CounterCtx = createContext<CounterCtxType>({
  count: 0,
  setCount() {},
});

const CounterCxtProvider: FC<ICounterCxtProvider> = (props) => {
  const [count, setCount] = useState<number>(0)

  const [cou]


  return <CounterCtx.Provider value={{count, setCount}}>
    {props.children}
  </CounterCtx.Provider>
};

export default CounterCxtProvider;
