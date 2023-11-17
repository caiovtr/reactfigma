import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  height: 6rem;
  width:100%;
  background-color: ${colors.black};
  picture {
    img {
      height: 100%;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 2.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        font-size: large;
        text-decoration: none;
        color: ${colors.white };
      }
    }
    li:hover {
      background-color: ${colors.secondaryLight};
    }
  }
`