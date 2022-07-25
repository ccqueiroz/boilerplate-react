import 'styled-components';

type Colors = {
  primaryColor: string;
  secondaryColor: string;
  white: string;
};

type Family = {
  default: string;
  secondary: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Sizes = {};

// eslint-disable-next-line @typescript-eslint/ban-types
type LetterSpacing = {};

type Media = {
  ltMedium: string;
};

type Font = {
  family: Family;
  sizes: Sizes;
  letterSpacing: LetterSpacing;
  media: Media;
};

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme{
    colors: Colors;
    font: Font;
  }
}
