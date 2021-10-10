import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import * as S from './styles'

type FormData = {
  name: string
  phone: string
  city: string
}

export function NewClient() {
  const { push } = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  async function handleOnSubmit({ name, phone, city }: FormData) {
    try {
      const response = await api.post('/clients', { name, phone, city })

      if (response) {
        toast.success('Cliente criado!')
      }
  
      push('/home')
    } catch (error) {
      toast.error('Falha na criação do cliente, verifique os dados')
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Cliente</S.Title>

      <S.Form onSubmit={handleSubmit(handleOnSubmit)} autoComplete='off'>
        <S.Container>
          <S.Content>
            <S.Label>Nome</S.Label>
            <S.InputName type='text' placeholder='nome do cliente' {...register('name', { required: true })} />
            {errors.name && <S.Error>Nome obrigatório</S.Error>}
          </S.Content>

          <S.Content>
            <S.Label>Contato</S.Label>
            <S.InputNumber type='text' placeholder='(xx)xxxxx-xxxx' {...register('phone', { required: true })} />
            {errors.phone && <S.Error>Contato obrigatório</S.Error>}
          </S.Content>

          <S.Content>
            <S.Label>Cidade</S.Label>
            <S.Select {...register('city')}>
              <S.Option hidden>selecione uma cidade</S.Option>
              <S.Option value='local'>cachoeirinha</S.Option>
              <S.Option value='another_city'>outra cidade</S.Option>
            </S.Select>
          </S.Content>
        </S.Container>

        <S.Button type='submit'>Criar cliente</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}
