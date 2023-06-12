import { ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logoWithText.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <img src={Logo} />
      <nav>
        <span>header</span>
        <S.ShoppingButton>
          <ShoppingCart size={24} weight="fill" />
        </S.ShoppingButton>
      </nav>
    </S.Container>
  )
}

