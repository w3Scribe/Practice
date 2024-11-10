import { FC } from 'react';
import CounterCxtProvider from './components/CounterCxtProvider';
import Counter from './components/Counter';
import CounterForm from './components/CounterForm';

const App: FC = () => {
  return (
    <div>
      <CounterCxtProvider>
        <Counter/>
        <CounterForm/>
      </CounterCxtProvider>
    </div>
  );
};

export default App;