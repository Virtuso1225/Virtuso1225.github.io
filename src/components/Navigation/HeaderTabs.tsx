import { Box, Tab, Tabs } from '@mui/material'
import { PAGES_TAB } from '@src/data/header'
import { useState } from 'react'

const HeaderTabs = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }
  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { background: 'white' } }}
        textColor="inherit"
      >
        {PAGES_TAB.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
