import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  button {
    cursor: pointer;
    border: 2px solid transparent;
    transition: opacity 0.3s ease;
  }

  button:focus {
    border: 2px solid #FFF
  }

  button:hover {
    opacity: 0.8;
  }

  body {
    width: 100%;
    background: ${(props) => props.theme.colors.BG.primary};
  }
`
