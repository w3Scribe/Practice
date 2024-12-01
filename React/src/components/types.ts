import { FC, ReactNode } from "react";

declare global {
  interface BaseProps {
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
  }

  type WithSubComponents<T extends string> = FC<BaseProps> & {
    [K in T as `${Capitalize<K>}`]: FC<BaseProps>;
  };
}

export {};
