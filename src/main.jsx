import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
  </BrowserRouter>
)
