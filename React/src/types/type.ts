import { Reducer } from "react";

declare global {
  // Define specific action types
  type CounterActionType = "increment" | "decrement" | "reset";

  interface CounterAction {
    type: CounterActionType;
  }

  interface TCounterState {
    readonly count: number;
  }

  // Make reducer type more specific
  type TCounterFn = Reducer<TCounterState, CounterAction>;
}

export {};
