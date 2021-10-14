import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import { Header } from '../../components/Header'
import * as S from './styles'

type FormData = {
  name: string
  city: string
}

export function NewClient() {
  const { push } = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  async function handleOnSubmit({ name, city }: FormData) {
    try {
      const response = await api.post('/clients', { name, city })

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
      <Header />

      <S.Container>
        <S.Fieldset>
          <S.Title>Cliente</S.Title>

          <S.Form onSubmit={handleSubmit(handleOnSubmit)} autoComplete='off'>
            <S.WrapperContent>
              <S.Content>
                <S.Label>Nome</S.Label>
                <S.Input type='text' placeholder='nome do cliente' {...register('name', { required: true })} />
                {errors.name && <S.Error>Nome obrigatório</S.Error>}
              </S.Content>

              <S.Content>
                <S.Label>Cidade</S.Label>
                <S.Input type='text' placeholder='nome da cidade do cliente' {...register('city', { required: true })} />
                {errors.city && <S.Error>Cidade obrigatória</S.Error>}
              </S.Content>
            </S.WrapperContent>

            <S.Button type='submit'>Criar cliente</S.Button>
          </S.Form>
        </S.Fieldset>
      </S.Container>
    </S.Wrapper>
  )
}
