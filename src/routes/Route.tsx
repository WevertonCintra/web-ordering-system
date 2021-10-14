import { ComponentType } from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface ReactRouteProps extends RouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function ReactRoute({ isPrivate = false, component: Component, ...rest }: ReactRouteProps) {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{
            pathname: isPrivate ? '/session' : '/',
            state: { from: location }
          }} />
        )
      }}
    />
  )
}
