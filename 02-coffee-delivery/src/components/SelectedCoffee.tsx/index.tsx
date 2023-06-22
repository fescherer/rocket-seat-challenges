import { FormState } from 'react-hook-form'
import { CoffeeList } from '../../@types/Coffee'
import { useShoppingContext } from '../../context/shopping'
import { CoffeeShoppingList } from '../CoffeeShoppingList'
import * as S from './styles'

function getTotalItens(coffeeList: CoffeeList[]) {
  let total = 0

  coffeeList.map((item) => (total += item.quantity * item.coffee.price))

  return total
}

type SelectedCoffeeProps = {
  formState: FormState<any>
}

export function SelectedCoffee({ formState }: SelectedCoffeeProps) {
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

      <S.ConfirmButton
        type="submit"
        disabled={!formState.isDirty || !formState.isValid}
      >
        CONFIRMAR PEDIDO
      </S.ConfirmButton>
    </S.Wrapper>
  )
}
