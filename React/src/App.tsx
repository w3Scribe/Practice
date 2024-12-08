import { type FC , Fragment, useTransition } from 'react';

const App: FC = () => {
  const [isPending, pendingTransition] = useTransition();

  function handleClick() {
    pendingTransition(() => {
      // Simulate a slow API call
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    });
  }

  return (
    <Fragment>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className='rounded-sm text-blue-500 block border-2 border-blue-700' />
        <button
          type="button"
          onClick={handleClick}
          disabled={isPending}
          className='text-white border-2 border-blue-500 bg-blue-500'
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
     </form>
    </Fragment>
  );
};

export default App;