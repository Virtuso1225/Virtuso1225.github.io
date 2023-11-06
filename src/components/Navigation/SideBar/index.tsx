import { AppBar, IconButton, Toolbar } from '@mui/material'
import Logo from '@src/components/Navigation/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import SideBarDrawer from './SideBarDrawer'

const SideBarContainer = () => {
  const [open, setOpen] = useState(false)
  const handleDrawer = () => {
    setOpen(!open)
  }
  return (
    <AppBar position="static" sx={{ background: 'inherit', borderBottom: 1, borderColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo handleClicked={() => ''} />
        <IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <SideBarDrawer open={open} handleDrawerClose={handleDrawer} />
      </Toolbar>
    </AppBar>
  )
}

export default SideBarContainer
