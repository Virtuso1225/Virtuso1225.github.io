import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { LEADER } from '@src/data/introduction'

const Leader = () => {
  const matches = useMediaQuery('(max-width:800px)')
  return (
    <Grid item sm={12} md={6} lg={6} pl={2}>
      <Grid item lg={8} md={12} ml={matches ? 0 : 8} pb={10}>
        <img src={LEADER.profile} width={180} height={240} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" fontWeight="700" color="anti.primary">
            인사말
          </Typography>
          <Typography variant="h6" fontWeight="700" color="anti.primary">
            {LEADER.position} {LEADER.name}
          </Typography>
          <Typography variant="body2" fontWeight="400" mt={2}>
            {LEADER.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Leader
