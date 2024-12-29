// src/components/CompA.tsx
import { type FC, use, useState } from "react";

import cn from "../lib/cn";
import Button from "./button";
import CounterCxt from '../context/counterContext';

const CompA: FC = () => {
  const { count, counterFn } = use(CounterCxt);
  const [inputValue, setInputValue] = useState<number>(count);

  return (
    <div className={cn("flex", "flex-col", "gap-y-3")}>
      <h1>Counter Number: {count}</h1>
      <input
        type="number"
        placeholder="Counter payload"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className={cn("p-2", "border", "border-gray-300", "rounded bg-amber-400", 'bg-purple-600 text-white')}
      />
      <Button payload={inputValue} fn={counterFn} type="Increment" />
      <Button payload={inputValue} fn={counterFn} type="Decrement" />
      <Button payload={inputValue} fn={counterFn} type="Reset" />
    </div>
  );
};

export default CompA;
