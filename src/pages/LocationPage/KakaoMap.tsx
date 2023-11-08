import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const KakaoMap = () => {
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(37.5846168, 127.0253533),
      level: 3
    }
    const map = new kakao.maps.Map(container, options)
    const markerPosition = new kakao.maps.LatLng(37.5846168, 127.0253533)

    const marker = new kakao.maps.Marker({
      position: markerPosition
    })

    marker.setMap(map)
  }, [])

  return (
    <Box sx={{ display: 'flex', padding: theme.spacing(1) }}>
      <Box id="map" style={{ width: isLg ? 500 : 300, height: isLg ? 500 : 300 }} />
    </Box>
  )
}

export default KakaoMap
