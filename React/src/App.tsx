import { createContext, type FC } from 'react';

interface IApp {
 children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  setTheme: () => {},
})

const App: FC<IApp> = (props) => {
  return (
    <ThemeContext value={{ theme: "dark", setTheme : () => {}}}>
     {props.children}
    </ThemeContext>
  );
};

export default App;