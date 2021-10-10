import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TiDelete } from 'react-icons/ti'

import { api } from '../../services/api'
import * as S from './styles'

type ClientData = {
  id: string
  name: string
  phone: string
  city: string
}

export function ListClients() {
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<ClientData[]>([])
  const { push } = useHistory()

  useEffect(() => {
    setLoading(true)
    api.get('/clients').then(response => setClients(response.data))
    setLoading(false)
  }, [])

  async function handleDeleteClient(id: string) {
    try {
      await api.delete(`/clients/${id}`)
      toast.success('cliente removido com sucesso.')
      push('/home')
    } catch (error) {
      toast.error('Falha ao remover o cliente.')
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerTitle>
        <S.ContainerTitleName>
          <S.Title>Nome</S.Title>
        </S.ContainerTitleName>
        <S.ContainerTitleContact>
          <S.Title>Contato</S.Title>
        </S.ContainerTitleContact>
        <S.Title>Cidade</S.Title>
      </S.ContainerTitle>

      {clients.length > 0 
        ? <S.Content>
            {loading 
              ? <S.Text>carregando ...</S.Text> 
              : clients.map(client => (
                  <S.ClientDetails key={client.id}>
                    <S.ContainerTextName>
                      <S.Text>{client.name}</S.Text>
                    </S.ContainerTextName>
                    <S.ContainerTextContact>
                      <S.Text>{client.phone ? client.phone : 'sem contato'}</S.Text>
                    </S.ContainerTextContact>
                    {
                      client.city === 'local' 
                      ? <S.Text>cachoeirinha</S.Text>
                      : <S.Text>outra cidade</S.Text>
                    }
                    <S.ButtonDelete title='deletar cliente' onClick={() => handleDeleteClient(client.id)}>
                      <TiDelete />
                    </S.ButtonDelete>
                  </S.ClientDetails>
            ))}
          </S.Content>
        : <S.ContentTextInfo><S.TextInfo>nenhum cliente cadastrado</S.TextInfo></S.ContentTextInfo>
      }
    </S.Wrapper>
  )
}