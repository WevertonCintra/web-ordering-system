import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { format, isAfter } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { BsPencilSquare } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import { FaFilePdf } from 'react-icons/fa'

import { api } from '../../services/api'
import { useConfirmDialog } from '../../hooks/useConfirmDialog'
import { DownloadPDF } from '../../components/DownloadPDF'
import { Header } from '../../components/Header'
import * as S from './styles'

type OrderData = {
  id: string
  created_date: string
  delivery_date: string
  status: boolean
  status_delivery: boolean
  status_paid: boolean
  client: {
    name: string
    city: string
  }
}

type TotalFalse = {
  totalStatus: number
  totalStatusDelivery: number
  totalStatusPaid: number
}

export function ListOrders() {
  const [loading, setLoading] = useState(false)
  const [filterDate, setFilterDate] = useState(false)
  const [orders, setOrders] = useState<OrderData[]>([])
  const [totalFalse, setTotalFalse] = useState<TotalFalse>()
  const { openConfirmDialog } = useConfirmDialog()

  useEffect(() => {
    setLoading(true)
    getOrdersDelivery()
    getTotalOrders()
    setLoading(false)
  }, [])

  async function getOrdersDelivery() {
    const response = await api.get('/orders/delivery')

    if (!response.data) {
      toast.info('Ocorreu um erro na busca dos pedidos.')
    }

    setOrders(response.data)
  }

  async function getOrdersCreated() {
    const response = await api.get('/orders/created')

    if (!response.data) {
      toast.info('Ocorreu um erro na busca dos pedidos.')
    }

    setOrders(response.data)
  }

  async function getTotalOrders() {
    const response = await api.get('/orders/total')
    setTotalFalse(response.data)
  }

  async function handleModifyStatusOrder(id: string, newStatus: boolean) {
    try {
      const status = !newStatus
      
      await api.patch(`/orders/${id}/status`, { status })

      let updateOrder = orders.find(order => order.id === id) as OrderData 

      if (updateOrder.id === id) {
        updateOrder.status = status
      }
      
      // setOrders([ updateOrder, ...orders.filter(order => order.id !== id)])
      getOrdersDelivery()
    } catch (error) {
      toast.error('Falha ao alterar o status do pedido.')
    }
  }

  async function handleModifyStatusDeliveryOrder(id: string, newStatus: boolean) {
    try {
      const status_delivery = !newStatus
      
      await api.patch(`/orders/${id}/status-delivery`, { status_delivery })

      let updateOrder = orders.find(order => order.id === id) as OrderData 

      if (updateOrder.id === id) {
        updateOrder.status_delivery = status_delivery
      }
      
      // setOrders([ updateOrder, ...orders.filter(order => order.id !== id)])
      getOrdersDelivery()
    } catch (error) {
      toast.error('Falha ao alterar o status do pedido.')
    }
  }

  async function handleModifyStatusPaidOrder(id: string, newStatus: boolean) {
    try {
      const status_paid = !newStatus
      
      await api.patch(`/orders/${id}/status-paid`, { status_paid })

      let updateOrder = orders.find(order => order.id === id) as OrderData 

      if (updateOrder.id === id) {
        updateOrder.status_paid = status_paid
      }
      
      // setOrders([ updateOrder, ...orders.filter(order => order.id !== id)])
      getOrdersDelivery()
    } catch (error) {
      toast.error('Falha ao alterar o status do pedido.')
    }
  }

  async function handleDeleteOrder(id: string) {
    openConfirmDialog('Tem certeza que deseja deletar o pedido?', async () => {
      try {
        await api.delete(`/orders/${id}`)

        toast.success('pedido removido com sucesso.')

        setOrders(orders.filter(order => order.id !== id))
      } catch (error) {
        toast.error('Falha ao remover o pedido.')
      }
    })
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

  function compareDate(date: string) {
    return isAfter(new Date(date), new Date())
  }
  
  function handleFilterDateDelivery() {
    setFilterDate(false)
    getOrdersDelivery()
  }

  function handleFilterDateCreated() {
    setFilterDate(true)
    getOrdersCreated()
  }

  return (
    <S.Wrapper>
      <Header />

      <S.Container>
        <S.ContainerTitle>
          <S.Title>Pedidos</S.Title>

          <S.WrapperTextTotalStatusFalse>
            <S.ContainerTextTotalStatusFalse>
              <S.TextTotalStatusFalse>Não finalizados:</S.TextTotalStatusFalse>
              <S.TextNumber>{totalFalse?.totalStatus}</S.TextNumber>
            </S.ContainerTextTotalStatusFalse>

            <S.ContainerTextTotalStatusFalse>
              <S.TextTotalStatusFalse>Não entregues:</S.TextTotalStatusFalse>
              <S.TextNumber>{totalFalse?.totalStatusDelivery}</S.TextNumber>
            </S.ContainerTextTotalStatusFalse>

            <S.ContainerTextTotalStatusFalse>
              <S.TextTotalStatusFalse>Não pagos:</S.TextTotalStatusFalse>
              <S.TextNumber>{totalFalse?.totalStatusPaid}</S.TextNumber>
            </S.ContainerTextTotalStatusFalse>
          </S.WrapperTextTotalStatusFalse>
        </S.ContainerTitle>

        <S.ContainerLabel>
          <S.ContainerLabelClientName>
            <S.Label>Cliente</S.Label>
          </S.ContainerLabelClientName>
          <S.ContainerLabelDate>
            <S.Label>Data do pedido</S.Label>
          </S.ContainerLabelDate>
          <S.ContainerLabelDate>
            <S.Label>Data da entrega</S.Label>
          </S.ContainerLabelDate>
          <S.ContainerLabelCity>
            <S.Label>Cidade</S.Label>
          </S.ContainerLabelCity>

          <S.ContainerButtonsTop>
            {filterDate
              ? <S.ButtonFilter onClick={() => handleFilterDateDelivery()}>filtrar por data de entrega</S.ButtonFilter>
              : <S.ButtonFilter onClick={() => handleFilterDateCreated()}>filtrar por data de criação</S.ButtonFilter>
            }

            <S.ButtonPDF onClick={() => DownloadPDF(orders)}>
              <FaFilePdf />
            </S.ButtonPDF>
          </S.ContainerButtonsTop>
        </S.ContainerLabel>
      
        {orders.length > 0
          ? <S.Content>
              {loading
                ? <S.Text>carregando ...</S.Text>
                : orders.map(order => (
                    <S.ContainerDetails key={order.id}>
                      <S.ContainerTextClientName>
                        <S.Text>{order.client.name}</S.Text>
                      </S.ContainerTextClientName>
                      <S.ContainerTextDateCreated>
                        <S.Text>{formattedDate(order.created_date)}</S.Text>
                      </S.ContainerTextDateCreated>
                      <S.ContainerTextDateDelivery>
                        {compareDate(order.delivery_date)
                          ? <S.Text>{formattedDate(order.delivery_date)}</S.Text>
                          : <S.TextIsAfter>{formattedDate(order.delivery_date)}</S.TextIsAfter>
                        }
                        <S.ButtonEdit title='alterar data' to={`/orders/${order.id}`}>
                          <BsPencilSquare />
                        </S.ButtonEdit>
                      </S.ContainerTextDateDelivery>
                      <S.ContainerTextCity>
                        <S.Text>{order.client.city}</S.Text>
                      </S.ContainerTextCity>
                      
                      <S.ContainerButtons>
                        {order.status === true 
                          ? <S.Button onClick={() => handleModifyStatusOrder(order.id, order.status)} style={{ background: '#2dc653' }}>Finalizado</S.Button>
                          : <S.Button onClick={() => handleModifyStatusOrder(order.id, order.status)} style={{ background: '#FF1717' }}>Não finalizado</S.Button>
                        }
                        {order.status_delivery === true 
                          ? <S.Button onClick={() => handleModifyStatusDeliveryOrder(order.id, order.status_delivery)} style={{ background: '#2dc653' }}>Entregue</S.Button>
                          : <S.Button onClick={() => handleModifyStatusDeliveryOrder(order.id, order.status_delivery)} style={{ background: '#FF1717' }}>Não entregue</S.Button>
                        }
                        {order.status_paid === true 
                          ? <S.Button onClick={() => handleModifyStatusPaidOrder(order.id, order.status_paid)} style={{ background: '#2dc653' }}>Pago</S.Button>
                          : <S.Button onClick={() => handleModifyStatusPaidOrder(order.id, order.status_paid)} style={{ background: '#FF1717' }}>Não pago</S.Button>
                        }
                        <S.ButtonDelete title='deletar pedido' onClick={() => handleDeleteOrder(order.id)}>
                          <TiDelete />
                        </S.ButtonDelete>
                      </S.ContainerButtons>
                    </S.ContainerDetails>
              ))}
            </S.Content>
          : <S.ContentTextInfo><S.TextInfo>nenhum pedido</S.TextInfo></S.ContentTextInfo>
        }
      </S.Container>
    </S.Wrapper>
  )
}
