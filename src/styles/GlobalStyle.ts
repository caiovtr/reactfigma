import { createGlobalStyle } from "styled-components"

import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  primary: "#2B75E2",
  secondary: "#FFC107",
  secondaryLight: "#605A5A",
  third: "#78909C",
  thirdLight: "#d9d9d9",
  black: "#000",
  white: "#fff",
  red: "FF0000"

}
