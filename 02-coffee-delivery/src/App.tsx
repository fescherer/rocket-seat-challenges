import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './theme/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingProvider } from './context/shopping'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingProvider>
        <BrowserRouter>
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </ShoppingProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
