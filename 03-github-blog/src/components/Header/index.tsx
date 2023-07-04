import * as S from './styles'
import effect from '../../assets/effect.svg'
import effect2 from '../../assets/effect2.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Background>
      <S.ImgEffect src={effect} style={{ left: 0 }} />
      <img src={logo} />
      <S.ImgEffect src={effect2} style={{ right: 0 }} />
    </S.Background>
  )
}
