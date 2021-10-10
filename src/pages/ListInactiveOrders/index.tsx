import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FaArrowLeft } from 'react-icons/fa'

import { api } from '../../services/api'
import { Header } from '../../components/Header'
import * as S from './styles'

type OrderData = {
  id: string
  delivery_date: string
  status: boolean
}

export function ListInactiveOrders() {
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState<OrderData[]>([])
  const [ordersFiltered, setOrdersFiltered] = useState<OrderData[]>([])
  const { goBack } = useHistory()

  useEffect(() => {
    setLoading(true)
    api.get('/orders').then(response => setOrders(response.data))
    
    function getOrdersStatusFalse() {
      const filtered = orders.filter(order => order.status === false)
      return setOrdersFiltered(filtered)
    }

    getOrdersStatusFalse()
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
      <Header>
        <S.ButtonArrow title='voltar' onClick={goBack}>
          <FaArrowLeft />
        </S.ButtonArrow>
      </Header>

      <S.Container>
        <S.Title>Histórico de pedidos</S.Title>

        {ordersFiltered.length > 0
          ? <S.Content>
              {loading 
                ? <S.Text>carregando ...</S.Text> 
                : ordersFiltered.map(order => (
                    <S.OrderDateDetails key={order.id}>
                      <S.TextInactive>{formattedDate(order.delivery_date)}</S.TextInactive>
                      <S.ButtonLink to={`/orders/${order.id}`}>detalhes</S.ButtonLink>
                    </S.OrderDateDetails>
              ))}
            </S.Content>
          : <S.ContentTextInfo><S.TextInfo>nenhum pedido fechado</S.TextInfo></S.ContentTextInfo>
        }
      </S.Container>
    </S.Wrapper>
  )
}