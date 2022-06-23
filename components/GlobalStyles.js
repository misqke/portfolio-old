import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyles;
