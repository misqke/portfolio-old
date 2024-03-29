import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Play', sans-serif;
  
}
a {
  text-decoration: none;
}
`;

export default GlobalStyles;
