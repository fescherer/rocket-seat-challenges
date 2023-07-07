import { styled } from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 800px;
  margin: auto;
  margin-top: 3rem;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors['base-span']};
`

export const MainLabel = styled.span`
  font-size: ${({ theme }) => theme.typography['2xl']};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  background: ${({ theme }) => theme.colors['base-input']};
  color: ${({ theme }) => theme.colors['base-text']};
  border-radius: 6px;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;

  height: 16.25rem;
`

export const ItemTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: baseline;
    gap: 0.5rem;
  }
`

export const ItemDescription = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
