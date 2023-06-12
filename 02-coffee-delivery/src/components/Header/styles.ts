import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ShoppingButton = styled.button`
  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};
  border-radius: 6px;
  padding: 0.3rem;
`

