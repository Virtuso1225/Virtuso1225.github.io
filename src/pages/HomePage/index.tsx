import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom'
import { LinkTypography } from '@src/components/LinkBox'
import LinkIcon from '@mui/icons-material/Link'

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdag1YBvFK1OUlXSwLjC5CnF_8zLV-QcHaPChbst2XZomBDgA/viewform'

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
                <Typography variant={matches ? 'subtitle2' : 'h5'}>고려대학교 ICT명품인재양성사업단</Typography>
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
            <Grid mt={1}>
              <Link to="/" style={{ textDecoration: 'none' }} onClick={() => window.open(REGISTER_URL, '_blank')}>
                <LinkTypography>
                  <LinkIcon sx={{ width: 21, height: 21 }} />
                  <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                    사전등록자에게는 배지(네임택)와 행사 당일 사용가능한 쿠폰을 제공합니다
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
              네이버클라우드, LG AI Research, 삼성SDS, 한화시스템, 카카오브레인
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
              연구 교류 및 성과 공유
            </Typography>
            <Typography variant="caption" mt={1}>
              사업단 소속 교수진 논문 성과 발표 사업단 산하 연구실 포스터 전시 및 데모 AI 기업 연구개발 성과 및 미래
              전략 발표 기업체 홍보 및 리크루팅
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
              Recruiting 참여 기업
            </Typography>
            <Typography variant="caption" mt={1}>
              Samsung Research, 삼성전기, 한화시스템, FuriosaAI, VIVE STUDIOS 등
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
