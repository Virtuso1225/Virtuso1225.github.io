import { Box, Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { INVITED_LECTURER, PROFESSOR } from '@src/data/introduction'
import LectureContainer from './LectureContainer'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'
import LinkIcon from '@mui/icons-material/Link'
const OrganizerPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  const is4K = useMediaQuery('(min-width: 2560px)')
  const WIDTH = is4K ? '32%' : isLg ? '48%' : '70%'
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <PageTitle title="PROFESSORS" />
        <Grid
          container
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: theme.spacing(3),
            justifyContent: 'center',
            width: WIDTH
          }}
        >
          {PROFESSOR.map((professor, index) => (
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              key={index}
              component={Button}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
              }}
              onClick={() => window.open(professor.url, '_blank')}
            >
              <Typography variant="h6">{professor.name}</Typography>
              <LinkIcon color="secondary" />
            </Grid>
          ))}
        </Grid>
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
