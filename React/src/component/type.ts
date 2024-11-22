import type { FC, ReactNode } from "react";

declare global {
  interface BaseComponent {
    children?: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
  }

  interface BaseChild {
    children?: ReactNode;
    className?: string;
  }

  type BaseChildList<U extends string[]> = {
    [K in U[number] as `${Capitalize<K>}`]: FC<BaseComponent>;
  };
}

export {};
