import { Box, Tabs } from '@mui/material'
import HeaderTabs from './HeaderTabs'
import Logo from './Logo'

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '70px',
        alignItems: 'center'
      }}
    >
      <Tabs
        textColor={'inherit'}
        sx={{
          borderBottom: 1,
          justifyContent: 'space-between',
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          paddingX: 4,
          marginX: 12
        }}
      >
        <Logo />
        <HeaderTabs />
      </Tabs>
    </Box>
  )
}

export default Header
