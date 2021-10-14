import { Link } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'

import { useAuth } from '../../hooks/useAuth'
import Logo from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  const { signOut } = useAuth()

  return (
    <S.Container>
      <Link title='ir para home' to='/home'>
        <S.LogoImage src={Logo} />
      </Link>

      <S.WrapperButtons>
        <S.ButtonLink to='/orders/new'>Novo pedido</S.ButtonLink>
        <S.ButtonLink to='/clients/new'>Novo cliente</S.ButtonLink>
        <S.ButtonLink to='/clients'>Clientes</S.ButtonLink>

        <S.Button title='sair' onClick={signOut}>
          <FaPowerOff />
        </S.Button>
      </S.WrapperButtons>
    </S.Container>
  )
}