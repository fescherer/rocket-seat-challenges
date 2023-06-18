import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['yellow-dark']};
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.text.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const Description = styled.span`
  font-size: ${({ theme }) => theme.typography.text.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors['base-text']};
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
