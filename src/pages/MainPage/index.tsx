import { Box, Grid, Typography, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {
  const theme = useTheme()
  return (
    <>
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // paddingY: 10,
          paddingX: theme.spacing(6),
          borderColor: 'white',
          height: '70vh'
        }}
      >
        <Grid container rowGap={10}>
          <Grid item sm={12} md={7} lg={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <Typography variant="h1" fontWeight="700">
                정보대학 인공지능
              </Typography>
              <Typography variant="h1" fontWeight="700">
                학회 컨퍼런스
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={5} lg={5}>
            <Box>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sapien at massa varius iaculis.
                Curabitur vel bibendum justo. Nullam euismod, ante ac vulputate bibendum, justo nisi vulputate tellus,
                vel accumsan libero ligula a tellus. In hac habitasse platea dictumst. Suspendisse cursus, arcu in
                aliquam sollicitudin, orci quam ullamcorper urna, in auctor libero sapien non libero. Nullam interdum
                risus non odio posuere, non vestibulum tortor vulputate. Sed efficitur velit vitae eros pellentesque,
                vel hendrerit quam mattis.{' '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MainPage
