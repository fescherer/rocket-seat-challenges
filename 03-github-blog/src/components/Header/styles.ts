import { styled } from 'styled-components'

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors['base-profile']};
  color: ${({ theme }) => theme.colors['base-text']};
  position: relative;
  height: 100%;
  min-height: 18rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgEffect = styled.img`
  position: absolute;
`
