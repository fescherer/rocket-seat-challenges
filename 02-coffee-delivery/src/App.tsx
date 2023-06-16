import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './theme/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingProvider } from './context/shopping'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
