import { FC, useReducer, Reducer } from "react";

type State = { count: number };

type Action =
  | { type: "INCREMENT"; payload?: number }
  | { type: "DECREMENT"; payload?: number }
  | { type: "RESET" };

const initialState: State = { count: 0 };

const counterReducerFn: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (action.payload ?? 1) };
    case "DECREMENT":
      return { count: state.count - (action.payload ?? 1) };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter: FC = () => {
  const [state, dispatch] = useReducer(counterReducerFn, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
