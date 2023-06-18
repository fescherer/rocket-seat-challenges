import styled from 'styled-components'

type IconType = {
  bg: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
  max-width: 36.25rem;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.xl};
  color: ${({ theme }) => theme.colors['base-title']};
`

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.text.l};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Icon = styled.div<IconType>`
  padding: 0.5rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ bg, theme }) => theme.colors[bg]};
`

export const ImgSplash = styled.img`
  @media (max-width: 900px) {
    display: none;
  }
`
