import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTabs = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const navigate = useNavigate()
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
    switch (newValue) {
      case 0:
        navigate('/')
        break
      case 1:
        navigate('/agenda')
        break
      case 2:
        navigate('/location')
        break
      case 3:
        navigate('/join')
        break
      case 4:
        navigate('/review')
        break
      case 5:
        navigate('/contact')
        break
      default:
        break
    }
  }

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Tabs value={currentTab} onChange={handleChange} textColor="inherit" indicatorColor={'primary'}>
        <Tab label={'행사소개'} />
        <Tab label={'행사일정'} />
        <Tab label={'행사장소'} />
        <Tab label={'행사참가'} />
        <Tab label={'행사후기'} />
        <Tab label={'행사문의'} />
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
