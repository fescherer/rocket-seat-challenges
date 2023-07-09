import { useState, useEffect } from 'react'
import { TitleContainer } from '../../components/TitleContainer'
import { githubApi } from '../../lib/axios'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

function getTime(date: Date) {
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  return publishedDateRelativeToNow
}

export function ArticlesList() {
  const [issues, setIssues] = useState<any>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getItems() {
      const response = await githubApi.get(
        `/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge`
      )
      setIssues(response.data.items)
    }

    getItems()
  }, [])

  function getIssues(value: string) {
    setTimeout(async () => {
      const uri = `/search/issues?q=${value} repo:rocketseat-education/reactjs-github-blog-challenge`
      const items = await githubApi.get(uri)
      setIssues(items.data.items)
    }, 500)
  }
  return (
    <div>
      <TitleContainer />

      <S.ListWrapper>
        <S.SearchContainer>
          <S.LabelContainer>
            <S.MainLabel>Publicações</S.MainLabel>
            <span>6 publicações</span>
          </S.LabelContainer>

          <S.Input
            onChange={(e: any) => getIssues(e.target.value)}
            placeholder="Buscar conteúdo"
          />
        </S.SearchContainer>

        <S.ItemsContainer>
          {issues.map((item: any) => (
            <S.ItemContainer
              key={item.number}
              onClick={() => navigate(`/${item.number}`)}
            >
              <S.Time>Há {getTime(new Date(item.created_at))} dia</S.Time>
              <S.ItemTitleContainer>
                <h2>{item.title}</h2>
              </S.ItemTitleContainer>

              <S.ItemDescription>{item.body}</S.ItemDescription>
            </S.ItemContainer>
          ))}
        </S.ItemsContainer>
      </S.ListWrapper>
    </div>
  )
}
