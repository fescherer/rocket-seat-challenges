import * as S from './styles'
import CoffeeList from '../../components/CoffeeList'
import { CoffeeShowUp } from '../../components/CoffeeShowUp'

export function List() {
  return (
    <S.Container>
      <CoffeeShowUp></CoffeeShowUp>
      <CoffeeList></CoffeeList>
    </S.Container>
  )
}
