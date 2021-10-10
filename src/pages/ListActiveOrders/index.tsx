import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../services/api'
import * as S from './styles'

type OrderData = {
  id: string
  delivery_date: string
  status: boolean
}

export function ListActiveOrders() {
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState<OrderData[]>([])
  const [ordersFiltered, setOrdersFiltered] = useState<OrderData[]>([])

  useEffect(() => {
    setLoading(true)
    api.get('/orders').then(response => setOrders(response.data))
    
    function getOrdersStatusTrue() {
      const filtered = orders.filter(order => order.status === true)
      return setOrdersFiltered(filtered)
    }

    getOrdersStatusTrue()
    setLoading(false)
  }, [orders])

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
      <S.Container>
        <S.Title>Entregas</S.Title>
        <S.ButtonHistory to={`/orders/history`}>histórico de pedidos</S.ButtonHistory>
      </S.Container>
      
      {ordersFiltered.length > 0
        ? <S.Content>
            {loading
              ? <S.Text>carregando ...</S.Text>
              : ordersFiltered.map(order => (
                  <S.OrderDateDetails key={order.id}>
                    <S.Text>{formattedDate(order.delivery_date)}</S.Text>
                    <S.ButtonLink to={`/orders/${order.id}`}>detalhes</S.ButtonLink>
                  </S.OrderDateDetails>
            ))}
          </S.Content>
        : <S.Content><S.Text>nenhum pedido ativo</S.Text></S.Content>
      }
    </S.Wrapper>
  )
}