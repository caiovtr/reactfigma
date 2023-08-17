import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
  /* Rodapé */
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.black};
  height: 3rem;
  img {
    height: 100%;
    padding: 0.4rem;
  }
`
