import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Logo from '../Logo'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageBtn from '../LanguageBtn'

interface SideBarDrawerProps {
  open: boolean
  handleDrawerClose: () => void
}

const SideBarDrawer = ({ open, handleDrawerClose }: SideBarDrawerProps) => {
  const { t } = useTranslation()

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
          {['agenda', 'location', 'contact', 'join'].map((text, index) => (
            <ListItem key={index} sx={{ borderBottom: 1, borderColor: 'inherit', alignItems: 'center', height: 60 }}>
              <Link to={`/${text}`} onClick={handleDrawerClose} style={{ textDecoration: 'none' }}>
                <Typography>{t(`${text}.title`)}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', margin: 4 }}>
        <LanguageBtn />
      </Box>
    </Drawer>
  )
}

export default SideBarDrawer
