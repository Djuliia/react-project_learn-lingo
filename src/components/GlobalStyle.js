import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    font-size: 16px;
    color: ${p => p.theme.colors.mainText};
    background-color: ${p => p.theme.colors.bg};
  }

 h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
      }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
    right: 40px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    width: 3px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
