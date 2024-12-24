import { FC, Fragment, useReducer } from "react";

// Make state immutable
const initialState: Readonly<TCounterState> = {
  count: 0,
};

// Create type-safe action creators
const createAction = (type: CounterActionType): CounterAction => ({
  type,
});

const counterReducer: React.Reducer<TCounterState, CounterAction> = (
  prevState,
  action
) => {
  switch (action.type) {
    case "increment":
      return { count: prevState.count + 1 };
    case "decrement":
      return { count: prevState.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return prevState;
  }
};

const App: FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Fragment>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch(createAction("increment"))}>
        Increment
      </button>
      <button onClick={() => dispatch(createAction("decrement"))}>
        Decrement
      </button>
      <button onClick={() => dispatch(createAction("reset"))}>Reset</button>
    </Fragment>
  );
};

export default App;
