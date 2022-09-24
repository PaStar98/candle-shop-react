import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  } 

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #dadada;
    margin-top: 100vh; // prevent display content on MainSlider content
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0; 
    width: 100%;       
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75); 
  }

  .animation-fadeinout {
    animation: fadein 300ms ease-in forwards, fadeout 350ms 5s ease-out forwards !important;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default GlobalStyles;
