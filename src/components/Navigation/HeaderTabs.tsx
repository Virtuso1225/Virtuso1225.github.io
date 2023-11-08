import { Box, Tab, Tabs } from '@mui/material'

interface HeaderTabsProps {
  currentTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}
const HeaderTabs = ({ currentTab, handleChange }: HeaderTabsProps) => {
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
        <Tab label="HOME" value={0} />
        <Tab label="프로그램" value={1} />
        <Tab label="연사소개" value={2} />
        <Tab label="오시는길" value={3} />
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
