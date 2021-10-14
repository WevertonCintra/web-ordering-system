import { Switch, Redirect } from 'react-router-dom'

import { ReactRoute as Route } from './Route'
import { SignIn } from '../pages/SignIn'
import { ListOrders } from '../pages/ListOrders'
import { NewOrder } from '../pages/NewOrder'
import { NewClient } from '../pages/NewClient'
import { ListClients } from '../pages/ListClients'
import { NewOrderDate } from '../pages/NewOrderDate'
import { NotFoundPage } from '../pages/NotFoundPage'

export function Routes() {
  return (
    <Switch>
      <Route path='/session' component={SignIn} />
      <Route path='/' component={ListOrders} isPrivate exact />
      <Route path='/orders/new' component={NewOrder} isPrivate />
      <Route path='/clients/new' component={NewClient} isPrivate />
      <Route path='/clients' component={ListClients} isPrivate />
      <Route path='/orders/:id' component={NewOrderDate} isPrivate />
      <Route path='/404' component={NotFoundPage} />
      <Redirect from='*' to='/404' />
    </Switch>
  )
}
