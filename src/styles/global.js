import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
html, body, #root{
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoting: antialiased !important;
  font-family: 'Montserrat', sans-serif;
  background: #181818;
  color: #fff;
}
`;
export default GlobalStyled;
