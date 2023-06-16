import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 1rem 2rem;
`

export const TotalItensContainer = styled.div`
  padding: 1.5rem;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`

export const TotalItem = styled(Item)`
  font-size: ${({ theme }) => theme.typography.text.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const ConfirmButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
