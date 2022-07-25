import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store, StoreRedux } from '../../../config/store/store';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { theme } from '../../../config/stylesGlobal/theme';
import { GlobalStyles } from '../../../config/stylesGlobal/global';

interface RenderWithProvidersInterface {
  ui: React.ReactElement;
  renderOptions?: Omit<RenderOptions, 'queries'>;
  storeMock?: StoreRedux;
}

interface WrapperInterface {
  children: React.ReactElement;
}

const RenderWithProviders = ({ ui, storeMock = store, renderOptions = {} }: RenderWithProvidersInterface) => {
  const Wrapper = ({ children }: WrapperInterface) => {
    return (
      <StyledComponentProvider theme={theme}>
        <GlobalStyles theme={{ ...theme }} />
        <Provider store={storeMock}>{children}</Provider>);
      </StyledComponentProvider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
export * from '@testing-library/react';
export default RenderWithProviders;
