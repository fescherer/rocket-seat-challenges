import { MapPinLine } from '@phosphor-icons/react'
import * as S from './styles'

export function AddressForm() {
  return (
    <S.Wrapper>
      <S.Header>
        <MapPinLine size={24} />
        <S.TitleContainer>
          <S.Title>Endereço de entrega</S.Title>
          <S.Description>
            Informe o endereço onde deseja receber seu pedido
          </S.Description>
        </S.TitleContainer>
      </S.Header>

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
