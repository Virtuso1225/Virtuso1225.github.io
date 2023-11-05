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
        textColor="inherit"
        indicatorColor={'primary'}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label={t('main.title')} />
        <Tab label={t('agenda.title')} />
        <Tab label={t('location.title')} />
        <Tab label={t('join.title')} />
        <Tab label={t('contact.title')} />
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
