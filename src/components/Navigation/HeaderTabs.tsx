import { Box, Tab, Tabs } from '@mui/material'
import NavigationPaths from '@src/data/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderTabsProps {
  currentTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}
const HeaderTabs = ({ currentTab, handleChange }: HeaderTabsProps) => {
  const { t } = useTranslation()

  // const location = useLocation()
  // const isHome = location.pathname === '/'

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor={'inherit'}
        indicatorColor={'primary'}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        // TabIndicatorProps={{ sx: { display: isHome ? 'none' : '' } }}
      >
        <Tab label="home" />
        <Tab label={t('program.title')} />
        <Tab label={t('introduction.title')} />
        <Tab label={t('location.title')} />
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
