import { Grid, Typography, Container, styled, Divider, Box, useMediaQuery } from '@mui/material'
import scheduleData from '@src/data/data'

const ScheduleGrid = () => {
  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Container sx={{ width: isMobile ? '90vw' : '70vw', marginBottom: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TitleTypography>시간</TitleTypography>
        </Grid>
        <Grid item xs={7}>
          <TitleTypography>프로그램</TitleTypography>
        </Grid>
        <Grid item xs={3}>
          <TitleTypography>연사</TitleTypography>
        </Grid>
      </Grid>
      <Divider color="secondary" sx={{ borderWidth: 1 }} />
      {scheduleData.map((item, index) => (
        <>
          <Grid container spacing={3} key={index}>
            <Grid item xs={2}>
              <ContentTypography>{item.time}</ContentTypography>
            </Grid>
            <Grid item xs={7}>
              <Box display={'flex'} flexDirection={'row'} justifyContent={item.presenter ? 'flex-start' : 'center'}>
                {item.presenter ? (
                  <ContentTypography>{item.program}</ContentTypography>
                ) : (
                  <Typography sx={{ margin: '1rem 0rem', fontsize: '1rem' }} color="secondary" fontWeight={'bold'}>
                    {item.program}
                  </Typography>
                )}
              </Box>
            </Grid>
            {item.presenter && (
              <Grid item xs={3}>
                <ContentTypography>{item.presenter}</ContentTypography>
              </Grid>
            )}
          </Grid>
          <Divider />
        </>
      ))}
    </Container>
  )
}

export default ScheduleGrid

const TitleTypography = styled(Typography)`
  font-weight: bold;
  margin-vertical: 1rem;
`

const ContentTypography = styled(Typography)`
  margin: 1rem 0rem;
  fontsize: 1rem;
`
