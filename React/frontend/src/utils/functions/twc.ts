import { JSX } from "react";

type Twc = {
  [K in keyof JSX.IntrinsicElements | (string & {})]?: string;
};

export const twc = <T extends Twc>(classes: T): T => classes;

export default twc;
