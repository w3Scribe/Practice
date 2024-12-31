import { motion } from 'motion/react';
import { type FC , Fragment } from 'react';
const App: FC = () => {
  return (
    <Fragment>
      <motion.div animate={{ x: 100 }} transition={{ duration: 1 }} className='bg-amber-400 size-28'>
        <h1>React Motion</h1>
        <p>React Motion is a library for animations in React.</p>
      </motion.div>
    </Fragment>
  );
};

export default App;