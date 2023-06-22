import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './theme/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingProvider } from './context/shopping'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConfirmationProvider } from './context/confirmation'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingProvider>
        <ConfirmationProvider>
          <BrowserRouter>
            <ToastContainer />
            <Router />
          </BrowserRouter>
        </ConfirmationProvider>
      </ShoppingProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
