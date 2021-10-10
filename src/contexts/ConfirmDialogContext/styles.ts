import styled from 'styled-components'

export const Container = styled.div`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
`

export const Options = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  color: var(--gray-100);
  border: 0;
  border-radius: 0.2rem;
  height: 2.5rem;
  width: 8rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`