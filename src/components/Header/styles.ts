import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: var(--blue);
  padding: 0 5rem;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: contain;
`

export const WrapperButtons = styled.div`
  display: flex;
`

export const ButtonLink = styled(Link)`
  color: var(--gray-100);
  background: var(--gray-900);
  border: 0;
  border-radius: 8px;
  margin-left: 1rem;
  height: 2.5rem;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`

export const Button = styled.button`
  color: var(--gray-100);
  background: 0;
  border: 0;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.2);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`