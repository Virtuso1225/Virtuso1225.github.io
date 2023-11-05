import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Box>
      <Typography>OOPS! NOt found! </Typography>
      <Link to="/">Go back to home</Link>
    </Box>
  )
}

export default NotFoundPage
