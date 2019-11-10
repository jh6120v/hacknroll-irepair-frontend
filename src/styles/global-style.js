import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
  html, body {
    height: auto;
    font-size: 16px;
    font-family: 'Noto Sans TC', sans-serif;
    color: #1d1d1f;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    background: #ff6f89;
    background: -moz-linear-gradient(-45deg,  #ff6f89 0%, #ff9478 100%);
    background: -webkit-linear-gradient(-45deg,  #ff6f89 0%,#ff9478 100%);
    background: linear-gradient(135deg,  #ff6f89 0%,#ff9478 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6f89', endColorstr='#ff9478',GradientType=1 );
  }
  #app {
    display: flex;
    height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
