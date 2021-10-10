import styled from 'styled-components'

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

export const TextStatusTrue = styled.span`
  color: var(--green);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`

export const TextStatusFalse = styled.span`
  color: var(--red);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`

export const Div = styled.div`
  content: '';
  border: 0.5px solid var(--gray-300);
  margin: 0 1rem;
  height: 1.5rem;
`

export const ButtonCloseOrder = styled.button`
  background: 0;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    color: var(--red);
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const ButtonOpenOrder = styled.button`
  background: 0;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    color: var(--green);
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const ButtonEdit = styled.button`
  background: 0;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    color: var(--blue);
    margin-left: 2rem;
    width: 1.5rem;
    height: 1.2rem;
  }
`

export const ButtonDelete = styled.button`
  background: 0;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    color: var(--red);
    margin-left: 5rem;
    width: 2rem;
    height: 2rem;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.span`
  color: var(--blue-dark);
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: underline overline var(--gray-400);
`

export const Content = styled.div`
  margin-top: 3rem;
`

export const ContainerLabel = styled.div`
  display: flex;
`

export const ContainerLabelDate = styled.div`
  width: 200px;
`

export const ContainerLabelClientName = styled.div`
  width: 200px;
`

export const ContainerLabelClientDate = styled.div`
  width: 180px;
`

export const Label = styled.label`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
`

export const OrderDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
`

export const ContainerText = styled.div`
  display: flex;
`

export const ContainerTextDate= styled.div`
  width: 200px;
`

export const ContainerTextClientName = styled.div`
  width: 200px;
`

export const ContainerTextClientDate = styled.div`
  width: 180px;
`

export const Text = styled.span`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const InputDate = styled.input`
  color: var(--gray-700);
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  margin-top: 1rem;
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

export const Form = styled.form`
  
`