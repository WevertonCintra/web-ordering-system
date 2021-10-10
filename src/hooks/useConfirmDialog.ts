import { useContext } from 'react'
import { ConfirmDialogContext, ConfirmDialogContextData } from '../contexts/ConfirmDialogContext'

export function useConfirmDialog(): ConfirmDialogContextData {
  const context = useContext(ConfirmDialogContext)

  return context
}