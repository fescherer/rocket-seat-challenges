import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px 44px 6px 44px;
`
