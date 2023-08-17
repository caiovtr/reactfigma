import * as S from './styles'
import TVasco from "../../assets/vascoImg.jpeg"
import Astroworld from "../../assets/Astroworld.png"
export function List() {
  return (
    <>
      <S.Section>
        <img src={TVasco} alt="Time Vasco" />
        <p>
          Vasco encara o Atlético-MG pela 20ª Rodada do Brasileirão
        </p>
      </S.Section>
      <S.Section>
        <img src={Astroworld} alt="Astroworld" />
        <p>
          ASTROWORLD (2018)
        </p>
      </S.Section>
    </>
  )
}
