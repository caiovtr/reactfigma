import * as S from './styles'
import TVasco from "../../assets/vascoimg.png"
import PayVasco from "../../assets/payetvasco.jpg"
export function List() {
  return (
    <>
      <S.Section>
        <img src={TVasco} alt="Time Vasco" />
        <a href="https://ge.globo.com/futebol/times/vasco/">
        <p>
          Vasco encara o Atlético-MG pela <br></br> ﾠ20ª Rodada do Brasileirão
        </p>
        </a>
      </S.Section>
      <S.Section>
        <img src={PayVasco} alt="Payet" /> 
        <a href="https://ge.globo.com/futebol/times/vasco/noticia/2023/08/17/payet-assina-contrato-e-vasco-prepara-anuncio-do-novo-reforco.ghtml">
        <p>
        Dimitri Payet é o novo reforço <br></br> ﾠﾠdo Vasco da Gama
        </p>
      </a>
      </S.Section>
    </>
  )
}
