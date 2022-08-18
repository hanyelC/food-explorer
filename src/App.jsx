import { CustomThemeProvider } from './hooks/theme'
import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

import GlobalStyle from './styles/global'

export function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <GlobalStyle />
        <Routes />
      </CustomThemeProvider>
    </AuthProvider>
  )
}
