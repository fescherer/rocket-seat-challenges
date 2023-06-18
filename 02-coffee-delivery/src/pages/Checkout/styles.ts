import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-family: ${({ theme }) => theme.fontFamily.Baloo};
  font-size: ${({ theme }) => theme.typography.title.xs};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
