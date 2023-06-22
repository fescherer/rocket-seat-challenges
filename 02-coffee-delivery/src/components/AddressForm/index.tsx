import { MapPinLine } from '@phosphor-icons/react'
import * as S from './styles'
import { FormHeader } from '../FormHeader'
import { UseFormRegister } from 'react-hook-form'

type AddressFormProps = {
  register: UseFormRegister<any>
}

export function AddressForm({ register }: AddressFormProps) {
  return (
    <S.Wrapper>
      <FormHeader
        icon={<MapPinLine size={24} />}
        color="yellow"
        title="Endereço de entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />

      <S.Container>
        <S.Input placeholder="zip" {...register('zip')} />
        <S.Input placeholder="Rua" {...register('street')} />
        <S.NumberContainer>
          <S.Input placeholder="Número" {...register('number')} />
          <S.Input placeholder="Complemento" {...register('complement')} />
        </S.NumberContainer>

        <S.AdressContainer>
          <S.Input placeholder="Bairro" {...register('neighborhood')} />
          <S.Input placeholder="Cidade" {...register('city')} />
          <S.Input placeholder="RS" {...register('state')} />
        </S.AdressContainer>
      </S.Container>
    </S.Wrapper>
  )
}
