import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users
} from '@phosphor-icons/react'
import { useGithubData } from '../../contexts/GithubData'
import * as S from './styles'

export function TitleContainer() {
  const { data } = useGithubData()

  if (!data) return <></>
  return (
    <S.Container>
      <S.Image width={148} height={148} src={data.avatar_url} />

      <S.InfoContainer>
        <S.TextContainer>
          <S.TitleContainer>
            <h2>{data.name}</h2>
            <S.LinkContainer>
              <S.Anchor target="_blank" href={data.html_url}>
                Github
              </S.Anchor>
              <ArrowSquareOut size={16} />
            </S.LinkContainer>
          </S.TitleContainer>
          <S.Description>{data.bio}</S.Description>
        </S.TextContainer>
        <S.IconsContainer>
          <S.IconContainer>
            <GithubLogo size={16} weight="fill" />
            <span>{data.login}</span>
          </S.IconContainer>

          <S.IconContainer>
            <Buildings size={16} weight="fill" />
            <span>{data?.company ?? '-'}</span>
          </S.IconContainer>

          <S.IconContainer>
            <Users size={16} weight="fill" />
            <span>{data.followers} seguidores</span>
          </S.IconContainer>
        </S.IconsContainer>
      </S.InfoContainer>
    </S.Container>
  )
}
