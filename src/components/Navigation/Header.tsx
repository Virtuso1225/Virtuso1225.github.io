import { Box, Tabs } from '@mui/material'
import HeaderTabs from './HeaderTabs'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LanguageBtn from './LanguageBtn'
import NavigationPaths from '@src/data/navigation'
const Header = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const navigate = useNavigate()

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
          borderBottom: 1,
          justifyContent: 'space-between',
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          paddingX: 4,
          marginX: 12
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
