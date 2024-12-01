import { type FC, Fragment } from "react";
import List from "./components/List/List";

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Item></List.Item>
      </List>
    </Fragment>
  );
};

export default App;
