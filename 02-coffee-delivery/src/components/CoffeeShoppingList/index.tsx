import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useShoppingContext } from '../../context/shopping'
import * as S from './styles'
import { useTheme } from 'styled-components'

export function CoffeeShoppingList() {
  const {
    coffeeList,
    reduceCoffeeQuantity,
    addCoffeeQuantity,
    removeCoffeeFromList
  } = useShoppingContext()
  const theme = useTheme()

  return (
    <S.Wrapper>
      {coffeeList?.map((item) => (
        <S.Container key={item.id}>
          <S.CardContainer>
            <img width={64} height={64} src={item.coffee.image} />
            <S.ItemWrapper>
              <span>{item.coffee.name}</span>

              <S.ItemContainer>
                <S.ButtonChangeItemContainer>
                  <S.ButtonChangeItem
                    onClick={() => reduceCoffeeQuantity(item.coffee.id)}
                  >
                    <Minus />
                  </S.ButtonChangeItem>
                  <S.ButtonSpan>{item.quantity}</S.ButtonSpan>
                  <S.ButtonChangeItem
                    onClick={() => addCoffeeQuantity(item.coffee.id)}
                  >
                    <Plus />
                  </S.ButtonChangeItem>
                </S.ButtonChangeItemContainer>
                <S.ButtonRemove
                  onClick={() => removeCoffeeFromList(item.coffee.id)}
                >
                  <Trash color={theme.colors['purple']} size={18} />
                  <span>REMOVER</span>
                </S.ButtonRemove>
              </S.ItemContainer>
            </S.ItemWrapper>

            <S.Price>R$ {item.coffee.price.toFixed(2)}</S.Price>
          </S.CardContainer>

          <S.Separator></S.Separator>
        </S.Container>
      ))}
    </S.Wrapper>
  )
}
