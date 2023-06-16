import { CoffeeList } from '../../@types/Coffee'
import { useShoppingContext } from '../../context/shopping'
import { CoffeeShoppingList } from '../CoffeeShoppingList'
import * as S from './styles'

function getTotalItens(coffeeList: CoffeeList[]) {
  let total = 0

  coffeeList.map((item) => (total += item.quantity * item.coffee.price))

  return total
}

export function SelectedCoffee() {
  const { coffeeList } = useShoppingContext()
  const delivery = 3

  if (!coffeeList) return <></>

  const totalItens = getTotalItens(coffeeList)

  return (
    <S.Wrapper>
      <CoffeeShoppingList />

      <S.TotalItensContainer>
        <S.Item>
          <span>Total de Itens</span>
          <span>R$ {totalItens.toFixed(2)}</span>
        </S.Item>

        <S.Item>
          <span>Entrega</span>
          <span>R$ {delivery.toFixed(2)}</span>
        </S.Item>

        <S.TotalItem>
          <span>Total</span>
          <span>R$ {(totalItens + delivery).toFixed(2)}</span>
        </S.TotalItem>
      </S.TotalItensContainer>

      <S.ConfirmButton>CONFIRMAR PEDIDO</S.ConfirmButton>
    </S.Wrapper>
  )
}
