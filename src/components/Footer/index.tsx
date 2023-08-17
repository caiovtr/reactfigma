import * as S from "./styles"
import Twitter from "../../assets/Twitter.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://twitter.com/TravisScott" target="_blank">
      <img src={Twitter} alt="Twitter" />
      </a>
    </S.Footer>
  )
}