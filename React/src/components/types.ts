import { FC, ReactNode } from "react";

declare global {
  type TComponentProps = FC<{
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
  }>;

  type TSubComponentsMap<T extends string> = {
    [K in T as `${Capitalize<K>}`]: TComponentProps;
  };

  type WithSubComponents<T extends string> = TComponentProps & TSubComponentsMap<T>;
}

export {};
