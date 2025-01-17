import { type FC , Fragment } from 'react';
import { Show } from './utils';

const App: FC = () => {
  return (
    <Fragment>
      <Show when={''} >
        <p>hello, world</p>
      </Show>
    </Fragment>
  );
};

export default App;