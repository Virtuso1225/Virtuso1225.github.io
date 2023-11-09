import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom'
import { LinkTypography } from '@src/components/LinkBox'

const HomePage = () => {
  const theme = useTheme()

  const matches = useMediaQuery('(max-width:1000px)')

  return (
    <Box display={'flex'} flexDirection={'column'} height={'90vh'} justifyContent={'center'} alignItems={'center'}>
      <Helmet>
        <title>AI TECH DAY 2023</title>
      </Helmet>
      <Grid
        container
        alignContent={'center'}
        spacing={4}
        alignItems={'center'}
        py={1}
        width={'100vw'}
        padding={matches ? 2 : 8}
      >
        <Grid item sm={12} md={6} lg={6} mb={10}>
          <Box>
            <Box display={'flex'} mt={1} alignItems={'baseline'}>
              <Box display={matches ? 'block' : 'flex'} alignItems={'baseline'}>
                <Typography variant={matches ? 'h6' : 'h4'} fontWeight={'bold'}>
                  2023&nbsp;
                </Typography>
                <Typography variant={matches ? 'subtitle2' : 'h5'}>고려대학교 ICT 명품인재양성사업단</Typography>
              </Box>
            </Box>
            <Typography variant={matches ? 'h2' : 'h1'} sx={{ fontWeight: 900, marginBottom: theme.spacing(2) }}>
              AI TECH DAY
            </Typography>
            <Grid>
              <Link to={'/program'} style={{ textDecoration: 'none' }}>
                <LinkTypography>
                  <CalendarTodayIcon color="inherit" fontSize="small" />
                  <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                    2023. 11. 22 (수) 10:00 ~ 18:10
                  </Typography>
                </LinkTypography>
              </Link>
            </Grid>
            <Grid mt={1}>
              <Link to={'/location'} style={{ textDecoration: 'none' }}>
                <LinkTypography>
                  <LocationOnIcon color="inherit" fontSize="small" />
                  <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                    고려대학교 하나스퀘어 강당 (지하 1층)
                  </Typography>
                </LinkTypography>
              </Link>
            </Grid>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={6} mb={10}>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
              초청강연
            </Typography>
            <Typography variant="caption" mt={1}>
              네이버클라우드 &nbsp;/ &nbsp; LG AI Research &nbsp;/ &nbsp; SKT / &nbsp; 삼성SDS &nbsp;/ &nbsp; 한화시스템
              &nbsp;/ &nbsp; 카카오브레인
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
              연구성과 공유
            </Typography>
            <Typography variant="caption" mt={1}>
              산업체 연구 소개 &nbsp;/ &nbsp; 포스터,데모 시상
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
              5개 기업 Recruiting
            </Typography>
            <Typography variant="caption" mt={1}>
              삼성리서치 &nbsp;/ &nbsp; 삼성전기 &nbsp;/ &nbsp; 한화시스템 &nbsp;/ &nbsp; 퓨리오사 AI &nbsp;/ &nbsp;
              VIVE STUDIOS
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
