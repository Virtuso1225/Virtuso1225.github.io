import { Box, Tabs } from '@mui/material'
import HeaderTabs from './HeaderTabs'
import Logo from './Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LanguageBtn from './LanguageBtn'
import NavigationPaths from '@src/data/navigation'
const Header = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const main = location.pathname === '/'

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
    navigate(NavigationPaths[newValue])
  }

  const handleClickLogo = () => {
    setCurrentTab(0)
  }

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        width: '100vw',
        alignItems: 'center',
        zIndex: 6
      }}
    >
      <Tabs
        textColor={'inherit'}
        sx={{
          borderBottom: main ? 1 : '',
          justifyContent: 'space-between',
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          paddingX: 4,
          background: main ? '' : '#fafafa',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}
        value={0}
        TabIndicatorProps={{ sx: { display: 'none' } }}
      >
        <Logo handleClicked={handleClickLogo} />
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <LanguageBtn />
          <HeaderTabs handleChange={handleChange} currentTab={currentTab} />
        </Box>
      </Tabs>
    </Box>
  )
}

export default Header
