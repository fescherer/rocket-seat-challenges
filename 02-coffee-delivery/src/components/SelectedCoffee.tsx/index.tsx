import { CoffeeShoppingList } from '../CoffeeShoppingList'
import * as S from './styles'

export function SelectedCoffee() {
  return (
    <S.Wrapper>
      <CoffeeShoppingList />

      <S.TotalItensContainer>
        <S.Item>
          <span>Total de Itens</span>
          <span>R$ {'29,18'}</span>
        </S.Item>

        <S.Item>
          <span>Entrega</span>
          <span>R$ {'29,18'}</span>
        </S.Item>

        <S.TotalItem>
          <span>Total</span>
          <span>R$ {'29,18'}</span>
        </S.TotalItem>
      </S.TotalItensContainer>

      <S.ConfirmButton>CONFIRMAR PEDIDO</S.ConfirmButton>
    </S.Wrapper>
  )
}
