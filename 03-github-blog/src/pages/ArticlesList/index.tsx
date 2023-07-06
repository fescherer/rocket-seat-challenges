import { TitleContainer } from '../../components/TitleContainer'
import * as S from './styles'
export function ArticlesList() {
  const issues = [1, 2]
  return (
    <div>
      <TitleContainer />

      <S.ListWrapper>
        <S.SearchContainer>
          <S.LabelContainer>
            <S.MainLabel>Publicações</S.MainLabel>
            <span>6 publicações</span>
          </S.LabelContainer>

          <S.Input placeholder="Buscar conteúdo" />
        </S.SearchContainer>

        <S.ItemsContainer>
          {issues.map((item) => (
            <S.ItemContainer key={item}>
              <S.ItemTitleContainer>
                <h2>Javascript</h2>
                <time>Há 1 dia</time>
              </S.ItemTitleContainer>

              <S.ItemDescription>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn. Dynamic typing JavaScript is a
                loosely typed and dynamic language. Variables in JavaScript are
                not directly associated with any particular value type, and any
                variable can be assigned (and re-assigned) values of all types:
                let foo = 42; // foo is now a number foo = 'bar'; // foo is now
                a string foo = true; // foo is now a boolean
              </S.ItemDescription>
            </S.ItemContainer>
          ))}
        </S.ItemsContainer>
      </S.ListWrapper>
    </div>
  )
}
