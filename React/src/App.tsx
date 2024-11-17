import { FC , Fragment } from 'react';
import List from './components/list/List';

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Item>
          <h1 className=''>Item 1</h1>
        </List.Item>
      </List>
    </Fragment>
  );
};

export default App;