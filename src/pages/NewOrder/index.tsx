import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import * as S from './styles'

type FormData = {
  client_id: string
  delivery_date: Date
}

type UserData = {
  id: string
  name: string
  city: string
}

export function NewOrder() {
  const [users, setUsers] = useState<UserData[]>([])
  const { push } = useHistory()
  const { register, handleSubmit } = useForm<FormData>()

  useEffect(() => {
    api.get('/clients').then(response => setUsers(response.data))
  }, [])

  async function handleOnSubmit({ client_id, delivery_date }: FormData) {
    try {
      const response = await api.post('/orders', { client_id, delivery_date })

      if (response) {
        toast.success('Pedido criado!')
      }
  
      push('/home')
    } catch (error) {
      toast.error('Falha na criação do pedido, verifique os dados')
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Pedido</S.Title>

      <S.Form onSubmit={handleSubmit(handleOnSubmit)} autoComplete='off'>
        <S.Container>
          <S.Content>
            <S.Label>Data da entrega</S.Label>
            <S.InputDate type='date' {...register('delivery_date')} required />
          </S.Content>

          <S.Content>
            <S.Label>Cliente</S.Label>
            <S.Select {...register('client_id')} required >
              <S.Option hidden>selecione um cliente</S.Option>
              {users.map(user => (
                <S.Option key={user.id} value={user.id}>{user.name}</S.Option>
              ))}
            </S.Select>
          </S.Content>
        </S.Container>

        <S.Button type='submit'>Criar pedido</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}
