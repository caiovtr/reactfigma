import * as S from "./styles"
import Facebook from "../../assets/face.png"
import Instagram from "../../assets/insta.png"
import Youtube from "../../assets/youtube.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com/vascodagama" target="_blank">
      <img src={Facebook} alt="facebook" />
      </a>
      <a href="https://instagram.com/vascodagama" target="_blank">
      <img src={Instagram} alt="instagram" />
      </a>
      <a href="https://www.youtube.com/@vasco" target="_blank">
      <img src={Youtube} alt="youtube" />
      </a>
    </S.Footer>
  )
}