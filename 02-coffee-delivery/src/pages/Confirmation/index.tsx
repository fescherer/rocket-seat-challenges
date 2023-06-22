import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { useConfirmationContext } from '../../context/confirmation'
import illustration from '../../assets/Illustration-confirm.png'
import * as S from './styles'

enum paymentEnum {
  'debit-card' = 'Cartão de Débito',
  'credit-card' = 'Cartão de Crédito',
  'money' = 'Dinheiro'
}

export function Confirmation() {
  const { confirmation } = useConfirmationContext()
  if (!confirmation) return <></>

  return (
    <div>
      <S.Title>Uhu! Pedido confirmado</S.Title>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <S.Container>
        <S.Wrapper>
          <S.ItemsContainer>
            <S.Item>
              <S.IconContainer color="purple">
                <MapPin />
              </S.IconContainer>
              <S.ContainerStreet>
                <span>
                  Entrega em Rua{' '}
                  <strong>
                    {confirmation?.street}, {confirmation?.number}
                  </strong>
                </span>
                {confirmation?.complement && (
                  <span>{confirmation.complement}</span>
                )}
                <span>
                  {confirmation?.neighborhood} - {confirmation?.city},{' '}
                  {confirmation?.state}
                </span>
              </S.ContainerStreet>
            </S.Item>

            <S.Item>
              <S.IconContainer color="yellow-dark">
                <Clock />
              </S.IconContainer>
              <S.ContainerStreet>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </S.ContainerStreet>
            </S.Item>

            <S.Item>
              <S.IconContainer color="yellow">
                <CurrencyDollar />
              </S.IconContainer>
              <S.ContainerStreet>
                <span>Pagamento na entrega</span>

                <span>
                  <strong>
                    {
                      paymentEnum[
                        confirmation?.payment as keyof typeof paymentEnum
                      ]
                    }
                  </strong>
                </span>
              </S.ContainerStreet>
            </S.Item>
          </S.ItemsContainer>
        </S.Wrapper>

        <img src={illustration} />
      </S.Container>
    </div>
  )
}
