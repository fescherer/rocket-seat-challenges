import { AddressForm } from '../../components/AddressForm'
import { PaymentForm } from '../../components/PaymentForm'
import { SelectedCoffee } from '../../components/SelectedCoffee.tsx'
import * as S from './styles.ts'

export function Checkout() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Complete seu pedido</S.Title>
        <S.FormContainer>
          <AddressForm />
          <PaymentForm />
        </S.FormContainer>
      </S.Container>

      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <SelectedCoffee />
      </S.Container>
    </S.Wrapper>
  )
}

