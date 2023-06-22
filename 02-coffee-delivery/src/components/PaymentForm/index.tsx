import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { FormHeader } from '../FormHeader'
import * as S from './styles'
import { Control, Controller } from 'react-hook-form'

type PaymentFormProps = {
  control: Control<any>
}

const paymentMethods = [
  {
    id: 1,
    icon: <CreditCard />,
    title: 'Cartão de crédito',
    slug: 'credit-card'
  },
  {
    id: 2,
    icon: <Bank />,
    title: 'Cartão de débito',
    slug: 'debit-card'
  },
  {
    id: 3,
    icon: <Money />,
    title: 'Dinheiro',
    slug: 'money'
  }
]

export function PaymentForm({ control }: PaymentFormProps) {
  return (
    <S.Wrapper>
      <FormHeader
        icon={<Money size={24} />}
        color="purple"
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <Controller
        control={control}
        name="payment"
        render={({ field }) => {
          return (
            <S.PaymentContainer>
              {paymentMethods.map((item) => (
                <S.ItemContainer
                  key={item.id}
                  isSelected={field.value === item.slug}
                  onClick={() => field.onChange(item.slug)}
                  type="button"
                >
                  {item.icon}
                  <S.Item>{item.title}</S.Item>
                </S.ItemContainer>
              ))}
            </S.PaymentContainer>
          )
        }}
      />
    </S.Wrapper>
  )
}
