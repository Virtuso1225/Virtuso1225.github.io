import { useLocation, useRoutes } from 'react-router-dom'
import router from './router'
import { ThemeProvider, createTheme } from '@mui/material'
import COLORS from 'src/theme/colors'
import 'src/translate/index'
import PretendardVariable from '@src/assets/fonts/PretendardVariable.ttf'

const App = () => {
  const content = useRoutes(router)
  const location = useLocation()

  const mainColor = location.pathname === '/' ? COLORS.primary : COLORS.antiPrimary

  const theme = createTheme({
    typography: {
      fontFamily: 'PretendardVariable'
    },
    palette: {
      primary: {
        main: COLORS.primary,
        contrastText: COLORS.antiPrimary
      },
      secondary: {
        main: COLORS.secondary,
        contrastText: COLORS.antiSecondary
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [PretendardVariable]
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: mainColor
          },
          root: {
            color: mainColor
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mainColor
          }
        }
      }
    }
  })

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>
}

export default App
