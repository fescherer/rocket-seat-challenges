import { styled } from 'styled-components'

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
`
