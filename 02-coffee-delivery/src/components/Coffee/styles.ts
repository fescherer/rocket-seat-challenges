import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 6px 36px 6px 36px;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -3rem;
`

export const CaracteristicsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`

export const Caracteristic = styled.span`
  font-size: ${({ theme }) => theme.typography.other.tag};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.3rem 0.5rem;
  border-radius: 100rem;
  text-transform: uppercase;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CoffeeTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.title.s};
  font-family: ${({ theme }) => theme.fontFamily.Baloo};
`

export const CoffeeDescription = styled.span`
  flex: 1;
  text-align: center;
  margin-top: 0.5rem;
  display: flex;
  font-size: ${({ theme }) => theme.typography.text.s};
  color: ${({ theme }) => theme.colors['base-label']};
`

export const PriceContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const BuyContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const FullPrice = styled.span`
  font-size: ${({ theme }) => theme.typography.text.s};
`

export const Price = styled.span`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  font-size: ${({ theme }) => theme.typography.title.m};
  font-family: ${({ theme }) => theme.fontFamily.Baloo};
`

export const ShoppingButton = styled.button`
  padding: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const ButButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
`

export const BuyText = styled.span`
  display: flex;
  width: 1.25rem;
  justify-content: center;
`

export const PlusButton = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
export const MinusButton = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
