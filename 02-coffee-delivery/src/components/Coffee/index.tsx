import * as S from './styles'

type CoffeeProps = {
  coffee: any
}

export function Coffee({ coffee }: CoffeeProps) {
  return (
    <S.Wrapper>
      <h3>{coffee.name}</h3>
      <img src={coffee.image} />
    </S.Wrapper>
  )
}
