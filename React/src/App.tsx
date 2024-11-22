import { FC, Fragment } from "react";
import List from "./component/list/list";

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Header className="bg-slate-900 text-slate-100 font-semibold p-5">Heading</List.Header>
        <List.Item>hello world</List.Item>
      </List>
      <ul className=""></ul>
    </Fragment>
  );
};

export default App;
