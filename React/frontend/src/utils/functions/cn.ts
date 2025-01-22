import { ClassNameValue, twMerge } from "tailwind-merge";

type CN = (...args: ClassNameValue[]) => string;

const cn: CN = (...args) => {
  return twMerge(...args);
};

export default cn;
