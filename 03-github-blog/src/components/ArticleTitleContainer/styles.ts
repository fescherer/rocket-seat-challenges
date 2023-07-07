import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: relative;
  color: ${({ theme }) => theme.colors['base-title']};
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  margin: auto;
  margin-top: -4rem;

  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['blue']};
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const IconContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 0.25rem;
`
