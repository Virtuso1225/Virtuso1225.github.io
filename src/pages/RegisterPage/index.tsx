import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'

const RegisterPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="등록안내" />
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
          <Typography variant="h4" fontWeight="bold" mb={2}>
            헤헤 조금만 수고해주세요
          </Typography>
        </Box>
      </Grid>
    </PageContainer>
  )
}

export default RegisterPage
