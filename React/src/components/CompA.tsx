import { type FC, use, useState } from "react";
import { CounterCxt } from "../App";
import Button from "./button";

const CompA: FC = () => {
  const { count, counterFn } = use(CounterCxt);
  const [inputValue, setInputValue] = useState(count);

  return (
    <div className="flex flex-col gap-y-3">
      <h1>Counter Number : {count}</h1>
      <input
        type="text"
        placeholder="counter payload"
        onChange={(e) => setInputValue(+e.target.value)}
      />
      <Button payload={inputValue} fn={counterFn} type="Increment" />
      <Button payload={inputValue} fn={counterFn} type="Descrement" />
      <Button payload={inputValue} fn={counterFn} type="Reset" />
    </div>
  );
};

export default CompA;
