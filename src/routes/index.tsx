import { Switch, Redirect } from 'react-router-dom'

import { ReactRoute as Route } from './Route'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { ListInactiveOrders } from '../pages/ListInactiveOrders'
import { Order } from '../pages/Order'
import { NotFoundPage } from '../pages/NotFoundPage'

export function Routes() {
  return (
    <Switch>
      <Route path='/' component={SignIn} exact />
      <Route path='/home' component={Home} isPrivate />
      <Route path='/orders/history' component={ListInactiveOrders} isPrivate />
      <Route path='/orders/:id' component={Order} isPrivate />
      <Route path='/404' component={NotFoundPage} />
      <Redirect from='*' to='/404' />
    </Switch>
  )
}
