import { type FC } from "react";
import { twc } from "./utils";

const STYLE = twc({
  section:
    "grid place-items-center min-h-screen w-full m-phone:bg-green-600 phone:bg-amber-600 m-tab:bg-purple-600 lap:bg-rose-600 desk:bg-teal-600 text-center text-white font-extrabold",
});

const App: FC = () => {
  return <section className={`${STYLE.section}`}>Hello, Tailwind CSS!</section>;
};

export default App;
