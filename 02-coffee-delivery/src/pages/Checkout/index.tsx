import { useForm } from 'react-hook-form'
import { AddressForm } from '../../components/AddressForm'
import { PaymentForm } from '../../components/PaymentForm'
import { SelectedCoffee } from '../../components/SelectedCoffee.tsx'
import * as S from './styles.ts'
import { FormValidation, schema } from './validation.ts'
import { yupResolver } from '@hookform/resolvers/yup'

export function Checkout() {
  const { control, register, setValue, getValues } = useForm<FormValidation>({
    resolver: yupResolver(schema)
  })

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Complete seu pedido</S.Title>
        <S.FormContainer>
          <AddressForm />
          <PaymentForm setValue={setValue} getValues={getValues} />
        </S.FormContainer>
      </S.Container>

      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <SelectedCoffee />
      </S.Container>
    </S.Wrapper>
  )
}
