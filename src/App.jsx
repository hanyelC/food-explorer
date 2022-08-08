import { CustomThemeProvider } from './hooks/theme'
import { SignIn } from './pages/SignIn'

import GlobalStyle from './styles/global'

export function App() {

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <SignIn />
    </CustomThemeProvider>
  )
}
