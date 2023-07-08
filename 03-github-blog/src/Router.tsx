import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ArticlesList } from './pages/ArticlesList'
import { Article } from './pages/Article'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/:articleId" element={<Article />} />
      </Route>
    </Routes>
  )
}
