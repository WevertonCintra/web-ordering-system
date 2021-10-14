import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  padding: 5rem;
  height: 92vh;
  width: 100vw;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelModal = styled.label`
  color: var(--blue-dark-2);
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
`

export const InputDate = styled.input`
  color: var(--gray-700);
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  height: 2.5rem;
  width: 200px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  outline: 0;

  &:focus {
    border: 1px solid var(--blue-dark);
  }
`

export const Options = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
`

export const ButtonModal = styled.button`
  color: var(--gray-100);
  border: 0;
  border-radius: 0.2rem;
  margin-top: 1rem;
  height: 2.5rem;
  width: 10rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  & + button {
    margin-left: 1rem;
  }
`