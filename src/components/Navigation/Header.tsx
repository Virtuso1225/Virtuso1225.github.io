import { Box, Typography } from '@mui/material'
import HeaderTabs from './HeaderTabs'

const Header = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        width: '90%',
        height: '70px',
        borderBottom: '1px solid white',
        alignItems: 'center',
        paddingX: '10px',
        justifyContent: 'space-between'
      }}
    >
      <Typography fontSize={20} fontWeight={700} lineHeight="normal">
        정보대학 행사명
      </Typography>
      <HeaderTabs />
    </Box>
  )
}

export default Header
