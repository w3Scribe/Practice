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

type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

type ColorPrefix = 'bg' | 'text';

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

// Utility type for combining multiple classes
export type TailwindClass = Color | Spacing;


