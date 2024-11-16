import { FC, Fragment } from "react";
import List from "./components/list/List";

const App: FC = () => {
  const Fruits: string[] = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <Fragment>
      <List>
        <List.Header>Fruits</List.Header>
        {Fruits.map((fruit, index) => (
          <List.Item key={index}>{fruit}</List.Item>
        ))}
        <List.Footer>Total: {Fruits.length}</List.Footer>
      </List>
    </Fragment>
  );
};

export default App;
