import { useLocation, useRoutes } from 'react-router-dom'
import router from './router'
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import COLORS from 'src/theme/colors'
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
        },
        background: {
          default: COLORS.background,
          paper: COLORS.antibackground
        }
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'PretendardVariable';
              font-style: normal;
              font-display: swap;
              font-weight: normal;
              src: local('PretendardVariable'), url(${PretendardVariable}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `
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
