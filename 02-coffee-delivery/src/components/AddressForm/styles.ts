import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const NumberContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AdressContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
