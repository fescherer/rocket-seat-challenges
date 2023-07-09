import { useParams } from 'react-router-dom'
import { ArticleTitleContainer } from '../../components/ArticleTitleContainer'
import { useEffect, useState } from 'react'
import { githubApi } from '../../lib/axios'
import * as S from './styles'
import ReactMarkdown from 'react-markdown'

export function Article() {
  const [data, setData] = useState<any>()
  const routeParams = useParams()

  useEffect(() => {
    async function getData() {
      const response = await githubApi(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${routeParams.id}`
      )

      setData(response.data)
    }

    getData()
  }, [])

  if (!data) return <></>

  return (
    <div>
      <ArticleTitleContainer data={data} />

      <S.Article>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </S.Article>
    </div>
  )
}
