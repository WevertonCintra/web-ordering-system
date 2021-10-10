import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  border-left: 3.5px solid var(--blue-dark);
  margin-top: 2rem;
  width: 400px;
  display: flex;
  flex-direction: column;
`

export const OrderDateDetails = styled.div`
  margin: 0.1rem 0;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    border-top: 0.5px solid var(--blue-dark);
  }
`

export const Title = styled.span`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
`

export const Text = styled.span`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
`

export const ButtonHistory = styled(Link)`
  background: 0;
  margin-right: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue-dark);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  transition: filter 0.2ms;

  &:hover {
    filter: brightness(0.5);
  }
`

export const ButtonLink = styled(Link)`
  background: var(--blue);
  border: 0;
  border-radius: 6px;
  margin-left: 1rem;
  height: 30px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-100);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
