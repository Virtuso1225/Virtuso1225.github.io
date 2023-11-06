import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      <Box>
        <Typography>메인 페이지</Typography>
      </Box>
    </>
  )
}

export default MainPage
