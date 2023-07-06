import { useGithubData } from '../../contexts/GithubData'
import * as S from './styles'

export function TitleContainer() {
  const { data } = useGithubData()

  return (
    <S.Container>
      <S.Image
        width={148}
        height={148}
        src={'https://avatars.githubusercontent.com/u/62115215?s=40&v=4'}
      />

      <S.InfoContainer>
        <S.TextContainer>
          <S.TitleContainer>
            <h2>Felipe Scherer</h2>
            <S.LinkContainer>
              <a href="https://github.com/ofelipescherer">Github</a>
              <ArrowSquareOut size={16} />
            </S.LinkContainer>
          </S.TitleContainer>
          <S.Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </S.Description>
        </S.TextContainer>
        <S.IconsContainer>
          <S.IconContainer>
            <GithubLogo size={16} weight="fill" />
            <span>ofelipescherer</span>
          </S.IconContainer>

          <S.IconContainer>
            <Buildings size={16} weight="fill" />
            <span>Playscores</span>
          </S.IconContainer>

          <S.IconContainer>
            <Users size={16} weight="fill" />
            <span>{32} seguidores</span>
          </S.IconContainer>
        </S.IconsContainer>
      </S.InfoContainer>
    </S.Container>
  )
}
