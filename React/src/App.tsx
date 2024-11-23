import { FC } from "react";
import List from "./component/list/list";

const App: FC = () => {
  return (
    <List className="bg-slate-900">
      <List.Item>list item</List.Item>
    </List>
  );
};

export default App;
