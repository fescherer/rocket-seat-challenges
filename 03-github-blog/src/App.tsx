import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './global'
import { GithubDataProvider } from './contexts/GithubData'


export function App() {
  return (
    <GithubDataProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </GithubDataProvider>
  )
}
