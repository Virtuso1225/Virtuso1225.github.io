import { Box, styled, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import '../../css/background.css'
import SideBarContainer from './SideBar'
import { useTheme } from '@emotion/react'

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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [isMobile, setIsMobile] = useState(matches)
  const location = useLocation()

  const showBackgroundImage = location.pathname === '/'

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
        }
      ]}
      className={showBackgroundImage ? 'show-background' : ''}
    >
      {isMobile ? <SideBarContainer /> : <Header />}
      <ThemeWrapper>
        <Outlet />
      </ThemeWrapper>
    </Box>
  )
}

export default Navigation
