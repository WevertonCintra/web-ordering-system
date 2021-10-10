import styled from 'styled-components'
import ReactModal from 'react-modal'

export const Modal = styled(ReactModal)`
  box-shadow: 0px 3px 10px -5px rgba(54,54,54,0.86);
  background: var(--gray-100);
  border-radius: 0.5rem;
  margin: 5rem auto;
  padding: 3rem;
  height: 15rem;
  min-width: 25rem;
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-y: auto;
`