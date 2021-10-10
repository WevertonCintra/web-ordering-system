import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

export const ButtonArrow = styled.button`
  background: 0;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.2);
  }

  svg {
    color: var(--gray-100);
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Container = styled.div`
  padding: 2rem 5rem;
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
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
  color: var(--blue-dark);
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: underline overline var(--gray-400);
`

export const Text = styled.span`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
`

export const TextInactive = styled.span`
  color: var(--red);
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
`

export const ContentTextInfo = styled.div`
  border-left: 3.5px solid var(--blue-dark);
  margin-top: 2rem;
  width: 600px;
  display: flex;
  flex-direction: column;
`
export const TextInfo = styled.span`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
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
