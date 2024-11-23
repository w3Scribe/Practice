import { FC, Fragment } from "react";
import List from "./component/list/list";

const App: FC = () => {
  return (
    <Fragment>
      <List className="bs-slate-900">
        <List.Item>list item</List.Item>
      </List>
    </Fragment>
  );
};

export default App;
