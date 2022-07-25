import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
