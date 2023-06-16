import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logoWithText.svg'
import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { useShoppingContext } from '../../context/shopping'

export function Header() {
  const { coffeeList } = useShoppingContext()

  return (
    <S.Container>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
      <S.Nav>
        <S.LocationContainer>
          <MapPin size={16} weight="fill" />
          <span>Porto Alegre, RS</span>
        </S.LocationContainer>
        <S.ShoppingButton to="/checkout" title="Histórico">
          <S.TotalItems>{coffeeList?.length}</S.TotalItems>
          <ShoppingCart size={24} weight="fill" />
        </S.ShoppingButton>
      </S.Nav>
    </S.Container>
  )
}
