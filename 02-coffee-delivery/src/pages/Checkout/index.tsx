'use client'

import { useForm } from 'react-hook-form'
import { AddressForm } from '../../components/AddressForm'
import { PaymentForm } from '../../components/PaymentForm'
import { SelectedCoffee } from '../../components/SelectedCoffee.tsx'
import * as S from './styles.ts'
import { FormValidation, schema } from './validation.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useConfirmationContext } from '../../context/confirmation.tsx'
import { useShoppingContext } from '../../context/shopping.tsx'

export function Checkout() {
  const router = useNavigate()
  const { setConfirmation } = useConfirmationContext()
  const { setCoffeeList } = useShoppingContext()

  const { register, control, formState, handleSubmit, reset } =
    useForm<FormValidation>({
      resolver: yupResolver(schema)
    })

  function handleOnSubmit(data: FormValidation) {
    router('/confirmation')
    reset()
    setCoffeeList([])
    setConfirmation(data)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleOnSubmit)}>
      <S.Container>
        <S.Title>Complete seu pedido</S.Title>
        <S.FormContainer>
          <AddressForm register={register} />
          <PaymentForm control={control} />
        </S.FormContainer>
      </S.Container>

      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <SelectedCoffee formState={formState} />
      </S.Container>
    </S.Wrapper>
  )
}
