declare global {
  type CounterState = number

  type CounterActionType = "Increment" | "Descrement" | "Reset";

  type CounterAction =
    | {
        type: Exclude<CounterActionType, "Reset">;
        payload: CounterState;
      }
    | {
        type: Extract<CounterActionType, "Reset">;
      };

  type TCounterFn = ( Action: CounterAction) => void;

  type TCounterCtx = {
    count: CounterState;
    counterFn: TCounterFn;
  };
}

export {};
