import { useState, useEffect } from 'react'
import { TitleContainer } from '../../components/TitleContainer'
import { githubApi } from '../../lib/axios'
import * as S from './styles'
import { useNavigate, useNavigation } from 'react-router-dom'
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
      console.log('====>', 'sasa', value)
      // setFilteredCities(
      //   citiesArray.filter((city) =>
      //     city.toLowerCase().includes(query.toLowerCase())
      //   )
      // )
      const uri = `/search/issues?q=${value} repo:rocketseat-education/reactjs-github-blog-challenge`
      const a = await githubApi.get(uri)
      setIssues(a.data.items)
      console.log(a)
    }, 500)
  }

  // https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge

  //https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1

  //https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1
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
              <S.ItemTitleContainer>
                <h2>{item.title}</h2>
                <time>Há 1 dia</time>
              </S.ItemTitleContainer>

              <S.ItemDescription>{item.body}</S.ItemDescription>
            </S.ItemContainer>
          ))}
        </S.ItemsContainer>
      </S.ListWrapper>
    </div>
  )
}
