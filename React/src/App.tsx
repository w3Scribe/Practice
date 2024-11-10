import { FC } from 'react';
import UserCtxProvider from './components/UserCtxProvider';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';

const App: FC = () => {
  return (
    <div>
      <UserCtxProvider>
        <UserProfile/>
        <UserForm/>
      </UserCtxProvider>
    </div>
  );
};

export default App;