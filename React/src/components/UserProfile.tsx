import { FC, useContext } from 'react';
import { UserCtx } from './UserCtxProvider';

const UserProfile: FC = () => {
  const { name } = useContext(UserCtx)!;
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default UserProfile;