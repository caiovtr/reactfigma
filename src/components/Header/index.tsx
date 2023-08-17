import * as S from "./styles"
import Logo from "../../assets/CactusJack.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <a href="https://droper.app/d/8/Travis_Scott_x_Nike_Air_Force_1_Cactus_Jack" target="_blank">
          <img src={Logo} alt="Cactus Jack" />
        </a>
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Álbuns</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}