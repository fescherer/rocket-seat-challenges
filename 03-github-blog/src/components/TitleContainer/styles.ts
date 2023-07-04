import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  z-index: 100;
  position: relative;
  color: yellow;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: auto;
  margin-top: -1rem;

  background: ${({ theme }) => theme.colors['base-profile']};
`
