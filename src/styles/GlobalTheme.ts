import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export const GlobalTheme = createGlobalStyle`
  :root {
    --gray-900: #212529;
    --gray-800: #343a40;
    --gray-700: #495057;
    --gray-600: #6c757d;
    --gray-500: #adb5bd;
    --gray-400: #ced4da;
    --gray-300: #dee2e6;
    --gray-200: #e9ecef;
    --gray-100: #f8f9fa;

    --blue-dark: #0096C7;
    --blue: #00B4D8;
    --red: #FF1717;
    --green: #2dc653;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: 0;
  }

  ul {
    list-style: 0;
  }
`
