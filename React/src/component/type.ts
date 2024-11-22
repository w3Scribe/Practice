import { type ReactNode } from "react";

declare global {
  interface TBaseCoponent {
    children: ReactNode;
    tag: keyof JSX.IntrinsicElements;
    className: string;
  }

  interface TBaseItem{
    children : ReactNode
    className : string
  }
  
}

export {};
