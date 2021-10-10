import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useAuth } from '../../hooks/useAuth'
import * as S from './styles'

type FormData = {
  name: string
  password: string
}

export function SignIn() {
  const { signIn } = useAuth()
  const { push } = useHistory()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  async function handleOnSubmit({ name, password }: FormData) {
    try {
      await signIn({ name, password })
  
      push('/home')
    } catch (error) {
      toast.error('Falha na autenticação, verifique seus dados')
      reset()
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.Form onSubmit={handleSubmit(handleOnSubmit)} autoComplete='off'>
          <S.WrapperInput>
            <S.Input type='text' placeholder='Seu nome' {...register('name', { required: true })} />
            {errors.name && <S.Error>Nome obrigatório</S.Error>}

            <S.Input type='password' placeholder='Sua senha' {...register('password', { required: true })} />
            {errors.password && <S.Error>Senha obrigatória</S.Error>}
          </S.WrapperInput>

          <S.Button type='submit'>Entrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}