import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.button.g};
  gap: 0.5rem;
`

export const ItemContainer = styled.button<{ isSelected: boolean }>`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['purple']};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors['purple-light'] : theme.colors['base-button']};
  border-radius: 6px;
  flex: 1;
  padding: 1rem;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors['purple-dark'] : 'transparent'};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const Item = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};
`
