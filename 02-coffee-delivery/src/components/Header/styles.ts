import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-size: ${({ theme }) => theme.typography.text.s};
  color: ${({ theme }) => theme.colors['purple-dark']};
  background-color: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const ShoppingButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  border-radius: 6px;
  padding: 0.3rem;
`

