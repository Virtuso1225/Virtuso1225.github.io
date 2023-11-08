import { Box, Tab, Tabs } from '@mui/material'

import { useTranslation } from 'react-i18next'

interface HeaderTabsProps {
  currentTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}
const HeaderTabs = ({ currentTab, handleChange }: HeaderTabsProps) => {
  const { t } = useTranslation()

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
