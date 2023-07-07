import {
  CalendarBlank,
  GithubLogo,
  ChatCircle,
  ArrowSquareOut,
  CaretLeft
} from '@phosphor-icons/react'
import * as S from './styles'

export function ArticleTitleContainer() {
  return (
    <S.Container>
      <S.ButtonsContainer>
        <div>
          <CaretLeft size={16} />
          <span>Voltar</span>
        </div>
        <div>
          <span>Ver no Github</span>
          <ArrowSquareOut size={16} />
        </div>
      </S.ButtonsContainer>

      <h2>JavaScript data types and data structures</h2>

      <S.IconsContainer>
        <S.IconContainer>
          <GithubLogo size={16} weight="fill" />
          <span>aads</span>
        </S.IconContainer>

        <S.IconContainer>
          <CalendarBlank size={16} weight="fill" />
          <span>aads</span>
        </S.IconContainer>

        <S.IconContainer>
          <ChatCircle size={16} weight="fill" />
          <span>aads</span>
        </S.IconContainer>
      </S.IconsContainer>
    </S.Container>
  )
}
