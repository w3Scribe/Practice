import { type FC } from 'react';
import { twc } from './utils';

const STYLE = twc({
  h1: 'text-center p-4 text-4xl font-bold text-blue-500',
  h2: 'text-center p-4 text-3xl font-bold text-blue-500',
});

const App: FC = () => {
  return (
    <section>
      <h1 className={`${STYLE.h1}`}>React TypeScript App</h1>
    </section>       
  );   
};        
  
export default App;