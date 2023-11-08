import { Box, Divider, Grid, Typography, useTheme } from '@mui/material'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KakaoMap from './KakaoMap'

const LOCATION = '서울 성북구 고려대로22길 6-7'
const SPECIFIC_LOCATION = '고려대학교 하나스퀘어 강당 (지하1층)'

const LocationPage = () => {
  const theme = useTheme()
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="LOCATION" />
        </Grid>
        <Grid
          container
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: theme.spacing(10)
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: theme.spacing(1),
              justifyContent: 'center'
            }}
          >
            <LocationOnIcon color="secondary" sx={{ width: 21, height: 21 }} />
            <Typography variant="body1" fontWeight={800}>
              {LOCATION}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={800}>
              {SPECIFIC_LOCATION}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', mr: theme.spacing(2) }} />
            <Typography variant="h6" fontWeight={800} color="secondary">
              지도
            </Typography>
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', ml: theme.spacing(2) }} />
          </Box>
          <KakaoMap />
          {/* <Box sx={{ padding: theme.spacing(1) }}>
            <img src="/assets/map.svg" width="100%" height="100%" />
          </Box> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', mr: theme.spacing(2) }} />
            <Typography variant="h6" fontWeight={800} color="secondary">
              행사장 도면
            </Typography>
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', ml: theme.spacing(2) }} />
          </Box>
          <Box>
            <img src="/assets/blueprint.svg" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default LocationPage
