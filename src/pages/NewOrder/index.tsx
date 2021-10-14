import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import { Header } from '../../components/Header'
import * as S from './styles'

type FormData = {
  client_id: string
  created_date: Date
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

  async function handleOnSubmit({ client_id, created_date, delivery_date }: FormData) {
    try {
      const response = await api.post('/orders', { client_id, created_date, delivery_date })

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
      <Header />

      <S.Container>
        <S.Fieldset>
          <S.Title>Pedido</S.Title>

          <S.Form onSubmit={handleSubmit(handleOnSubmit)} autoComplete='off'>
            <S.WrapperContent>
              <S.Content>
                <S.Label>Data do pedido</S.Label>
                <S.InputDate type='date' {...register('created_date')} required />
              </S.Content>

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
            </S.WrapperContent>

            <S.Button type='submit'>Criar pedido</S.Button>
          </S.Form>
          </S.Fieldset>
      </S.Container>
    </S.Wrapper>
  )
}
