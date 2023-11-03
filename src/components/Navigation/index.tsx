import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'

const ThemeWrapper = styled(Box)(
  () => `
        position: relative;
        z-index: 5;
        display: block;
        flex: 1;
        min-width: 0;
    `
)

const Navigation = () => {
  const matches = useMediaQuery('(max-width:800px)')
  const [isMobile, setIsMobile] = useState(matches)
  const location = useLocation()
  const { palette } = useTheme()

  const getBackgroundStyle = () => {
    if (location.pathname === '/') {
      return {
        backgroundImage: 'url(./assets/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    } else {
      return {
        backgroundColor: palette.background.default
      }
    }
  }

  useEffect(() => {
    setIsMobile(matches)
  }, [matches])
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        getBackgroundStyle()
      ]}
    >
      {isMobile ? 'Mobile' : <Header />}
      <ThemeWrapper>
        <Outlet />
      </ThemeWrapper>
    </Box>
  )
}

export default Navigation
