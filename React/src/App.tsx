import { type FC, Fragment } from "react";
import List from "./components/List/List";

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Item className="bg-amber-400 text-black underline p-4">
          list name
        </List.Item>
      </List>
    </Fragment>
  );
};

export default App;
