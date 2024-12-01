import { FC, ReactNode } from "react";

declare global {
  type ComponentProps = FC<{
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
  }>;

  type SubComponentsMap<T extends string> = {
    [K in T as `${Capitalize<K>}`]: ComponentProps;
  };

  type WithSubComponents<T extends string> = ComponentProps & SubComponentsMap<T>;
}

export {};
