import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { FormHeader } from '../FormHeader'
import * as S from './styles'
import { useState } from 'react'

const paymentMethods = [
  {
    id: 1,
    icon: <CreditCard />,
    title: 'Cartão de crédito'
  },
  {
    id: 2,
    icon: <Bank />,
    title: 'Cartão de crédito'
  },
  {
    id: 3,
    icon: <Money />,
    title: 'Cartão de crédito'
  }
]

export function PaymentForm() {
  const [isSelected, setIsSelected] = useState(0)

  return (
    <S.Wrapper>
      <FormHeader
        icon={<Money size={24} />}
        color="purple"
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <S.PaymentContainer>
        {paymentMethods.map((item) => (
          <S.ItemContainer
            key={item.id}
            isSelected={isSelected === item.id}
            onClick={() => setIsSelected(item.id)}
          >
            {item.icon}
            <S.Item>{item.title}</S.Item>
          </S.ItemContainer>
        ))}
      </S.PaymentContainer>
    </S.Wrapper>
  )
}
