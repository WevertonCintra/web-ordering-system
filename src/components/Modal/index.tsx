import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

import * as S from './styles'

interface ModalDefaultProps {
  children: ReactNode
  isOpen: boolean
  onRequestClose(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void
}

export function Modal({isOpen, onRequestClose, children}: ModalDefaultProps) {
  ReactModal.defaultStyles = {
    ...ReactModal.defaultStyles,
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(122, 122, 122, 0.685)'
    }
  }

  return (
    <S.Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      {children}
    </S.Modal>
  )
}
