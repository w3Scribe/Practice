import { type FC } from "react";
import { twc } from "./utils";

const STYLE = twc({
  section:
    "grid place-items-center min-h-screen w-full text-center text-white font-extrabold xs:bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-red-500 xl:bg-purple-500 ml:bg-gray-700",
});

const App: FC = () => {
  return <section className={`${STYLE.section}`}>Hello, Tailwind CSS!</section>;
};

export default App;
    