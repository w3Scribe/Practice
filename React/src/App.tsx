import { createContext, type FC, Fragment, useState } from "react";
import CompA from "./components/CompA";

export const CounterCxt = createContext<TCounterCtx>({
  count: 0,
  counterFn: () => {},
});

const App: FC = () => {
  const [count, setCount] = useState<CounterState>(0);

  const counterFn: TCounterFn = (action) => {
    switch (action.type) {
      case "Increment":
        setCount(action.payload ? count + action.payload : count + 1);
        break;
      case "Descrement":
        setCount(action.payload ? count - action.payload : count - 1);
        break;
      case "Reset":
        setCount(0);
        break;
      default:
        throw new Error("something went wrong !");
    }
  };
  
  return (
    <Fragment>
      <CounterCxt value={{ count, counterFn }}>
        <CompA />
      </CounterCxt>
    </Fragment>
  );
};
   
export default App;
