import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 3rem;
  width: 600px;
  display: flex;
  flex-direction: column;
`

export const ContainerTitle = styled.div`
  display: flex;
`

export const ContainerTitleName = styled.div`
  width: 300px;
`

export const ContainerTitleContact = styled.div`
  width: 200px;
`

export const Title = styled.span`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
`

export const Content = styled.div`
  margin-top: 2rem;
  width: 700px;
  display: flex;
  flex-direction: column;
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

export const ClientDetails = styled.div`
  border-top: 1px solid var(--gray-900);
  display: flex;
  line-height: 2rem;
`

export const ContainerTextName = styled.div`
  width: 300px;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ContainerTextContact = styled.div`
  width: 200px;
`

export const Text = styled.span`
  color: var(--gray-900);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
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
    margin-left: 4.5rem;
    width: 2rem;
    height: 2rem;
  }
`