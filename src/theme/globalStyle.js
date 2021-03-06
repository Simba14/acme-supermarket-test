import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1, h3, h4, h5 {
    text-transform: uppercase;
  }
`
