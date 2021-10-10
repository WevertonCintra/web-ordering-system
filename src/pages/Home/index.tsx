import { useRouteMatch, Link, Switch, Route, Redirect } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'

import { useAuth } from '../../hooks/useAuth'
import { Header } from '../../components/Header'
import { ListActiveOrders } from '../ListActiveOrders'
import { NewOrder } from '../NewOrder'
import { NewClient } from '../NewClient'
import { ListClients } from '../ListClients'
import Logo from '../../assets/logo.svg'
import * as S from './styles'

export function Home() {
  const { signOut } = useAuth()
  const { path, url } = useRouteMatch()

  return (
    <S.Container>
      <Header>
        <Link title='ir para home' to='/home'>
          <S.LogoImage src={Logo} />
        </Link>

        <S.WrapperButtons>
          <S.ButtonLink to={`${url}/orders/new`}>Novo pedido</S.ButtonLink>
          <S.ButtonLink to={`${url}/clients/new`}>Novo cliente</S.ButtonLink>
          <S.ButtonLink to={`${url}/clients`}>Clientes</S.ButtonLink>

          <S.Button title='sair' onClick={signOut}>
            <FaPowerOff />
          </S.Button>
        </S.WrapperButtons>
      </Header>

      <S.Content>
        <Switch>
          <Route exact path={path}>
            <ListActiveOrders />
          </Route>

          <Route path={`${path}/orders/new`}>
            <NewOrder /> 
          </Route>

          <Route path={`${path}/clients/new`}>
            <NewClient /> 
          </Route>

          <Route path={`${path}/clients`}>
            <ListClients />
          </Route>

          <Redirect from='*' to='/404' />
        </Switch>
      </S.Content>
    </S.Container>
  )
}