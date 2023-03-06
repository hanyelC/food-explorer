import { createContext, useCallback, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/themes'

const ThemeContext = createContext({})

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = useCallback(() => {
    if (theme.name === 'dark') {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
