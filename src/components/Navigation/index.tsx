// info: mobile view -> hamburger menu
// info: desktop view -> header shown

import { Box, styled, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

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
  useEffect(() => {
    setIsMobile(matches)
  }, [matches])
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '500px',
        backgroundImage: 'url(./assets/background.jpg)'
      }}
    >
      {isMobile ? 'Mobile' : <Header />}
      <ThemeWrapper>
        <Outlet />
      </ThemeWrapper>
      <img src="./assets/background.jpg" />
    </Box>
  )
}

export default Navigation
