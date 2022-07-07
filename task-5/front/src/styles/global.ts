import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: #F8F8FB;
    color: #2b2d42;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  button {
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
  }
`;