import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderRedux } from 'react-redux';
import { store } from './config/store/store';
import App from './modules/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { theme } from './config/stylesGlobal/theme';
import { LoaderSuspense } from './components/Loader/LoaderSupense';
import { GlobalStyles } from './config/stylesGlobal/global';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledComponentProvider theme={theme}>
        <ProviderRedux store={store}>
          <Suspense fallback={<LoaderSuspense />}>
            <GlobalStyles theme={{ ...theme }} />
            <App />
          </Suspense>
          <Toaster position="top-right" />
        </ProviderRedux>
      </StyledComponentProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
