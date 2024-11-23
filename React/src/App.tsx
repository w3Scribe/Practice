import { FC } from "react";
import List from "./component/list/list";

const Fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon"];

const App: FC = () => {
  return (
    <div className="p-5 bg-slate-900">
      <List>
        {Fruits.map((fruit, index) => (
          <List.Item key={index} className="text-white">
            {fruit}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
