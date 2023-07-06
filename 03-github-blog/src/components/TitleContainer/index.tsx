import { useGithubData } from '../../contexts/GithubData'
import * as S from './styles'

export function TitleContainer() {
  const { data } = useGithubData()

  return (
    <S.Container>
      <img src={data.avatar_url} />
      <span>dasdasd</span>
    </S.Container>
  )
}
