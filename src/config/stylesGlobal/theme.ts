import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {},
    letterSpacing: {},
    media: {
      ltMedium: '(max-width: 768px)',
    },
  },
};

export type ThemeInterface = typeof theme;
