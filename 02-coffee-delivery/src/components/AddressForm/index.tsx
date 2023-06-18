import { MapPinLine } from '@phosphor-icons/react'
import * as S from './styles'
import { FormHeader } from '../FormHeader'

export function AddressForm() {
  return (
    <S.Wrapper>
      <FormHeader
        icon={<MapPinLine size={24} />}
        color="yellow"
        title="Endereço de entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />

      <S.Container>
        <input placeholder="tel" />
        <input placeholder="Rua" />
        <S.NumberContainer>
          <input placeholder="Número" />
          <input placeholder="Complemento" />
        </S.NumberContainer>

        <S.AdressContainer>
          <input placeholder="Bairro" />
          <input placeholder="Cidade" />
          <input placeholder="RS" />
        </S.AdressContainer>
      </S.Container>
    </S.Wrapper>
  )
}
