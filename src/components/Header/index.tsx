import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

export function Header({ children }: Props) {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}