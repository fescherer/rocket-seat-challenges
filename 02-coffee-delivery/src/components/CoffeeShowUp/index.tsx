import * as S from './styles'
import { Clock, Coffee, Package, ShoppingCart } from '@phosphor-icons/react'
import imgSplash from '../../assets/coffee-splash.png'

export function CoffeeShowUp() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.TitleContainer>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Subtitle>
        </S.TitleContainer>

        <S.StatsContainer>
          <S.StatItem>
            <S.Icon bg="yellow-dark">
              <ShoppingCart />
            </S.Icon>
            Compra simples e segura
          </S.StatItem>

          <S.StatItem>
            <S.Icon bg="base-text">
              <Package />
            </S.Icon>
            Embalagem mantém o café intacto
          </S.StatItem>

          <S.StatItem>
            <S.Icon bg="yellow">
              <Clock />
            </S.Icon>
            Entrega rápida e rastreada
          </S.StatItem>

          <S.StatItem>
            <S.Icon bg="purple">
              <Coffee />
            </S.Icon>
            O Café chega fresquinho até você
          </S.StatItem>
        </S.StatsContainer>
      </S.TitleWrapper>
      <S.ImgSplash src={imgSplash}></S.ImgSplash>
    </S.Wrapper>
  )
}

