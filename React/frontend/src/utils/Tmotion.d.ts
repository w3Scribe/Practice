type EasingFunction = (v: number) => number;
type EasingModifier = (easing: EasingFunction) => EasingFunction;
type BezierDefinition = readonly [number, number, number, number];
type EasingDefinition =
  | BezierDefinition
  | "linear"
  | "easeIn"
  | "easeOut"
  | "easeInOut"
  | "circIn"
  | "circOut"
  | "circInOut"
  | "backIn"
  | "backOut"
  | "backInOut"
  | "anticipate";

type GenericKeyframesTarget<V> = V[] | Array<null | V>;
  
type ResolvedKeyframesTarget = GenericKeyframesTarget<number> | GenericKeyframesTarget<string>;