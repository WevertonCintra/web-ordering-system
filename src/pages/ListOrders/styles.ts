import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  background: var(--gray-100);
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
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

export const WrapperTextTotalStatusFalse = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`

export const ContainerTextTotalStatusFalse = styled.div`
  display: flex;
  align-items: center;
`

export const TextTotalStatusFalse = styled.span`
  color: var(--blue-dark-2);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
`

export const TextNumber = styled.span`
  color: var(--red);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
`

export const ContainerButtonsTop = styled.div`
  border-left: 1px solid var(--gray-400);
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-left: 0.6rem;
`

export const ButtonFilter = styled.button`
  background: var(--blue-dark-2);
  color: var(--gray-100);
  border: 0;
  border-radius: 3px;
  margin-left: 0.5rem;
  padding: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ButtonPDF = styled.button`
  color: var(--red);
  border: 0;
  background: 0;
  line-height: 0;
  transition: filter 0.2s;
  margin-right: 0.1rem;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    font-size: 2rem;
  }
`

export const ContainerLabel = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`

export const ContainerLabelClientName = styled.div`
  width: 250px;
`

export const ContainerLabelDate = styled.div`
  width: 170px;
`

export const ContainerLabelCity = styled.div`
  width: 150px;
`

export const Label = styled.label`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 1rem;
`

export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ContainerDetails = styled.div`
  border-left: 3.5px solid var(--blue-dark-2);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }
`

export const ContainerTextClientName = styled.div`
  width: 248px;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ContainerTextDateCreated = styled.div`
  width: 170px;
  display: flex;
`

export const ContainerTextDateDelivery = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`

export const ContainerTextCity = styled.div`
  width: 150px;
`

export const Text = styled.span`
  color: var(--gray-700);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 0.9rem;
`

export const TextIsAfter = styled.span`
  color: var(--red);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.9rem;
`

export const ButtonEdit = styled(Link)`
  background: 0;
  border: 0;
  transition: filter 0.2ms;
  margin-right: 1rem;

  &:hover {
    filter: brightness(0.5);
  }

  svg {
    color: var(--blue-dark);
    font-size: 1.1rem;
  }
`

export const ContainerButtons = styled.div`
  border-left: 1px solid var(--gray-400);
  display: flex;
  margin-left: 0.5rem;
`

export const Button = styled.button`
  color: var(--gray-100);
  border: 0;
  border-radius: 6px;
  margin-left: 0.5rem;
  height: 40px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
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
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
  }
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