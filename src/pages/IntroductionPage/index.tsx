import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { INVITED_LECTURER } from '@src/data/introduction'
import LectureContainer from './LectureContainer'
import PageContainer from '@src/components/PageContainer'
// import PageTitle from '@src/components/PageContainer/PageTitle'

const OrganizerPage = () => {
  const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  // const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: theme.spacing(5)
          }}
        >
          <Typography variant="h4" fontWeight="900" color="secondary" sx={{ alignSelf: 'flex-end' }}>
            INVITED SPEAKERS
          </Typography>
          {!isMobile && <Divider sx={{ height: 3, width: '70%', backgroundColor: '#02306C', marginLeft: 1 }} />}
        </Box>
        {INVITED_LECTURER.map((lecturer, index) => (
          <LectureContainer lecturer={lecturer} key={index} />
        ))}
      </Grid>
    </PageContainer>
  )
}

export default OrganizerPage
