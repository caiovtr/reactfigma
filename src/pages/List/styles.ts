import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  img {
    height: 25%;
    width: 40%; 
  }

  p{
    padding-left: 1rem;
    font-size: xx-large;
    color: ${colors.white};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`
