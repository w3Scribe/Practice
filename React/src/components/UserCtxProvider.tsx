import { createContext, ReactNode, useState, FC } from "react";

interface UserCtxProviderProps {
  children: ReactNode;
}

interface UserCtxType {
  name: string;
  updateUserName: (name: string) => void;
}

export const UserCtx = createContext<UserCtxType | null>(null);

const UserCtxProvider: FC<UserCtxProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");

  const updateUserName = (name: string) => {
    setUserName(name);
  };

  return (
    <UserCtx.Provider value={{ name: userName, updateUserName }}>
      {children}
    </UserCtx.Provider>
  );
};

export default UserCtxProvider;
