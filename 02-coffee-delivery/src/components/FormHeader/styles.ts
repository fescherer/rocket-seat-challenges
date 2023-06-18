import styled from 'styled-components'

export const Header = styled.div<{ color: 'purple' | 'yellow' }>`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme, color }) =>
    color === 'purple' ? theme.colors['purple'] : theme.colors['yellow-dark']};
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
