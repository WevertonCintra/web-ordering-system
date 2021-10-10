import styled from 'styled-components'

export const Container = styled.div`
  background: var(--gray-100);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  box-shadow: 0px 13px 27px -5px rgba(50,50,93,0.25) , 0px 8px 16px -8px rgba(0,0,0,0.3) , 0px -6px 16px -6px rgba(0,0,0,0.025);
  border-radius: 0.5rem;
  height: 350px;
  width: 400px;
`

export const Form = styled.form`
  padding: 3rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const WrapperInput = styled.div`
  height: 50%;
  width: 100%;
` 

export const Input = styled.input`
  color: var(--gray-900);
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  padding: 1rem;
  height: 3rem;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;

  & + input {
    margin-top: 2rem;
  }
`

export const Button = styled.button`
  background: var(--blue);
  color: var(--gray-100);
  border: 0;
  border-radius: 0.5rem;
  margin-top: 32px;
  height: 3rem;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Error = styled.p`
  color: var(--red);
  margin: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
`