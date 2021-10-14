import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import * as S from './styles'

type RouteParams = {
  id: string
}

type FormData = {
  delivery_date: string
}

export function NewOrderDate() {
  const { id } = useParams<RouteParams>()
  const { push } = useHistory()
  const { register, handleSubmit } = useForm<FormData>()

  async function handleModifyDateOrder({ delivery_date }: FormData) {
    try {
      await api.patch(`/orders/${id}/date`, { delivery_date })
      toast.success('data de entrega do pedido alterado com sucesso.')
      push('/home')
    } catch (error) {
      toast.error('Falha ao alterar a data de entrega do pedido.')
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.Form onSubmit={handleSubmit(handleModifyDateOrder)}>
          <S.LabelModal>Nova data para a entrega</S.LabelModal>
          <S.InputDate type='date' {...register('delivery_date')} required />
          <S.Options>
            <S.ButtonModal style={{ background: '#2dc653' }} type='submit'>Modificar data</S.ButtonModal>
            <S.ButtonModal style={{ background: '#FF1717' }} onClick={() => push('/home')}>Cancelar</S.ButtonModal>
          </S.Options>
        </S.Form>
      </S.Content> 
    </S.Container>
  )
}