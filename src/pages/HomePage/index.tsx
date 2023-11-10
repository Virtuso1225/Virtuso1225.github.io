import { Box, Grid, useMediaQuery } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Leader from './Leader'
import Title from './Title'

const HomePage = () => {
  const matches = useMediaQuery('(max-width:1000px)')

  return (
    <Box sx={{ mt: 10 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Helmet>
        <title>AI TECH DAY 2023</title>
      </Helmet>
      <Box height={'100%'}>
        <Grid
          container
          justifyContent="center"
          alignContent={'center'}
          // spacing={4}
          alignItems={'center'}
          width={'90vw'}
          pt={matches ? 2 : 6}
          // sx={{ border: 1, borderColor: 'red' }}
        >
          <Title />
          <Leader />
        </Grid>
      </Box>
    </Box>
  )
}

export default HomePage
