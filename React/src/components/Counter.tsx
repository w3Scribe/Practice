import { FC, useReducer } from "react";

const CounterInitialState = {
  count: 0,
};

type CounterReducer = {
  (
    state: typeof CounterInitialState,
    action: {
      type: "INCREMENT" | "DECREMENT" | "RESET";
      payload?: (payloadNumber: number) => number;
    }
  ): typeof CounterInitialState;
};


const counterReducerFn: CounterReducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return { count: action.payload ? action.payload(state.count) : state.count + 1 };
    case "DECREMENT":
      return { count: action.payload ? action.payload(state.count) : state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}


const Counter: FC = () => {
  const [state, dispatch] = useReducer(counterReducerFn, CounterInitialState);

  return <div>
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
  </div>;
};

export default Counter;
