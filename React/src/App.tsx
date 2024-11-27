import { Fragment, type FC } from 'react';
import List from './component/list/list';

const App: FC = () => {
  return (
    <Fragment>
      <List>
        <List.Item className="bg-slate-900">
          asdfad
        </List.Item>
      </List>
   </Fragment>
  );
};

export default App;