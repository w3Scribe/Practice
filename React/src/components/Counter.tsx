import { FC, Reducer, useReducer, useState } from "react";

type Action =
  | { type: "INCREMENT" | "DECREMENT"; payload?: number }
  | { type: "RESET" };

const initialState = 0;

const counterReducerFn: Reducer<number, Action> = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ?? 1);
    case "DECREMENT":
      return state > 0 ? state - (action.payload ?? 1) : 0;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter: FC = () => {
  const [count, dispatch] = useReducer(counterReducerFn, initialState);
  const [countValue, setCountValue] = useState<number>(initialState);

  const handleIncrement = () => dispatch({ type: "INCREMENT", payload: countValue });
  const handleDecrement = () => dispatch({ type: "DECREMENT", payload: countValue });
  const handleReset = () => dispatch({ type: "RESET" });

  return (
    <div>
      <h1>Counter App</h1>
      <p>count: {count}</p>
      <div>
        <input
          type="number"
          value={countValue}
          onChange={(e) => setCountValue(Number(e.target.value))}
        />
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
