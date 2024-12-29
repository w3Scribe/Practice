import { ClassNameValue, twMerge } from "tailwind-merge";

type CN = (cl: ClassNameValue, ...clArgs: ClassNameValue[]) => string;

const cn: CN = (cl, ...clArgs) => {
  return twMerge(cl, clArgs);
};

export default cn; 


  