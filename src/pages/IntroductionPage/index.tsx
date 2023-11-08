import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { INVITED_LECTURER, LEADER } from '@src/data/introduction'
import LectureContainer from './LectureContainer'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'

const OrganizerPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="INTRODUCTION" />
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: matches ? theme.spacing(3) : '',
            mt: theme.spacing(10),
            width: isLg ? '48%' : '80%'
          }}
        >
          <Typography
            variant="h4"
            fontWeight="900"
            color="secondary"
            sx={{ alignSelf: 'flex-end', mb: theme.spacing(3) }}
          >
            LEADER
          </Typography>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid item lg={4} md={12}>
              <img src={LEADER.profile} width={150} height={200} />
            </Grid>
            <Grid item lg={8} md={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Divider sx={{ height: 3, width: '8%', backgroundColor: '#02306C', mb: theme.spacing(1) }} />
                <Typography variant="h4" fontWeight="700" color="anti.primary">
                  {LEADER.name}
                </Typography>
                <Typography variant="h6" fontWeight="500" color="secondary">
                  {LEADER.position}
                </Typography>
                <Typography variant="body2" fontWeight="400">
                  {LEADER.content}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
            INVITED LECTURER
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
