import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { List } from './pages/List'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<List />} />
        <Route path="/history" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
