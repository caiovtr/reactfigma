import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 47%;
    width: 52%; 
    padding: 0.5rem;
  }

  p{
    font-size: xx-large;
    color: ${colors.white};
  }

  a{
    text-decoration: none;
  }

  @media (max-width: 810px){
    flex-direction: column;
    p{
      font-size: large;
    } 
    img{
      width: 51%;
      height: 35%;
    }
  }
  @media (max-width: 650px){
    flex-direction: column;
    p{
      font-size: medium;
    } 
    img{
      height: 20%;
      width: 50%;
    }
  }
`
