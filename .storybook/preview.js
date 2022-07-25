import { ThemeProvider } from "styled-components";
import { theme } from '../src/config/stylesGlobal/theme';
import { GlobalStyles } from '../src/config/stylesGlobal/global';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles theme={{...theme}}/>
    </ThemeProvider>
  )
]