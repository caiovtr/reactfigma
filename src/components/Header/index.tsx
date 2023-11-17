import * as S from "./styles"
import Logo from "../../assets/logovasco.png"

export function Header() {
  return (
    <S.Header>
      <picture>
          <img src={Logo} alt="Logo Vasco" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Notícias</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}