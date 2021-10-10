import { ReactNode, createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { api } from '../services/api'

type Props = {
  children: ReactNode
}

type User = {
  id: string
  name: string
}

type AuthState = {
  token: string
  user: User
}

type SignInCredentials = {
  name: string
  password: string
}

export type AuthContextData = {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const { push } = useHistory()

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Saddlery:token')
    const user = localStorage.getItem('@Saddlery:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return {
        token, 
        user: JSON.parse(user)
      }
    }

    return {} as AuthState
  })

  async function signIn({ name, password }: SignInCredentials) {
    const response = await api.post('/session', { name, password })

    const { token, user } = response.data

    localStorage.setItem('@Saddlery:token', token)
    localStorage.setItem('@Saddlery:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }

  async function signOut() {
    localStorage.removeItem('@Saddlery:token')
    localStorage.removeItem('@Saddlery:user')

    setData({} as AuthState)
    
    push('/')
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}