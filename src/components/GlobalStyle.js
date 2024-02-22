import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

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
    font-family: 'Roboto';
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
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #D7E3FF;
    width: 3px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9EBBFF;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #407BFF;
  }
`;
