import * as S from "./styles"
import Logo from "../../assets/logovasco.png"
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
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
        {
          user ? (
            <ul>
              <li>
                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          )
        }
      </S.NavBar>
    </S.Header>
  )
}