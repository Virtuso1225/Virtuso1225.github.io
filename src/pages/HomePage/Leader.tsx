import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LEADER } from '@src/data/introduction'

const Leader = () => {
  const matches = useMediaQuery('(max-width:800px)')
  const theme = useTheme()
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={6}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid item lg={8} md={12} ml={matches ? 0 : 8} pb={10}>
        <Box borderRadius={10} display={'flex'} flexDirection={'row'} justifyContent={matches ? 'center' : 'flex-end'}>
          <img src={LEADER.profile} width={180} height={240} loading="lazy" style={{ borderRadius: 240 }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} mt={theme.spacing(4)}>
          <Typography variant="h5" fontWeight="700" color="anti.primary" textAlign={matches ? 'left' : 'right'}>
            인사말
          </Typography>
          <Typography
            variant="h6"
            fontWeight="700"
            color="anti.primary"
            mt={theme.spacing(1)}
            textAlign={matches ? 'left' : 'right'}
          >
            {LEADER.position} {LEADER.name}
          </Typography>
          <Typography variant="body2" fontWeight="400" mt={2} textAlign={matches ? 'left' : 'right'}>
            {LEADER.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Leader
