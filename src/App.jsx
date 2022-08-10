import { CustomThemeProvider } from './hooks/theme'

import { Routes } from './routes'

import GlobalStyle from './styles/global'

export function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Routes />
    </CustomThemeProvider>
  )
}
