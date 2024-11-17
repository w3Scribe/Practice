// COLORS
type BaseColor = 'current' | 'inherit' | 'transparent';

type ColorName =
  | 'white'
  | 'black'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

type ColorShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

type ColorPrefix = 'bg' | 'text' | 'border' | 'ring';

export type Color = `${ColorPrefix}-${ColorName}-${ColorShade}` | `${ColorPrefix}-${BaseColor}`;

// SPACING
type SpaceUnit = 'px' | 'rem' | '%';

type SpaceFloats = '0.5' | '1.5' | '2.5' | '3.5';

type SpaceInts =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96';

type SpaceFraction =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6';

type SpaceValue = SpaceFloats | SpaceInts | SpaceFraction | 'full' | 'auto';

type SpacingPrefix = 'p' | 'm';
type SpacingSuffix = 'x' | 'y' | 't' | 'r' | 'b' | 'l';

export type Spacing =
  | `${SpacingPrefix}-${SpaceValue}`
  | `${SpacingPrefix | 'space'}-${SpacingSuffix}-${SpaceValue}`;

// SIZING
type Sizing =
  | 'w-full'
  | 'h-full'
  | 'max-w-screen-md'
  | 'max-h-screen-lg'
  | `${'w' | 'h' | 'min-w' | 'min-h' | 'max-w' | 'max-h'}-${SpaceValue}`;

// LAYOUT
type Layout =
  | 'container'
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'hidden'
  | 'float-left'
  | 'float-right'
  | 'clear-both'
  | 'isolate'
  | 'overflow-hidden'
  | 'overscroll-contain';

// FLEXBOX & GRID
type FlexGrid =
  | 'flex-row'
  | 'flex-col'
  | 'flex-wrap'
  | 'justify-center'
  | 'items-start'
  | 'grid-cols-3'
  | 'gap-4';

// TYPOGRAPHY
type Typography =
  | 'text-xs'
  | 'text-lg'
  | 'font-bold'
  | 'leading-tight'
  | 'tracking-wide'
  | 'uppercase';

// BACKGROUNDS
type Background =
  | `bg-${ColorName}-${ColorShade}`
  | 'bg-opacity-50'
  | 'bg-gradient-to-r'
  | 'from-blue-500'
  | 'via-red-500'
  | 'to-green-500';

// BORDERS
type Border = 'border' | 'border-2' | `border-${ColorName}-${ColorShade}` | 'rounded-full';

// EFFECTS
type Effects = 'shadow' | 'shadow-lg' | 'opacity-75';

// FILTERS
type Filters = 'blur' | 'grayscale' | 'sepia';

// TABLES
type Tables = 'table' | 'table-auto' | 'table-fixed';

// TRANSITIONS & ANIMATIONS
type TransitionsAnimations = 'transition-all' | 'duration-300' | 'ease-in-out';

// TRANSFORMS
type Transforms = 'transform' | 'scale-110' | 'rotate-45';

// INTERACTIVITY
type Interactivity = 'cursor-pointer' | 'select-none' | 'pointer-events-none';

// SVG
type SVG = 'fill-current' | 'stroke-current';

// ACCESSIBILITY
type Accessibility = 'sr-only' | 'not-sr-only';

// COMBINED TYPE
export type TailwindClass =
  | Color
  | Spacing
  | Sizing
  | Layout
  | FlexGrid
  | Typography
  | Background
  | Border
  | Effects
  | Filters
  | Tables
  | TransitionsAnimations
  | Transforms
  | Interactivity
  | SVG
  | Accessibility;

export type TailwinndObject = {
  [key: string]: TailwindClass;
};
