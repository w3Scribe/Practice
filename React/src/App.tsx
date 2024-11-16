import { FC , Fragment } from 'react';
import List from './components/list/List';

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Item>
          Item 1
        </List.Item>
      </List>
    </Fragment>
  );
};

export default App;