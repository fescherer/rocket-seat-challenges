import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px 44px 6px 44px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ButtonChangeItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  width: 100px;
`

export const ButtonChangeItem = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  font-size: ${({ theme }) => theme.typography.button.m};
  padding: 0.5rem 1rem;
  border-radius: 6px;

  &:hover {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const Price = styled.span`
  font-size: ${({ theme }) => theme.typography.text.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: auto;
`

export const Separator = styled.div`
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  width: 100%;
  height: 1px;
`
