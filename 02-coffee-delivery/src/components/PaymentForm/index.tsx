import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { FormHeader } from '../FormHeader'
import * as S from './styles'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'

type PaymentFormProps = {
  setValue: UseFormSetValue<any>
  getValues: UseFormGetValues<any>
}

const paymentMethods = [
  {
    id: 1,
    icon: <CreditCard />,
    title: 'Cartão de crédito'
  },
  {
    id: 2,
    icon: <Bank />,
    title: 'Cartão de débito'
  },
  {
    id: 3,
    icon: <Money />,
    title: 'Dinheiro'
  }
]

export function PaymentForm({ setValue, getValues }: PaymentFormProps) {
  function setPaymentMethod(id: number) {
    setValue('payment', id)
  }

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
            isSelected={getValues() === item.id}
            onClick={() => setPaymentMethod(item.id)}
          >
            {item.icon}
            <S.Item>{item.title}</S.Item>
          </S.ItemContainer>
        ))}
      </S.PaymentContainer>
    </S.Wrapper>
  )
}
