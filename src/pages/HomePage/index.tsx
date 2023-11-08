import { Box, Grid, Typography, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom'
import { LinkTypography } from '@src/components/LinkBox'

const HomePage = () => {
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('md')

  return (
    <>
      <Helmet>
        <title>AI TECH DAY 2023</title>
      </Helmet>
      <Grid container spacing={10} alignItems="center" justifyContent="center" width={'100%'} height={'100%'}>
        <Grid item sm={12} md={6} lg={6} mt={8}>
          <Box>
            <Box display={'flex'} mt={1} alignItems={'baseline'}>
              <Typography variant="h6">고려대학교 ICT 명품인재양성사업단</Typography>
              <Typography variant="h5" fontWeight={'bold'}>
                &nbsp;2023
              </Typography>
            </Box>
            <Typography variant={isMobile ? 'h2' : 'h1'} sx={{ fontWeight: 900, marginBottom: theme.spacing(2) }}>
              AI TECH DAY
            </Typography>
            <Link to={'/program'} style={{ textDecoration: 'none' }}>
              <LinkTypography>
                <CalendarTodayIcon color="inherit" fontSize="small" />
                <Typography variant="body1" ml={1} fontWeight={'regular'} color="inherit">
                  2023. 11. 22 (수) 10:00 ~ 18:10
                </Typography>
              </LinkTypography>
            </Link>
            <Link to={'/location'} style={{ textDecoration: 'none' }}>
              <LinkTypography>
                <LocationOnIcon color="inherit" fontSize="small" />
                <Typography variant="body1" ml={1} fontWeight={'regular'} color="inherit">
                  고려대학교 하나스퀘어 강당 (지하 1층)
                </Typography>
              </LinkTypography>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={6} mt={8}>
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
    </>
  )
}

export default HomePage
