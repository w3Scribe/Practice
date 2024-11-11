import { useReducer, useState } from "react";

enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

type Action =
  | { type: ActionType.INCREMENT; payload: number }
  | { type: ActionType.DECREMENT; payload: number }
  | { type: ActionType.RESET };

const initialState = 0;

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + action.payload;
    case ActionType.DECREMENT:
      return Math.max(0, state - action.payload);
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  const [step, setStep] = useState<number>(1);

  function incrementFn() {
    dispatch({ type: ActionType.INCREMENT, payload: step });
  }

  function decrementFn() {
    dispatch({ type: ActionType.DECREMENT, payload: step });
  }
  
  function resetFn() {
    dispatch({ type: ActionType.RESET });
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={incrementFn}>INCREMENT</button>
        <button onClick={decrementFn}>DECREMENT</button>
        <button onClick={resetFn}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
