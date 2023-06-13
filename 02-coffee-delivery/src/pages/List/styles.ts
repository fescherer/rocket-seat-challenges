import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
  max-width: 580px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.xl};
  color: ${({ theme }) => theme.colors['base-title']};
`

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.text.l};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const imgDiv = styled.div`
  width: 476px;
  height: 360px;
  background-color: red;
`
