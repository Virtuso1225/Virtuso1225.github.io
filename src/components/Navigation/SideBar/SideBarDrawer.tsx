import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Logo from '../Logo'
import { Link, useLocation } from 'react-router-dom'
import NavigationPaths from '@src/data/navigation'
interface SideBarDrawerProps {
  open: boolean
  handleDrawerClose: () => void
}

const SideBarDrawer = ({ open, handleDrawerClose }: SideBarDrawerProps) => {
  const location = useLocation()

  return (
    <Drawer
      open={open}
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          width: '100vw',
          boxSizing: 'border-box',
          opacity: 1
        }
      }}
    >
      <AppBar position="static" sx={{ background: 'inherit', borderBottom: 1, borderColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo handleClicked={handleDrawerClose} />
          <IconButton size="large" color="inherit" onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: 4 }}>
        <List>
          {NavigationPaths.map((page, index) => (
            <ListItem key={index} sx={{ borderBottom: 1, borderColor: 'inherit', alignItems: 'center', height: 60 }}>
              <Link to={`${page.path}`} onClick={handleDrawerClose} style={{ textDecoration: 'none' }}>
                <Typography fontWeight={location.pathname === page.path ? 'bold' : 'normal'}>{page.name}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideBarDrawer
