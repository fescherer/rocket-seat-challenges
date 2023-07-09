import {
  CalendarBlank,
  GithubLogo,
  ChatCircle,
  ArrowSquareOut,
  CaretLeft
} from '@phosphor-icons/react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

type ArticleTitleContainerProps = {
  data: any
}

export function ArticleTitleContainer({ data }: ArticleTitleContainerProps) {
  const navigate = useNavigate()

  if (!data) return <></>

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.Button onClick={() => navigate('/')}>
          <CaretLeft size={16} />
          <span>Voltar</span>
        </S.Button>
        <a target="_blank" href={data.html_url}>
          <span>Ver no Github</span>
          <ArrowSquareOut size={16} />
        </a>
      </S.ButtonsContainer>

      <h2>{data.title}</h2>

      <S.IconsContainer>
        <S.IconContainer>
          <GithubLogo size={16} weight="fill" />
          <span>{data.user.login}</span>
        </S.IconContainer>

        <S.IconContainer>
          <CalendarBlank size={16} weight="fill" />
          <span>{data.created_at}</span>
        </S.IconContainer>

        <S.IconContainer>
          <ChatCircle size={16} weight="fill" />
          <span>{data.comments}</span>
        </S.IconContainer>
      </S.IconsContainer>
    </S.Container>
  )
}
