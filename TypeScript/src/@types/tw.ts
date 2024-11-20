// COMMON TYPES
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
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
type FontWeight = 'bold' | 'normal';

// COLORS
type ColorPrefix = 'bg' | 'text' | 'border' | 'ring';
export type Color = `${ColorPrefix}-${ColorName}-${ColorShade}` | `${ColorPrefix}-${BaseColor}`;

// SPACING
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
  | 'overflow-auto'
  | 'overflow-clip'
  | 'overflow-visible'
  | 'overflow-scroll'
  | 'overflow-x-auto'
  | 'overflow-y-auto';

// FLEXBOX & GRID
type FlexGrid =
  | 'flex-row'
  | 'flex-col'
  | 'flex-wrap'
  | 'justify-center'
  | 'justify-start'
  | 'justify-end'
  | 'items-start'
  | 'items-center'
  | 'items-end'
  | 'content-start'
  | 'content-center'
  | 'content-end'
  | 'gap-4'
  | 'grid-cols-3'
  | 'grid-rows-3';

// TYPOGRAPHY
type Typography =
  | `text-${FontSize}`
  | `text-${FontWeight}`
  | 'leading-tight'
  | 'leading-loose'
  | 'tracking-tight'
  | 'tracking-wide'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';

// BACKGROUNDS
type Background =
  | `bg-${ColorName}-${ColorShade}`
  | 'bg-opacity-50'
  | 'bg-gradient-to-r'
  | 'from-blue-500'
  | 'via-red-500'
  | 'to-green-500'
  | 'bg-fixed'
  | 'bg-local'
  | 'bg-scroll'
  | 'bg-transparent';

// BORDERS
type Border =
  | 'border'
  | 'border-2'
  | 'border-4'
  | 'border-8'
  | `border-${ColorName}-${ColorShade}`
  | 'rounded'
  | 'rounded-lg'
  | 'rounded-full'
  | 'rounded-t'
  | 'rounded-b'
  | 'rounded-l'
  | 'rounded-r';

// SHADOWS
type Shadows =
  | 'shadow'
  | 'shadow-lg'
  | 'shadow-xl'
  | 'shadow-2xl'
  | 'shadow-inner'
  | 'shadow-outline'
  | 'shadow-none';

// FILTERS
type Filters = 'blur' | 'grayscale' | 'invert' | 'sepia' | 'saturate' | 'hue-rotate';

// TABLES
type Tables =
  | 'table'
  | 'table-auto'
  | 'table-fixed'
  | 'border-collapse'
  | 'border-separate'
  | 'table-caption'
  | 'table-row'
  | 'table-cell';

// TRANSITIONS & ANIMATIONS
type TransitionsAnimations =
  | 'transition-all'
  | 'transition-colors'
  | 'transition-opacity'
  | 'transition-shadow'
  | 'transition-transform'
  | 'duration-300'
  | 'ease-in-out'
  | 'ease-linear'
  | 'ease-in'
  | 'ease-out'
  | 'animate-spin'
  | 'animate-ping'
  | 'animate-pulse'
  | 'animate-bounce';

// TRANSFORMS
type Transforms =
  | 'transform'
  | 'scale-110'
  | 'rotate-45'
  | 'translate-x-1/2'
  | 'translate-y-1/2'
  | 'skew-x-12'
  | 'skew-y-12';

// INTERACTIVITY
type Interactivity =
  | 'cursor-pointer'
  | 'cursor-not-allowed'
  | 'select-none'
  | 'select-text'
  | 'select-all'
  | 'pointer-events-none'
  | 'pointer-events-auto';

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
  | Shadows
  | Filters
  | Tables
  | TransitionsAnimations
  | Transforms
  | Interactivity
  | SVG
  | Accessibility;

export type TailwindObject = {
  [key: string]: TailwindClass | TailwindClass[] as string;
};
