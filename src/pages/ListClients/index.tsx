import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { TiDelete } from 'react-icons/ti'

import { api } from '../../services/api'
import { Header } from '../../components/Header'
import * as S from './styles'

type ClientData = {
  id: string
  name: string
  city: string
}

export function ListClients() {
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<ClientData[]>([])

  useEffect(() => {
    setLoading(true)
    api.get('/clients').then(response => setClients(response.data))
    setLoading(false)
  }, [])

  async function handleDeleteClient(id: string) {
    try {
      await api.delete(`/clients/${id}`)
      toast.success('cliente removido com sucesso.')
      api.get('/clients').then(response => setClients(response.data))
    } catch (error) {
      toast.error('Falha ao remover o cliente.')
    }
  }

  return (
    <S.Wrapper>
      <Header />

      <S.Container>
        <S.WrapperContent>
          <S.ContainerTitle>
            <S.ContainerTitleName>
              <S.Title>Nome</S.Title>
            </S.ContainerTitleName>
            <S.ContainerTitleCity>
              <S.Title>Cidade</S.Title>
            </S.ContainerTitleCity>
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
                        <S.ContainerTextCity>
                          <S.Text>{client.city}</S.Text>
                        </S.ContainerTextCity>

                        <S.ButtonDelete title='deletar cliente' onClick={() => handleDeleteClient(client.id)}>
                          <TiDelete />
                        </S.ButtonDelete>
                      </S.ClientDetails>
                ))}
              </S.Content>
            : <S.ContentTextInfo><S.TextInfo>nenhum cliente cadastrado</S.TextInfo></S.ContentTextInfo>
          }
        </S.WrapperContent>
      </S.Container>
    </S.Wrapper>
  )
}