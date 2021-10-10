import styled from 'styled-components'

export const Wrapper = styled.fieldset`
  margin: 0 3rem;
`

export const Title = styled.legend`
  color: var(--blue-dark);
  margin-left: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`

export const Form = styled.form`
  padding: 3rem 0 0 2rem;
`

export const Container = styled.div`
  height: 7rem;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 2rem;
  }
`

export const Label = styled.label`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
`

export const InputName = styled.input`
  color: var(--gray-700);
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 1rem;
  height: 2.5rem;
  width: 300px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  outline: 0;

  &:focus {
    border: 1px solid var(--blue-dark);
  }
`

export const InputDate = styled.input`
  color: var(--gray-700);
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
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

export const Select = styled.select`
  background: 0;
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
  height: 2.5rem;
  width: 200px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  outline: 0;

  &:focus {
    border: 1px solid var(--blue-dark);
  }
`

export const Option = styled.option`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`

export const Button = styled.button`
  background: var(--blue-dark);
  color: var(--gray-100);
  border: 0;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  height: 3rem;
  width: 150px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Error = styled.p`
  color: var(--red);
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
`