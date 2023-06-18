import { Money } from '@phosphor-icons/react'
import { FormHeader } from '../FormHeader'
import * as S from './styles'

export function PaymentForm() {
  return (
    <S.Wrapper>
      <FormHeader
        icon={<Money size={24} />}
        color="purple"
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
    </S.Wrapper>
  )
}
