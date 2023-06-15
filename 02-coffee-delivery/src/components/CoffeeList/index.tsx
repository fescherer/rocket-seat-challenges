import { Coffee } from '../Coffee'
import { coffees } from './data'
import * as S from './styles'

export default function CoffeeList() {
  return (
    <S.Wrapper>
      <S.Title>Nossos cafés</S.Title>
      <S.Container>
        {coffees.map((item) => (
          <Coffee key={item.id} coffee={item} />
        ))}
      </S.Container>
    </S.Wrapper>
  )
}
