import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NumberContainer = styled.div`
  display: flex;

  width: 100%;
  gap: 0.5rem;
`

export const AdressContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-subtitle']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
