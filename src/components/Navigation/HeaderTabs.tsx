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

  const location = useLocation()
  const isHome = location.pathname === '/'

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
      >
        <Tab label="home" value={0} />
        <Tab label={t('program.title')} value={1} />
        <Tab label={t('introduction.title')} value={2} />
        <Tab label={t('location.title')} value={3} />
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
