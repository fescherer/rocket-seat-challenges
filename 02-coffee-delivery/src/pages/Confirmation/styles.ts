import styled from 'styled-components'

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors['yellow-dark']};
`

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1033px) {
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  padding: 1rem;
  border-radius: 6px 36px 6px 36px;
  gap: 1rem;
`

export const Item = styled.div`
  display: flex;
  gap: 1rem;
`

export const IconContainer = styled.div<{
  color: 'yellow-dark' | 'yellow' | 'purple'
}>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.white};
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const ContainerStreet = styled.div`
  display: flex;
  flex-direction: column;
`
