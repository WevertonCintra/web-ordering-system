import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FaArrowLeft } from 'react-icons/fa'
import { IoLockClosed } from 'react-icons/io5'
import { BsPencilSquare } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'

import { api } from '../../services/api'
import { useConfirmDialog } from '../../hooks/useConfirmDialog'
import { Modal } from '../../components/Modal'
import { Header } from '../../components/Header'
import * as S from './styles'

type RouteParams = {
  id: string
}

type OrderData = {
  created_at: string
  delivery_date: string
  status: boolean
  client: {
    name: string
    phone: string
    city: string
  }
}

type FormData = {
  delivery_date: string
}

export function Order() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState<OrderData>()
  const { id } = useParams<RouteParams>()
  const { push, goBack } = useHistory()
  const { openConfirmDialog } = useConfirmDialog()
  const { register, handleSubmit } = useForm<FormData>()

  useEffect(() => {
    setLoading(true)
    api.get(`/orders/${id}`).then(response => setOrder(response.data))
    setLoading(false)
  }, [id])

  async function dialogDeleteOrder() {
    openConfirmDialog('Tem certeza que deseja deletar o pedido?', handleDeleteOrder)
  }

  async function dialogModifyStatusOrder() {
    openConfirmDialog('Tem certeza que deseja modificar o status do pedido?', handleModifyStatusOrder)
  }

  async function handleDeleteOrder() {
    try {
      await api.delete(`/orders/${id}`)
      toast.success('pedido removido com sucesso.')
      push('/home')
    } catch (error) {
      toast.error('Falha ao remover o pedido.')
    }
  }

  async function handleModifyStatusOrder() {
    try {
      if (order === undefined) return
      const status = !order.status
      const response = await api.patch(`/orders/status/${id}`, { status })

      if (!response) {
        toast.success('Falha ao alterar o status do pedido.')
        push('/home')
      }

      setOrder({ ...order, status })
      toast.success('status do pedido alterado com sucesso.')
      push('/home')
    } catch (error) {
      toast.error('Falha ao alterar o status do pedido.')
    }
  }

  async function handleModifyDateOrder({ delivery_date }: FormData) {
    try {
      if (order === undefined) return
      setOrder({ ...order, delivery_date })
      await api.patch(`/orders/date/${id}`, { delivery_date })
      toast.success('data de entrega do pedido alterado com sucesso.')
      push('/home')
    } catch (error) {
      toast.error('Falha ao alterar a data de entrega do pedido.')
    }
  }

  function formattedDate(date: string) {
    const [ year, month, day ] = date.substring(0, 10).split('-')

    const formatted = format(new Date(
      Number(year), (Number(month) - 1), Number(day)),
      "dd/MM/Y", 
      { locale: ptBR }
    )
    
    return formatted
  }

  return (
    <S.Wrapper>
      <Header>
        <S.ButtonArrow title='voltar' onClick={goBack}>
          <FaArrowLeft />
        </S.ButtonArrow>
      </Header>

      <S.Container>
        <S.ContainerTitle>
          <S.Title>Detalhes do pedido</S.Title>
          <S.ContainerButtons>
            {order?.status === true ?
              <>
                <S.TextStatusTrue>Pedido ativo</S.TextStatusTrue>
                <S.Div />
                <S.ButtonCloseOrder title='fechar pedido' onClick={dialogModifyStatusOrder}>
                  <IoLockClosed />
                </S.ButtonCloseOrder>
              </> :
              <>
                <S.TextStatusFalse>Pedido Inativo</S.TextStatusFalse>
                <S.Div />
                <S.ButtonOpenOrder title='retornar pedido' onClick={dialogModifyStatusOrder}>
                  <IoLockClosed />
                </S.ButtonOpenOrder>
              </>
            }
          </S.ContainerButtons>
        </S.ContainerTitle>
        
        <S.Content>
          <S.ContainerLabel>
            <S.ContainerLabelDate>
              <S.Label>data do pedido</S.Label>
            </S.ContainerLabelDate>
            <S.ContainerLabelDate>
              <S.Label>data da entrega</S.Label>
            </S.ContainerLabelDate>
            <S.ContainerLabelClientName>
              <S.Label>nome</S.Label>
            </S.ContainerLabelClientName>
            <S.ContainerLabelClientDate>
              <S.Label>contato</S.Label>
            </S.ContainerLabelClientDate>
            <S.ContainerLabelClientDate>
              <S.Label>cidade</S.Label>
            </S.ContainerLabelClientDate>
          </S.ContainerLabel>

          {loading 
            ? <S.Text>carregando ...</S.Text> 
            : <S.OrderDetails>
                <S.ContainerText>
                  <S.ContainerTextDate>
                    <S.Text>
                      {order?.created_at !== undefined && formattedDate(order?.created_at)}
                    </S.Text>
                  </S.ContainerTextDate>
                  <S.ContainerTextDate>
                    <S.Text>
                      {order?.delivery_date !== undefined && formattedDate(order?.delivery_date)}
                    </S.Text>
                    {order?.status === true &&
                      <S.ButtonEdit title='alterar data' onClick={() => setIsOpen(true)}>
                        <BsPencilSquare />
                      </S.ButtonEdit>
                    }
                  </S.ContainerTextDate>
                  <S.ContainerTextClientName>
                    <S.Text>{order?.client.name}</S.Text>
                  </S.ContainerTextClientName>
                  <S.ContainerTextClientDate>
                    <S.Text>{order?.client.phone ? order.client.phone : 'sem contato'}</S.Text>
                  </S.ContainerTextClientDate>
                  <S.Text>{order?.client.city === 'local' ? 'cachoeirinha' : 'outra cidade' }</S.Text>
                </S.ContainerText>
                <S.ButtonDelete title='deletar pedido' onClick={dialogDeleteOrder}>
                  <TiDelete />
                </S.ButtonDelete>
              </S.OrderDetails>
          }
        </S.Content>
      </S.Container>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <S.Form onSubmit={handleSubmit(handleModifyDateOrder)}>
          <S.Label>Alterar data entrega</S.Label>
          <S.InputDate type='date' {...register('delivery_date')} required />
          <S.Options>
            <S.Button style={{ background: '#2dc653' }} type='submit'>Confirmar</S.Button>
            <S.Button style={{ background: '#FF1717' }} onClick={() => setIsOpen(false)}>Cancelar</S.Button>
          </S.Options>
        </S.Form>
      </Modal>
    </S.Wrapper>
  )
}