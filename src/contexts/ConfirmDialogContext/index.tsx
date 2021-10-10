import { createContext, ReactNode, useState, useRef } from 'react'

import { Modal } from '../../components/Modal'
import * as S from './styles'

interface Props {
  children: ReactNode
}

export interface ConfirmDialogContextData {
  openConfirmDialog(message: string, onSubmit: () => void): void
}

export const ConfirmDialogContext = createContext({} as ConfirmDialogContextData)

export const ConfirmDialogProvider = ({ children }: Props) => {
  const submitButton = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  function openConfirmDialog(message: string, onSubmit: () => void) {
    setIsOpen(true)
    setMessage(message)

    setTimeout(() => {
      submitButton.current?.addEventListener('click', () => handleSubmit(onSubmit))
    }, 300)
    
    return () => { submitButton.current?.removeEventListener('click', () => handleSubmit(onSubmit)) }
  }

  function handleSubmit(onSubmit: () => void) {
    onSubmit()
    handleRequestClose()
  }

  function handleRequestClose() {
    setIsOpen(false)
    setMessage('')
  }

  return (
    <ConfirmDialogContext.Provider value={{ openConfirmDialog }}>
      {children}

      <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
        <S.Container>
          <span>{message}</span>
          <S.Options>
            <S.Button style={{ background: '#2dc653' }} ref={submitButton}>Confirmar</S.Button>
            <S.Button style={{ background: '#FF1717' }} onClick={handleRequestClose}>Cancelar</S.Button>
          </S.Options>
        </S.Container>
      </Modal>
    </ConfirmDialogContext.Provider>
  )
}
