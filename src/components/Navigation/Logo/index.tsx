import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Typography fontSize={20} fontWeight={700} lineHeight="normal" >
        정보대학 행사명
      </Typography>
    </Link>
  )
}

export default Logo
