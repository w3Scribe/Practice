import { FC } from "react";
import List from "./component/list/list";

const App: FC = () => {
  return (
    <div className="p-5 bg-slate-900">
      <List>
        <List.Item className="bg-slate-900 bg-slate-900">
          list item
        </List.Item>
      </List>
    </div>
  );
};

export default App;
