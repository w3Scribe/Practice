import { type FC, use } from "react";
import { ThemeContext } from "../App";

const CompA: FC = () => {
  const { theme, setTheme } = use(ThemeContext);

  function UpdateTheme() {
    setTheme("light");
  }

  return (
    <button
      onClick={() => UpdateTheme()}
      className="bg-amber-400 text-gray-900 cursor-pointer"
    >
      Update Theme Value -- {theme}
    </button>
  );
};

export default CompA;
