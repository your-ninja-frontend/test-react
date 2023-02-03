import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlack};
}

#root {
  height: 100%;
}

.App {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
`;
