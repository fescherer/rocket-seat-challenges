import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { FormHeader } from '../FormHeader'
import * as S from './styles'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

type PaymentFormProps = {
  setValue: UseFormSetValue<any>
  watch: UseFormWatch<any>
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

export function PaymentForm({ setValue, watch }: PaymentFormProps) {
  function setPaymentMethod(slug: string) {
    setValue('payment', slug)
  }
  const payment = watch('payment')

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
            isSelected={payment === item.slug}
            onClick={() => setPaymentMethod(item.slug)}
            type="button"
          >
            {item.icon}
            <S.Item>{item.title}</S.Item>
          </S.ItemContainer>
        ))}
      </S.PaymentContainer>
    </S.Wrapper>
  )
}
