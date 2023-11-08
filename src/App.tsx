import { useLocation, useRoutes } from 'react-router-dom'
import router from './router'
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import COLORS from 'src/theme/colors'
import 'src/translate/index'
import PretendardVariable from '@src/assets/fonts/PretendardVariable.ttf'

const App = () => {
  const content = useRoutes(router)
  const location = useLocation()

  const mainColor = location.pathname === '/' ? COLORS.primary : COLORS.antiPrimary
  const antiColor = location.pathname === '/' ? COLORS.antiPrimary : COLORS.primary

  const theme = responsiveFontSizes(
    createTheme({
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
          contrastText: COLORS.antiSecondary,
          light: COLORS.textHover
        },
        text: {
          primary: COLORS.primary,
          secondary: COLORS.transparentText
        }
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            '@fontFace': [PretendardVariable]
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
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              color: mainColor
            }
          }
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: antiColor,
              color: mainColor
            }
          }
        }
      }
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  )
}

export default App
