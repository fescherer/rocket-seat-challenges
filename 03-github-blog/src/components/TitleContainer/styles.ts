import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
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

export const Image = styled.img`
  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 1rem;
  flex: 1;
`

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const LinkContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.colors['blue']};
`

export const Anchor = styled.a`
  color: ${({ theme }) => theme.colors['blue']};
  text-decoration: none;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.typography.xl};

  flex: 1;
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
