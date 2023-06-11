import Logo from '../../assets/logoWithText.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <img src={Logo} />
      <div>header</div>
    </S.Container>
  )
}
